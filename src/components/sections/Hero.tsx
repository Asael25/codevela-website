"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/data";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const terminalLines = [
    { prompt: "$", text: "codevela init --project company-profile" },
    { prompt: "✓", text: "clean code" },
    { prompt: "✓", text: "on-time delivery" },
    { prompt: "✓", text: "transparent progress" },
];

export default function Hero() {
    return (
        <section className="pt-32 pb-14 md:pt-40 md:pb-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div variants={container} initial="hidden" animate="show" className="text-center md:text-left">
                    <motion.h1
                        variants={item}
                        className="font-mono text-3xl md:text-5xl font-medium tracking-tight leading-tight"
                    >
                        Solusi IT & Pemrograman Profesional untuk Bisnis dan Akademik Anda.
                    </motion.h1>

                    <motion.p variants={item} className="mt-6 text-base md:text-lg text-base-gray-dark max-w-xl">
                        Dari tugas kuliah hingga website Company Profile. Deadline terjaga, hasil rapi.
                    </motion.p>

                    <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <Button href={CONTACT.primaryWaLink} variant="primary" external>
                            Konsultasi Gratis
                        </Button>
                        <Button href="#portofolio" variant="secondary">
                            Lihat Portofolio
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24, rotate: -1 }}
                    animate={{ opacity: 1, y: 0, rotate: -1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="rounded-xl bg-base-black text-base-white overflow-hidden shadow-xl"
                >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                        <span className="w-3 h-3 rounded-full bg-white/20" />
                        <span className="w-3 h-3 rounded-full bg-white/20" />
                        <span className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="p-6 font-mono text-sm space-y-3">
                        {terminalLines.map((line, i) => (
                            <motion.p
                                key={line.text}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 + i * 0.35 }}
                            >
                                <span className={line.prompt === "✓" ? "text-accent" : "text-base-gray"}>
                                    {line.prompt}
                                </span>{" "}
                                {line.text}
                            </motion.p>
                        ))}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 2.2, duration: 1, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-accent align-middle"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}