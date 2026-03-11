"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

import { useEffect, useState } from "react";

export function Contact() {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash === "#contact") {
            setShouldAnimate(true);
        }
    }, []);

    return (
        <section id="contact" className="py-24 bg-[#1F2937] text-white relative overflow-hidden">
            {/* Abstract background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Lépj Velem Kapcsolatba</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Készen állsz a felfedezésre? Keress bátran az alábbi elérhetőségeken.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ContactCard
                        icon={<Phone className="w-8 h-8" />}
                        title="Telefon"
                        content="+36 30 555 2051"
                        href="tel:+36305552051"
                        color="text-[#F59E0B]"
                        delay={0.1}
                        forceAnimation={shouldAnimate}
                    />
                    <ContactCard
                        icon={<Mail className="w-8 h-8" />}
                        title="Email"
                        content="ekzolna@gmail.com"
                        href="mailto:ekzolna@gmail.com"
                        color="text-[#EC4899]"
                        delay={0.2}
                        forceAnimation={shouldAnimate}
                    />
                    <ContactCard
                        icon={<Facebook className="w-8 h-8" />}
                        title="Facebook"
                        content="Szivárványasztrológia"
                        href="https://www.facebook.com/ElekesKZ"
                        color="text-[#3b82f6]"
                        delay={0.3}
                        forceAnimation={shouldAnimate}
                    />
                    <ContactCard
                        icon={<Instagram className="w-8 h-8" />}
                        title="Instagram"
                        content="@elekeszolna"
                        href="https://www.instagram.com/elekeszolna/"
                        color="text-[#d62976]"
                        delay={0.4}
                        forceAnimation={shouldAnimate}
                    />
                </div>
            </div>
        </section>
    );
}

function ContactCard({ icon, title, content, href, color, delay, forceAnimation }: any) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={forceAnimation ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group cursor-pointer"
        >
            <div className={`mb-4 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors break-all">
                {content}
            </p>
        </motion.a>
    )
}
