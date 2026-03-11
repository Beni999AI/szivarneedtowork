"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmailPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Show popup after 20 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 20000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Hiba történt a feliratkozás során.');
            }

            setSubmitted(true);
            setTimeout(() => setIsOpen(false), 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#FEF3C7] rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-[#EC4899]/20"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>

                        {!submitted ? (
                            <>
                                <div className="text-center mb-6">
                                    <span className="text-4xl mb-4 block">💌</span>
                                    <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Ne maradj le a csodákról!</h3>
                                    <p className="text-gray-600">
                                        Iratkozz fel hírlevelünkre, hogy elsőként értesülj a friss asztrológiai előrejelzésekről és akciókról.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email címed..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 outline-none transition-all placeholder:text-gray-400 bg-white disabled:opacity-50"
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                                    <Button type="submit" className="w-full text-lg" disabled={loading}>
                                        {loading ? "Feliratkozás..." : "Feliratkozom!"}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <span className="text-5xl mb-4 block">✨</span>
                                <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Köszönjük!</h3>
                                <p className="text-gray-600">
                                    Sikeresen feliratkoztál. Hamarosan küldjük a varázslatot!
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
