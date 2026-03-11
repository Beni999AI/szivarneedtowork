"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navLinks = [
    { name: "Szolgáltatások", href: "/szolgaltatasok" },
    { name: "Aktuális írások", href: "/aktualis-irasok" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const [path, hash] = href.split('#');

        if (pathname === path || (path === '/' && pathname === '/')) {
            const element = document.getElementById(hash);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });
                setIsOpen(false);
            }
        } else {
            router.push(href);
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-[#FEF3C7]/80 backdrop-blur-md border-b border-[#EC4899]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-[#EC4899] font-mono tracking-tighter hover:scale-105 transition-transform">
                            Szivárvány<span className="text-[#8B5CF6]">Asztrológia</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-gray-700 hover:text-[#EC4899] font-medium transition-colors relative group",
                                    pathname === link.href && "text-[#EC4899]"
                                )}
                            >
                                {link.name}
                                <span className={clsx(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC4899] transition-all group-hover:w-full",
                                    pathname === link.href && "w-full"
                                )} />
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={(e) => scrollToSection(e, "/#contact")}
                            className="bg-[#EC4899] text-white px-5 py-2 rounded-full font-bold hover:bg-[#db2777] transition-all transform hover:scale-105 shadow-lg shadow-pink-500/30"
                        >
                            Időpontot kérek
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[#EC4899] focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-[#FEF3C7] border-b border-[#EC4899]/20 absolute w-full"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-gray-700 hover:text-[#EC4899] font-medium text-lg w-full text-center"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={(e) => scrollToSection(e, "/#contact")}
                            className="mt-4 block w-10/12 text-center bg-[#EC4899] text-white px-5 py-3 rounded-full font-bold shadow-md"
                        >
                            Időpontot kérek
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
