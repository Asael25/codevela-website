"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";

export default function CtaBanner() {
    return (
        <section className="py-14 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative rounded-3xl bg-base-black text-base-white p-8 md:p-14 overflow-hidden border border-white/10 shadow-2xl"
                >
                    {/* Background Subtle Accent Glow */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent text-xs font-mono font-medium mb-6 backdrop-blur-sm border border-white/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Konsultasi Gratis 24/7</span>
                        </div>

                        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                            Siap Mewujudkan Proyek Web atau Tugas Anda?
                        </h2>

                        <p className="mt-4 text-sm md:text-base text-base-gray leading-relaxed max-w-xl">
                            Diskusikan detail fitur, harga, dan deadline Anda secara langsung dengan tim kami. Tanpa komitmen di awal.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            {CONTACT.admins.map((admin, index) => (
                                <a
                                    key={admin.phone}
                                    href={admin.waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${index === 0
                                            ? "bg-accent text-base-black font-semibold hover:bg-accent/90 shadow-lg shadow-accent/20 hover:scale-[1.02]"
                                            : "bg-white/10 text-white hover:bg-white/20 border border-white/15 hover:scale-[1.02]"
                                        }`}
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Chat {admin.name}</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
