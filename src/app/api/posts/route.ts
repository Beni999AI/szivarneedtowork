import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getPosts, savePosts } from '@/lib/posts';

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, content, password } = body;

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
  }

  const dateISO = new Date().toISOString().split('T')[0];
  const dateObj = new Date();
  const hunMonths = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  const date = `${dateObj.getFullYear()}. ${hunMonths[dateObj.getMonth()]} ${String(dateObj.getDate()).padStart(2, '0')}.`;

  const slug = title
    .toLowerCase()
    .replace(/[áà]/g, 'a').replace(/[éè]/g, 'e').replace(/[íì]/g, 'i')
    .replace(/[óö]/g, 'o').replace(/[úü]/g, 'u').replace(/ő/g, 'o').replace(/ű/g, 'u')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const excerpt = content.replace(/\n/g, ' ').slice(0, 160);

  const currentPosts = await getPosts(true);
  const newPost = { slug, title, date, dateISO, excerpt, content };

  try {
    await savePosts([newPost, ...currentPosts]);
  } catch (err) {
    console.error('savePosts failed:', err);
    return NextResponse.json({ error: 'Failed to save post.' }, { status: 500 });
  }

  revalidatePath('/aktualis-irasok');

  return NextResponse.json({ success: true, post: newPost }, { status: 201 });
}
