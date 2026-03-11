"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
    return (
        <section className="py-24 bg-[#FEF3C7] relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 -left-20 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#EC4899]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative order-2 md:order-1"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Next.js Image requires width/height or fill. Using fill for responsive aspect ratio container. */}
                            {/* Note: In production, ensure the image is moved to public/images/profile.jpg */}

                            {/* Placeholder text if image is missing during dev, but we moved it */}
                            <img
                                src="/images/profile.jpg"
                                alt="Elekes Krisztina Zolna"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Playful elements around image */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl transform rotate-6 animate-float">
                            <span className="text-2xl">✨</span>
                        </div>
                        <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl transform -rotate-6 animate-float-delayed">
                            <span className="text-2xl">🌈</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6 font-mono">
                            Szia, <span className="text-[#EC4899]">Zolna</span> vagyok!
                        </h2>
                        <h3 className="text-xl text-[#F59E0B] font-semibold mb-6">
                            Szivárvány Asztrológus
                        </h3>

                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm mb-8">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Számomra az asztrológia egy fénynyelv. A születési képlet egy személyre szabott fénykód, a legnagyobb szembesülés és boldogság lehetőség a saját képletünkben rejlik.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Az elemzés során elmondom neked, hogy a test, lélek szellem hármasában TE milyen energiákat hoztál le magadnak, milyen energiákat mozgatsz párkapcsolati szinten, hol vannak a félelmeid, karmikus sérülésed.
                            </p>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
