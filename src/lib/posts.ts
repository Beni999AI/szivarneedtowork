import { blogPosts as hardcodedPosts, BlogPost } from '@/data/blogs';

export async function getPosts(): Promise<BlogPost[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return hardcodedPosts;
  try {
    const { list, } = await import('@vercel/blob');
    const { blobs } = await list({ prefix: 'posts.json' });
    if (blobs.length === 0) return hardcodedPosts;
    const res = await fetch(blobs[0].url, { cache: 'no-store' });
    const posts: BlogPost[] = await res.json();
    return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
  } catch {
    return hardcodedPosts;
  }
}

export async function savePosts(posts: BlogPost[]): Promise<void> {
  const { put } = await import('@vercel/blob');
  await put('posts.json', JSON.stringify(posts), { access: 'public', addRandomSuffix: false });
}
