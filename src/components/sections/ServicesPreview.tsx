"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Moon, Sun } from "lucide-react";

export function ServicesPreview() {
    const features = [
        { icon: <Star className="w-8 h-8 text-[#F59E0B]" />, title: "Születési Képlet", delay: 0.1 },
        { icon: <Moon className="w-8 h-8 text-[#8B5CF6]" />, title: "Karma Elemzés", delay: 0.2 },
        { icon: <Sun className="w-8 h-8 text-[#EC4899]" />, title: "Éves Prognózis", delay: 0.3 },
        { icon: <Sparkles className="w-8 h-8 text-[#10B981]" />, title: "Aktiváció", delay: 0.4 },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4"
                    >
                        Miben segíthetek?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Az asztrológia egy fénynyelv. Segítek lefordítani a saját életedre.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-[#FEF3C7] rounded-3xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-200">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#1F2937]">{feature.title}</h3>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Kíváncsi vagy a részletekre?</h3>
                        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto">
                            Fedezd fel a teljes szolgáltatási palettát, a karma elemzéstől a Walk & Talk konzultációkig.
                            Válaszd ki a számodra legmegfelelőbb utat az önismerethez.
                        </p>
                        <Link href="/szolgaltatasok">
                            <Button size="lg" className="bg-white text-[#EC4899] hover:bg-gray-100 border-none text-lg px-10 shadow-xl transform hover:scale-105 transition-all">
                                Megnézem az összes szolgáltatást
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
