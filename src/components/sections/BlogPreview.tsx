"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogs";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
    const latestPosts = posts.slice(0, 3);

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-[#1F2937] mb-2">Aktuális Írások</h2>
                        <p className="text-gray-500">Gondolatok az égi állásokról</p>
                    </div>
                    <Link href="/aktualis-irasok">
                        <Button variant="outline" className="group">
                            Összes bejegyzés
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#FEF3C7] rounded-3xl p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#F59E0B]/20 group flex flex-col h-full"
                        >
                            <div className="mb-4 text-sm text-[#F59E0B] font-semibold flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {post.date}
                            </div>

                            <h3 className="text-xl font-bold text-[#1F2937] mb-4 group-hover:text-[#EC4899] transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                                {post.excerpt}
                            </p>

                            <Link href="/aktualis-irasok" className="inline-flex items-center text-[#8B5CF6] font-bold hover:text-[#7c3aed] mt-auto">
                                Elolvasom
                                <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
