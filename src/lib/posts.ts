import { list, put } from '@vercel/blob';
import { blogPosts as hardcodedPosts, BlogPost } from '@/data/blogs';

export async function getPosts(): Promise<BlogPost[]> {
  const { blobs } = await list({ prefix: 'posts.json' });
  if (blobs.length === 0) return hardcodedPosts;
  const res = await fetch(blobs[0].url, { cache: 'no-store' });
  const posts: BlogPost[] = await res.json();
  return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
}

export async function savePosts(posts: BlogPost[]): Promise<void> {
  await put('posts.json', JSON.stringify(posts), { access: 'public', addRandomSuffix: false });
}
