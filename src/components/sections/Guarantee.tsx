"use client";

import { motion } from "framer-motion";
import { GUARANTEES } from "@/lib/data";
import { ShieldCheck, RefreshCw, Lock, LucideIcon } from "lucide-react";

const GUARANTEE_ICONS: Record<string, LucideIcon> = {
    ShieldCheck,
    RefreshCw,
    Lock,
};

export default function Guarantee() {
    return (
        <section className="py-14 md:py-20 border-t border-base-gray-light bg-base-gray-light/40">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-2xl md:text-3xl font-medium max-w-lg">
                    Garansi Codevela
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
                    {GUARANTEES.map((guarantee, i) => {
                        const IconComponent = GUARANTEE_ICONS[guarantee.icon] || ShieldCheck;
                        return (
                            <motion.div
                                key={guarantee.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                                className="p-6 rounded-2xl border border-base-gray-light bg-white shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-base-black text-base-white flex items-center justify-center mb-5 shadow-sm">
                                    <IconComponent className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="font-medium text-lg text-base-black">{guarantee.title}</h3>
                                <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                    {guarantee.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}