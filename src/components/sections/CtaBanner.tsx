"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
    return (
        <section className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative rounded-2xl bg-base-black text-base-white p-8 md:p-12 overflow-hidden"
                >
                    {/* Subtle background texture — monochrome grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                        }}
                    />

                    <div className="relative z-10 max-w-2xl">
                        <span className="inline-block font-mono text-xs tracking-widest uppercase text-white/40 mb-4">
                            Konsultasi Gratis
                        </span>

                        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                            Siap Wujudkan Proyek<br className="hidden sm:block" /> atau Tugas Kamu?
                        </h2>

                        <p className="mt-4 text-sm md:text-base text-white/55 leading-relaxed max-w-xl">
                            Diskusikan detail fitur, harga, dan deadline langsung dengan tim kami. Tanpa komitmen di awal.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {CONTACT.admins.map((admin) => (
                                <a
                                    key={admin.phone}
                                    href={admin.waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 bg-white text-base-black hover:bg-base-gray-light"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{admin.name}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
