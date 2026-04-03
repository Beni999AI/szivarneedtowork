import { blogPosts as hardcodedPosts, BlogPost } from '@/data/blogs';

const REPO_OWNER = 'Beni999AI';
const REPO_NAME = 'szivarneedtowork';
const POSTS_PATH = 'content/posts.json';
const RAW_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${POSTS_PATH}`;
const API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${POSTS_PATH}`;

export async function getPosts(fresh = false): Promise<BlogPost[]> {
  try {
    const cacheOption = fresh
      ? { cache: 'no-store' as const }
      : { next: { revalidate: 86400 } };
    const res = await fetch(RAW_URL, cacheOption);
    if (!res.ok) return hardcodedPosts;
    const posts: BlogPost[] = await res.json();
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
