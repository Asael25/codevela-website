"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, PortfolioCategory } from "@/lib/data";

export default function Portfolio() {
    const [active, setActive] = useState<PortfolioCategory>("Semua");

    const filtered =
        active === "Semua" ? PORTFOLIO : PORTFOLIO.filter((item) => item.category === active);

    return (
        <section id="portofolio" className="py-14 md:py-20 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-2xl md:text-3xl font-medium max-w-lg">Portofolio</h2>

                <div className="mt-8 flex flex-wrap gap-2">
                    {PORTFOLIO_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${active === cat
                                    ? "bg-base-black text-base-white"
                                    : "bg-base-gray-light text-base-gray-dark hover:bg-base-gray-light/70"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {filtered.map((item) => (
                        <motion.div key={item.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <PortfolioCard item={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}