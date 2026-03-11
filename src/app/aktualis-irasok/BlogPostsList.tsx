"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/data/blogs";
import { Calendar } from "lucide-react";
import clsx from "clsx";

export function BlogPostsList({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6">Aktuális Írások</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Olvasd el legfrissebb gondolataimat az égi energiákról és azok hatásairól.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
                {posts.map((post, index) => (
                    <BlogPostCard key={post.slug} post={post} index={index} />
                ))}
            </div>
        </section>
    );
}

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={clsx(
                "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-2 border-transparent hover:border-[#F59E0B]/30 transition-all",
                index % 2 === 0 ? "md:mr-20" : "md:ml-20"
            )}
        >
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                <div className="bg-[#FEF3C7] text-[#F59E0B] px-4 py-2 rounded-full font-bold flex items-center text-sm shadow-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-8 leading-tight">
                {post.title}
            </h2>

            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line mb-8 font-serif">
                {post.content}
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-full" />
        </motion.article>
    );
}
