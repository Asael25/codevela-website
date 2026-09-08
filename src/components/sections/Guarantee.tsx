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
        <section className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">Jaminan Kami</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                        Garansi Codevela
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {GUARANTEES.map((guarantee, i) => {
                        const IconComponent = GUARANTEE_ICONS[guarantee.icon] || ShieldCheck;
                        return (
                            <motion.div
                                key={guarantee.title}
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group p-7 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300 cursor-default"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-lg border border-base-gray-light bg-base-subtle flex items-center justify-center shrink-0 group-hover:bg-base-black group-hover:border-base-black transition-all duration-300">
                                        <IconComponent className="w-4 h-4 text-base-gray-dark group-hover:text-base-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-mono text-sm font-semibold text-base-black group-hover:text-base-black/80">{guarantee.title}</h3>
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