import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { EmailPopup } from "@/components/sections/EmailPopup";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="min-h-screen bg-[#FEF3C7]">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <BlogPreview posts={posts} />
      <Contact />
      <Footer />
      <EmailPopup />
    </main>
  );
}
