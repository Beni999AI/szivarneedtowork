"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { services } from "@/data/services";
import { useState } from "react";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#FEF3C7]">
            <Navbar />

            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6">Szolgáltatások</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fedezd fel a csillagok üzenetét és találd meg a számodra legmegfelelőbb útmutatást.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-white/50 p-10 rounded-3xl border-2 border-[#EC4899]/20"
                >
                    <h3 className="text-3xl font-bold mb-6 text-[#1F2937]">Melyiket válasszam?</h3>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Ha bizonytalan vagy, hogy melyik elemzés lenne a leghasznosabb számodra jelenlegi élethelyzetedben, keress bátran, és segítek választani.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg" className="text-lg bg-[#8B5CF6] hover:bg-[#7c3aed]">
                            Segítséget kérek a választáshoz
                        </Button>
                    </Link>
                </motion.div>

            </section>

            <Footer />
        </main>
    );
}

function ServiceCard({ service, index }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-transparent hover:border-[#EC4899]/30 transition-all"
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center cursor-pointer group"
            >
                <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-[#1F2937] group-hover:text-[#EC4899] transition-colors mb-2">
                        {service.title}
                    </h2>
                    <div className="flex items-center justify-center md:justify-start text-gray-500 font-medium">
                        <Clock className="w-5 h-5 mr-2 text-[#F59E0B]" />
                        {service.duration}
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-[#8B5CF6] font-bold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4 decoration-[#F59E0B]">
                        {isOpen ? "Kevesebb" : "Részletek"}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FEF3C7] transition-colors">
                        {isOpen ? <ChevronUp className="w-6 h-6 text-[#1F2937]" /> : <ChevronDown className="w-6 h-6 text-[#1F2937]" />}
                    </div>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-[#FEF3C7]/30"
            >
                <div className="p-6 md:p-8 pt-0 text-gray-700 leading-loose text-lg border-t border-gray-100">
                    <div className={`flex flex-col ${service.orientation === 'vertical' ? 'md:flex-row md:items-start md:gap-8' : ''}`}>
                        <div className="flex-1">
                            <p className="mb-6 font-medium">{service.description}</p>
                            {service.longDescription && (
                                <div className="whitespace-pre-line text-gray-600 mb-6">
                                    {service.longDescription}
                                </div>
                            )}
                            {service.orientation === 'horizontal' && service.image && (
                                <div className="mt-8 mb-8 rounded-2xl overflow-hidden shadow-lg max-w-lg mx-auto">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}
                            <div className="mt-8 flex justify-center md:justify-start">
                                <Link href="/#contact">
                                    <Button className="bg-[#EC4899] hover:bg-[#db2777]">
                                        Jelentkezem erre
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {service.orientation === 'vertical' && service.image && (
                            <div className="mt-8 md:mt-0 md:w-1/3 flex-shrink-0">
                                <div className="rounded-2xl overflow-hidden shadow-lg sticky top-24">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
