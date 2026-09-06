"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/data";
import { Code2, Clock, MessageSquare, LucideIcon, Sparkles } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    Code2,
    Clock,
    MessageSquare,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 110,
            damping: 14,
        },
    },
};

export default function Benefits() {
    return (
        <section id="benefit" className="py-14 md:py-20 border-t border-base-gray-light relative overflow-hidden">
            {/* Ambient Accent Background Glow */}
            <div className="absolute top-1/2 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 -right-32 w-80 h-80 bg-base-black/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-black/5 text-xs font-mono font-medium text-base-gray-dark mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span>Komitmen Utama</span>
                    </div>
                    <h2 className="font-mono text-2xl md:text-3xl font-medium max-w-lg text-base-black">
                        Kenapa Memilih Codevela
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8"
                >
                    {BENEFITS.map((benefit) => {
                        const IconComponent = ICON_MAP[benefit.icon] || Code2;
                        return (
                            <motion.div
                                key={benefit.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 300, damping: 15 },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative p-7 rounded-2xl border border-base-gray-light/90 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-base-black/5 hover:border-base-black/40 transition-all duration-300 overflow-hidden"
                            >
                                {/* Top Accent Line Animation on Hover */}
                                <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-base-black via-accent to-base-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <motion.div
                                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="w-12 h-12 rounded-xl bg-base-black text-base-white flex items-center justify-center mb-6 shadow-md group-hover:bg-accent group-hover:text-base-black transition-colors duration-300"
                                >
                                    <IconComponent className="w-6 h-6 transition-colors duration-300" />
                                </motion.div>

                                <h3 className="font-mono text-lg font-bold text-base-black group-hover:text-base-black transition-colors">
                                    {benefit.title}
                                </h3>

                                <p className="mt-2.5 text-sm text-base-gray-dark leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
