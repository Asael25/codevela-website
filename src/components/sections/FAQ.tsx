"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-12 md:py-16 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray">FAQ</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-medium text-base-black">
                        Tanya Jawab Singkat
                    </h2>
                </div>

                <div className="max-w-2xl divide-y divide-base-gray-light">
                    {FAQS.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={faq.question}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full py-5 flex items-center justify-between text-left gap-6 group"
                                >
                                    <span className="font-medium text-sm md:text-base text-base-black group-hover:text-base-gray-dark transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className="shrink-0 w-6 h-6 rounded-full border border-base-gray-light flex items-center justify-center text-base-gray group-hover:border-base-gray-medium transition-colors">
                                        {isOpen
                                            ? <Minus className="w-3 h-3" />
                                            : <Plus className="w-3 h-3" />
                                        }
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-5 text-sm text-base-gray-dark leading-relaxed max-w-xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}