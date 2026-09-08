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
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function Benefits() {
    return (
        <section id="benefit" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
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
                    viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {BENEFITS.map((benefit) => {
                        const IconComponent = ICON_MAP[benefit.icon] || Code2;
                        return (
                            <motion.div
                                key={benefit.title}
                                variants={itemVariants}
                                className="group p-7 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300 cursor-default"
                            >
                                <div className="w-10 h-10 rounded-xl border border-base-gray-light bg-base-subtle flex items-center justify-center mb-5 group-hover:bg-base-black group-hover:border-base-black transition-all duration-300">
                                    <IconComponent className="w-5 h-5 text-base-gray-dark group-hover:text-base-white transition-colors duration-300" />
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