"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { MessageSquareCode, Calculator, Terminal, CheckCircle2, LucideIcon, ArrowDown } from "lucide-react";

const PROCESS_CONFIG: Record<
    string,
    { icon: LucideIcon; badgeBg: string; textColor: string; borderColor: string; numberBg: string }
> = {
    "01": {
        icon: MessageSquareCode,
        badgeBg: "bg-emerald-500/10",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
        numberBg: "bg-emerald-600 text-white",
    },
    "02": {
        icon: Calculator,
        badgeBg: "bg-amber-500/10",
        textColor: "text-amber-600",
        borderColor: "border-amber-500/20 hover:border-amber-500/50",
        numberBg: "bg-amber-600 text-white",
    },
    "03": {
        icon: Terminal,
        badgeBg: "bg-blue-500/10",
        textColor: "text-blue-600",
        borderColor: "border-blue-500/20 hover:border-blue-500/50",
        numberBg: "bg-blue-600 text-white",
    },
    "04": {
        icon: CheckCircle2,
        badgeBg: "bg-violet-500/10",
        textColor: "text-violet-600",
        borderColor: "border-violet-500/20 hover:border-violet-500/50",
        numberBg: "bg-violet-600 text-white",
    },
};

export default function Process() {
    return (
        <section id="alur-kerja" className="py-14 md:py-20 border-t border-base-gray-light bg-base-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">
                        Cara Pemesanan
                    </span>
                    <h2 className="mt-2 font-mono text-3xl md:text-5xl font-medium tracking-tight text-base-black">
                        HOW TO ORDER
                    </h2>
                    <p className="mt-3 text-sm text-base-gray-dark max-w-md mx-auto">
                        Alur pemesanan transparan dari awal diskusi hingga penyerahan full source code.
                    </p>
                </div>

                {/* Flowing Step Sequence Layout */}
                <div className="mt-14 space-y-2 md:space-y-0">
                    {/* STEP 01 - LEFT */}
                    <div className="w-full md:w-[52%] mr-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 ${PROCESS_CONFIG["01"].borderColor}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${PROCESS_CONFIG["01"].badgeBg} ${PROCESS_CONFIG["01"].textColor} flex items-center justify-center shrink-0 border ${PROCESS_CONFIG["01"].borderColor}`}>
                                    <MessageSquareCode className="w-5 h-5" />
                                </div>
                                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${PROCESS_CONFIG["01"].numberBg}`}>
                                    01
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-base font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[0].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[0].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* CONNECTOR 1: 01 (Left) -> 02 (Right) */}
                    <div className="my-2 flex justify-center md:justify-center md:-my-3 relative z-10">
                        {/* Desktop Curved Arrow Right */}
                        <div className="hidden md:flex items-center justify-center py-2 text-base-gray/70">
                            <svg width="180" height="54" viewBox="0 0 180 54" fill="none" className="text-base-gray font-mono">
                                <path
                                    d="M 30 5 C 100 5, 150 18, 150 44"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="5 4"
                                    strokeLinecap="round"
                                />
                                <path d="M 144 38 L 150 46 L 156 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* Mobile Arrow */}
                        <div className="flex md:hidden text-base-gray py-2">
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>

                    {/* STEP 02 - RIGHT */}
                    <div className="w-full md:w-[52%] ml-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 ${PROCESS_CONFIG["02"].borderColor}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${PROCESS_CONFIG["02"].badgeBg} ${PROCESS_CONFIG["02"].textColor} flex items-center justify-center shrink-0 border ${PROCESS_CONFIG["02"].borderColor}`}>
                                    <Calculator className="w-5 h-5" />
                                </div>
                                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${PROCESS_CONFIG["02"].numberBg}`}>
                                    02
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-base font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[1].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[1].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* CONNECTOR 2: 02 (Right) -> 03 (Left) */}
                    <div className="my-2 flex justify-center md:justify-center md:-my-3 relative z-10">
                        {/* Desktop Curved Arrow Left */}
                        <div className="hidden md:flex items-center justify-center py-2 text-base-gray/70">
                            <svg width="180" height="54" viewBox="0 0 180 54" fill="none" className="text-base-gray font-mono">
                                <path
                                    d="M 150 5 C 80 5, 30 18, 30 44"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="5 4"
                                    strokeLinecap="round"
                                />
                                <path d="M 24 38 L 30 46 L 36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* Mobile Arrow */}
                        <div className="flex md:hidden text-base-gray py-2">
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>

                    {/* STEP 03 - LEFT */}
                    <div className="w-full md:w-[52%] mr-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 ${PROCESS_CONFIG["03"].borderColor}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${PROCESS_CONFIG["03"].badgeBg} ${PROCESS_CONFIG["03"].textColor} flex items-center justify-center shrink-0 border ${PROCESS_CONFIG["03"].borderColor}`}>
                                    <Terminal className="w-5 h-5" />
                                </div>
                                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${PROCESS_CONFIG["03"].numberBg}`}>
                                    03
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-base font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[2].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[2].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* CONNECTOR 3: 03 (Left) -> 04 (Right) */}
                    <div className="my-2 flex justify-center md:justify-center md:-my-3 relative z-10">
                        {/* Desktop Curved Arrow Right */}
                        <div className="hidden md:flex items-center justify-center py-2 text-base-gray/70">
                            <svg width="180" height="54" viewBox="0 0 180 54" fill="none" className="text-base-gray font-mono">
                                <path
                                    d="M 30 5 C 100 5, 150 18, 150 44"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="5 4"
                                    strokeLinecap="round"
                                />
                                <path d="M 144 38 L 150 46 L 156 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* Mobile Arrow */}
                        <div className="flex md:hidden text-base-gray py-2">
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>

                    {/* STEP 04 - RIGHT */}
                    <div className="w-full md:w-[52%] ml-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 ${PROCESS_CONFIG["04"].borderColor}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${PROCESS_CONFIG["04"].badgeBg} ${PROCESS_CONFIG["04"].textColor} flex items-center justify-center shrink-0 border ${PROCESS_CONFIG["04"].borderColor}`}>
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${PROCESS_CONFIG["04"].numberBg}`}>
                                    04
                                </span>
                            </div>
                            <h3 className="mt-4 font-mono text-base font-bold tracking-tight text-base-black">
                                {PROCESS_STEPS[3].title}
                            </h3>
                            <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                                {PROCESS_STEPS[3].description}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Poster Footer Tagline */}
                <div className="mt-16 md:mt-24 pt-6 border-t border-base-gray-light/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-base-gray gap-2">
                    <span>JASA WEB & APP DEV</span>
                    <span>IG: @CODEVELA.ID</span>
                </div>
            </div>
        </section>
    );
}
