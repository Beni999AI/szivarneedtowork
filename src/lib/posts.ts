import { blogPosts as hardcodedPosts, BlogPost } from '@/data/blogs';

function getBlobBaseUrl(): string | null {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;
  const parts = token.split('_');
  // token format: vercel_blob_rw_<storeId>_<secret>
  if (parts.length < 4) return null;
  const storeId = parts[3];
  return `https://${storeId}.public.blob.vercel-storage.com`;
}

export async function getPosts(): Promise<BlogPost[]> {
  const baseUrl = getBlobBaseUrl();
  if (!baseUrl) return hardcodedPosts;

  try {
    const res = await fetch(`${baseUrl}/posts.json`, { cache: 'no-store' });
    if (!res.ok) return hardcodedPosts; // 404 = no posts saved yet, or other error
    const posts: BlogPost[] = await res.json();
    return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
  } catch {
    return hardcodedPosts;
  }
}

export async function savePosts(posts: BlogPost[]): Promise<void> {
  const { put } = await import('@vercel/blob');
  await put('posts.json', JSON.stringify(posts), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
