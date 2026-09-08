"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/data";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const terminalLines = [
    { prompt: "$", text: "codevela init --project your-idea" },
    { prompt: "✓", text: "arsitektur clean code & standar industri" },
    { prompt: "✓", text: "komitmen tepat waktu & hasil presisi" },
    { prompt: "✓", text: "progres transparan & komunikasi aktif" },
];

export default function Hero() {
    return (
        <section className="pt-36 pb-16 md:pt-44 md:pb-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text side */}
                <motion.div variants={container} initial="hidden" animate="show" className="text-center md:text-left">
                    <motion.h1
                        variants={item}
                        className="font-mono text-3xl md:text-[2.6rem] font-semibold tracking-tight leading-[1.2]"
                    >
                        Solusi IT Profesional<br />
                        <span className="text-base-gray-medium font-medium">untuk Bisnis & Akademik.</span>
                    </motion.h1>

                    <motion.p variants={item} className="mt-5 text-sm md:text-base text-base-gray-dark max-w-md mx-auto md:mx-0 leading-relaxed">
                        Dari tugas kuliah hingga website company profile. Deadline terjaga, kode rapi, komunikasi terbuka.
                    </motion.p>

                    <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <Button href={CONTACT.primaryWaLink} variant="primary" external>
                            Konsultasi Gratis
                        </Button>
                        <Button href="#portofolio" variant="secondary">
                            Lihat Portofolio
                        </Button>
                    </motion.div>

                    {/* Trust signal */}
                    <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-base-gray-dark font-medium">
                        <span className="font-mono px-2.5 py-1 rounded-md bg-base-white border border-base-gray-light hover:border-base-black transition-colors shadow-xs">
                            10+ proyek selesai
                        </span>
                        <span className="w-px h-3 bg-base-gray hidden sm:inline-block" />
                        <span className="font-mono px-2.5 py-1 rounded-md bg-base-white border border-base-gray-light hover:border-base-black transition-colors shadow-xs">
                            Respons cepat
                        </span>
                        <span className="w-px h-3 bg-base-gray hidden sm:inline-block" />
                        <span className="font-mono px-2.5 py-1 rounded-md bg-base-white border border-base-gray-light hover:border-base-black transition-colors shadow-xs">
                            Garansi bug
                        </span>
                    </motion.div>
                </motion.div>

                {/* Terminal side */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                    className="group rounded-xl bg-base-black text-base-white overflow-hidden shadow-2xl border border-white/10 hover:border-white/25 rotate-[-1deg] hover:rotate-0 transition-all duration-300"
                >
                    {/* Terminal titlebar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-red-400/80 transition-colors" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-amber-400/80 transition-colors" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-emerald-400/80 transition-colors" />
                            <span className="ml-2 font-mono text-xs text-white/40">bash — codevela-cli</span>
                        </div>
                        <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/90 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>ready</span>
                        </span>
                    </div>
                    <div className="p-5 font-mono text-sm space-y-2.5">
                        {terminalLines.map((line, i) => (
                            <motion.p
                                key={line.text}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 + i * 0.3 }}
                                className="flex items-start gap-2"
                            >
                                <span className={`shrink-0 ${line.prompt === "✓" ? "text-white/60" : "text-white/35"}`}>
                                    {line.prompt}
                                </span>
                                <span className={line.prompt === "✓" ? "text-white/80" : "text-white/60"}>
                                    {line.text}
                                </span>
                            </motion.p>
                        ))}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 1.9, duration: 1, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-white/50 align-middle mt-1"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}