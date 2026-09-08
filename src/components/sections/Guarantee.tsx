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
        <section className="py-12 md:py-16 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">Jaminan Kami</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                        Garansi Codevela
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {GUARANTEES.map((guarantee, i) => {
                        const IconComponent = GUARANTEE_ICONS[guarantee.icon] || ShieldCheck;
                        return (
                            <motion.div
                                key={guarantee.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="p-7 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-md hover:border-base-gray-medium transition-all duration-200"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg border border-base-gray-light bg-base-subtle flex items-center justify-center shrink-0">
                                        <IconComponent className="w-4 h-4 text-base-gray-dark" />
                                    </div>
                                    <h3 className="font-mono text-sm font-semibold text-base-black">{guarantee.title}</h3>
                                </div>
                                <p className="text-sm text-base-gray-dark leading-relaxed">
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