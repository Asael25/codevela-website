"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, PortfolioCategory } from "@/lib/data";

export default function Portfolio() {
    const [active, setActive] = useState<PortfolioCategory>("Semua");

    const filtered =
        active === "Semua" ? PORTFOLIO : PORTFOLIO.filter((item) => item.category === active);

    return (
        <section id="portofolio" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-base-gray">Hasil Kerja</span>
                        <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-medium text-base-black">
                            Portofolio
                        </h2>
                    </div>

                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-1.5">
                        {PORTFOLIO_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-150 ${active === cat
                                    ? "bg-base-black text-base-white"
                                    : "bg-base-white border border-base-gray-light text-base-gray-dark hover:border-base-gray-medium hover:text-base-black shadow-sm"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {filtered.map((item) => (
                            <PortfolioCard key={item.title} item={item} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <p className="text-center text-sm text-base-gray py-12">
                        Belum ada portofolio untuk kategori ini.
                    </p>
                )}
            </div>
        </section>
    );
}