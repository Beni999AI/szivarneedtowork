import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPosts } from "@/lib/posts";
import { BlogPostsList } from "./BlogPostsList";

export default async function BlogPage() {
    const posts = await getPosts();
    return (
        <main className="min-h-screen bg-[#FEF3C7]">
            <Navbar />
            <BlogPostsList posts={posts} />
            <Footer />
        </main>
    );
}
