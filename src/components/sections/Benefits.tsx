"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/data";
import { Code2, Clock, MessageSquare, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    Code2,
    Clock,
    MessageSquare,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" as const },
    },
};

export default function Benefits() {
    return (
        <section id="benefit" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">Komitmen Utama</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                        Kenapa Memilih Codevela
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {BENEFITS.map((benefit) => {
                        const IconComponent = ICON_MAP[benefit.icon] || Code2;
                        return (
                            <motion.div
                                key={benefit.title}
                                variants={itemVariants}
                                className="group p-7 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-md hover:border-base-gray-medium transition-all duration-200"
                            >
                                <div className="w-9 h-9 rounded-lg border border-base-gray-light bg-base-subtle flex items-center justify-center mb-5 group-hover:border-base-gray-medium transition-colors duration-200">
                                    <IconComponent className="w-4 h-4 text-base-gray-dark" />
                                </div>

                                <h3 className="font-mono text-base font-semibold text-base-black">
                                    {benefit.title}
                                </h3>

                                <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
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