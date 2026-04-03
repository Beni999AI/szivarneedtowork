import { readFileSync } from 'fs';
import { join } from 'path';
import { blogPosts as hardcodedPosts, BlogPost } from '@/data/blogs';

const REPO_OWNER = 'Beni999AI';
const REPO_NAME = 'szivarneedtowork';
const POSTS_PATH = 'content/posts.json';
const API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${POSTS_PATH}`;

export async function getPosts(fresh = false): Promise<BlogPost[]> {
  // When fresh (POST handler needs latest from GitHub), use GitHub API
  if (fresh) {
    try {
      const token = process.env.GITHUB_TOKEN;
      const res = await fetch(API_URL, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          Accept: 'application/vnd.github.v3+json',
        },
        cache: 'no-store',
      });
      if (res.ok) {
        const data = await res.json();
        const content = Buffer.from(data.content, 'base64').toString('utf-8');
        const posts: BlogPost[] = JSON.parse(content);
        return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
      }
    } catch { /* fall through */ }
    return hardcodedPosts;
  }

  // For page renders, read from the deployed file (no network call, no CDN cache issues)
  try {
    const filePath = join(process.cwd(), 'content', 'posts.json');
    const data = readFileSync(filePath, 'utf-8');
    const posts: BlogPost[] = JSON.parse(data);
    return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
  } catch {
    return hardcodedPosts;
  }
}

export async function savePosts(posts: BlogPost[]): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN not configured');

  // Get current file SHA (required by GitHub API to update an existing file)
  let sha: string | undefined;
  const getRes = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
    cache: 'no-store',
  });
  if (getRes.ok) {
    const data = await getRes.json();
    sha = data.sha;
  }

  const content = Buffer.from(JSON.stringify(posts, null, 2)).toString('base64');

  const putRes = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Új bejegyzés: ${posts[0]?.title || 'frissítés'}`,
      content,
      ...(sha ? { sha } : {}),
    }),
    cache: 'no-store',
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    throw new Error(`GitHub API error: ${putRes.status} - ${err}`);
  }
}
