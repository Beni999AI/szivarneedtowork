"use client";

import { AnimatedDots } from "@/components/ui/animated-dots";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#FEF3C7]">
            <div className="absolute inset-0 z-0">
                <AnimatedDots
                    backgroundColor="#FEF3C7"
                    opacity={0.5}
                    dotRadius={35}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/30 backdrop-blur-sm p-12 rounded-3xl border border-white/50 shadow-xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 font-sans"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]">
                        Szivárvány
                    </span>{" "}
                    <span className="text-[#1F2937]">Asztrológia</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Fedezd fel a benned rejlő színeket és a csillagok üzenetét egy játékos, szeretetteljes megközelítésben.
                    <br /><span className="font-semibold text-[#EC4899] italic">Csak jó energiák!</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/szolgaltatasok">
                        <Button size="lg" className="w-full sm:w-auto text-lg group">
                            Szolgáltatásaim
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                </motion.div>
            </div>
        </div>
    );
}
