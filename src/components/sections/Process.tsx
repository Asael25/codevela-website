"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { MessageSquareCode, Calculator, Terminal, CheckCircle2, LucideIcon, ArrowDown } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    MessageSquareCode,
    Calculator,
    Terminal,
    CheckCircle2,
};

const stepVariant = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Process() {
    return (
        <section id="alur-kerja" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-10"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">Cara Pemesanan</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                        How to Order
                    </h2>
                    <p className="mt-2 text-sm text-base-gray-dark max-w-md mx-auto">
                        Alur pemesanan transparan dari diskusi awal hingga penyerahan source code.
                    </p>
                </motion.div>

                {/* Zigzag steps */}
                <div className="space-y-2 md:space-y-0">

                    {/* STEP 01 — LEFT */}
                    <div className="w-full md:w-[54%] mr-auto">
                        <motion.div
                            variants={stepVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
                            className="group p-6 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl border border-base-gray-light bg-base-subtle flex items-center justify-center shrink-0 group-hover:bg-base-black group-hover:border-base-black transition-all duration-300">
                                    {(() => { const I = ICON_MAP["MessageSquareCode"]; return <I className="w-5 h-5 text-base-gray-dark group-hover:text-base-white transition-colors duration-300" />; })()}
                                </div>
                                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-base-black text-base-white group-hover:scale-105 transition-transform">
                                    01
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-sm font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[0].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[0].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* CONNECTOR 01 → 02 (right) */}
                    <div className="my-2 flex justify-center md:-my-3 relative z-10">
                        <div className="hidden md:flex items-center justify-center py-2 text-base-gray-dark">
                            <svg width="180" height="54" viewBox="0 0 180 54" fill="none">
                                <path d="M 30 5 C 100 5, 150 18, 150 44" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
                                <path d="M 144 38 L 150 46 L 156 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex md:hidden text-base-gray-dark py-2">
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>

                    {/* STEP 02 — RIGHT */}
                    <div className="w-full md:w-[54%] ml-auto">
                        <motion.div
                            variants={stepVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
                            className="group p-6 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl border border-base-gray-light bg-base-subtle flex items-center justify-center shrink-0 group-hover:bg-base-black group-hover:border-base-black transition-all duration-300">
                                    {(() => { const I = ICON_MAP["Calculator"]; return <I className="w-5 h-5 text-base-gray-dark group-hover:text-base-white transition-colors duration-300" />; })()}
                                </div>
                                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-base-black text-base-white group-hover:scale-105 transition-transform">
                                     02
                                 </span>
                            </div>
                            <h3 className="mt-4 font-mono text-sm font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[1].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[1].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* CONNECTOR 02 → 03 (left) */}
                    <div className="my-2 flex justify-center md:-my-3 relative z-10">
                        <div className="hidden md:flex items-center justify-center py-2 text-base-gray-dark">
                            <svg width="180" height="54" viewBox="0 0 180 54" fill="none">
                                <path d="M 150 5 C 80 5, 30 18, 30 44" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
                                <path d="M 24 38 L 30 46 L 36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex md:hidden text-base-gray-dark py-2">
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>

                    {/* STEP 03 — LEFT */}
                    <div className="w-full md:w-[54%] mr-auto">
                        <motion.div
                            variants={stepVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
                            className="group p-6 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl border border-base-gray-light bg-base-subtle flex items-center justify-center shrink-0 group-hover:bg-base-black group-hover:border-base-black transition-all duration-300">
                                    {(() => { const I = ICON_MAP["Terminal"]; return <I className="w-5 h-5 text-base-gray-dark group-hover:text-base-white transition-colors duration-300" />; })()}
                                </div>
                                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-base-black text-base-white group-hover:scale-105 transition-transform">
                                    03
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-sm font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[2].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[2].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* CONNECTOR 03 → 04 (right) */}
                    <div className="my-2 flex justify-center md:-my-3 relative z-10">
                        <div className="hidden md:flex items-center justify-center py-2 text-base-gray-dark">
                            <svg width="180" height="54" viewBox="0 0 180 54" fill="none">
                                <path d="M 30 5 C 100 5, 150 18, 150 44" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
                                <path d="M 144 38 L 150 46 L 156 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex md:hidden text-base-gray-dark py-2">
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>

                    {/* STEP 04 — RIGHT */}
                    <div className="w-full md:w-[54%] ml-auto">
                        <motion.div
                            variants={stepVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
                            className="group p-6 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl border border-base-gray-light bg-base-subtle flex items-center justify-center shrink-0 group-hover:bg-base-black group-hover:border-base-black transition-all duration-300">
                                    {(() => { const I = ICON_MAP["CheckCircle2"]; return <I className="w-5 h-5 text-base-gray-dark group-hover:text-base-white transition-colors duration-300" />; })()}
                                </div>
                                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-base-black text-base-white group-hover:scale-105 transition-transform">
                                    04
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-sm font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[3].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[3].description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
