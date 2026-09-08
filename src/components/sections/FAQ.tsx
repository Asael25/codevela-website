"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS, FAQ_CATEGORIES, FAQCategory, FAQItem, CONTACT } from "@/lib/data";
import {
    Plus,
    Minus,
    Search,
    X,
    CheckCircle2,
    HelpCircle,
    MessageSquare,
    ArrowUpRight,
    Sparkles,
    SlidersHorizontal
} from "lucide-react";

export default function FAQ() {
    const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("Semua");
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Filter questions based on category and search query
    const filteredFaqs = useMemo(() => {
        return FAQS.filter((faq) => {
            const matchesCategory =
                selectedCategory === "Semua" || faq.category === selectedCategory;
            const matchesSearch =
                searchQuery.trim() === "" ||
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (faq.keyPoints && faq.keyPoints.some((kp) => kp.toLowerCase().includes(searchQuery.toLowerCase())));

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const handleAccordionToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-4xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-xl mx-auto mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-subtle border border-base-gray-light text-xs font-mono text-base-gray-dark font-medium mb-3">
                        <HelpCircle className="w-3.5 h-3.5 text-base-black" />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="font-mono text-2xl md:text-3xl font-semibold text-base-black tracking-tight">
                        Tanya Jawab & Informasi Transparan
                    </h2>
                    <p className="mt-2 text-sm text-base-gray-dark leading-relaxed">
                        Jawaban lengkap seputar garansi, kepemilikan source code, sistem pembayaran DP, dan alur pengerjaan.
                    </p>
                </motion.div>

                {/* Interactive Controls Bar: Search & Category Tabs */}
                <div className="space-y-4 mb-8">
                    {/* Instant Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-base-gray-medium">
                            <Search className="w-4 h-4 text-base-gray-medium" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari pertanyaan (misal: garansi, DP, deadline, revisi)..."
                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-base-gray-light bg-base-white font-mono text-xs text-base-black placeholder:text-base-gray focus:outline-none focus:border-base-black focus:ring-1 focus:ring-base-black shadow-sm transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-base-gray hover:text-base-black"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                            {FAQ_CATEGORIES.map((cat) => {
                                const isSelected = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 ${isSelected
                                            ? "bg-base-black text-base-white shadow-sm"
                                            : "bg-base-white border border-base-gray-light text-base-gray-dark hover:border-base-gray-medium hover:text-base-black"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search result count */}
                        <div className="text-xs font-mono text-base-gray-medium self-center">
                            Ditemukan: <strong className="text-base-black">{filteredFaqs.length}</strong> pertanyaan
                        </div>
                    </div>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-3">
                    <AnimatePresence initial={false}>
                        {filteredFaqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            const questionNumber = String(i + 1).padStart(2, "0");

                            return (
                                <motion.div
                                    key={faq.question}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className={`rounded-xl border transition-all duration-200 overflow-hidden bg-base-white shadow-sm ${isOpen
                                        ? "border-base-black ring-1 ring-base-black/5"
                                        : "border-base-gray-light hover:border-base-gray-medium"
                                        }`}
                                >
                                    {/* Question Button */}
                                    <button
                                        onClick={() => handleAccordionToggle(i)}
                                        className="w-full p-5 text-left flex items-start justify-between gap-4 group"
                                    >
                                        <div className="flex items-start gap-3.5">
                                            {/* Monospace Step Number */}
                                            <span className={`font-mono text-xs font-bold px-2 py-1 rounded transition-colors ${isOpen
                                                ? "bg-base-black text-base-white"
                                                : "bg-base-subtle text-base-gray-dark group-hover:bg-base-black group-hover:text-base-white"
                                                }`}>
                                                {questionNumber}
                                            </span>

                                            <div>
                                                <h3 className={`font-medium text-sm md:text-base transition-colors leading-snug ${isOpen
                                                    ? "text-base-black font-semibold"
                                                    : "text-base-gray-dark group-hover:text-base-black"
                                                    }`}>
                                                    {faq.question}
                                                </h3>

                                                {/* Meta Tag Badge */}
                                                <div className="mt-1.5 flex items-center gap-2">
                                                    <span className="font-mono text-[10px] text-base-gray-medium">
                                                        {faq.category}
                                                    </span>
                                                    {faq.badge && (
                                                        <>
                                                            <span className="w-1 h-1 rounded-full bg-base-gray-light" />
                                                            <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-semibold">
                                                                {faq.badge}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Toggle Icon Indicator */}
                                        <div className={`shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${isOpen
                                            ? "bg-base-black border-base-black text-base-white"
                                            : "border-base-gray-light text-base-gray group-hover:border-base-black group-hover:text-base-black bg-base-white"
                                            }`}>
                                            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                        </div>
                                    </button>

                                    {/* Answer Dropdown Area */}
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
                                                <div className="px-5 pb-5 pt-1 border-t border-base-gray-light/60">
                                                    {/* Answer text */}
                                                    <p className="text-sm text-base-gray-dark leading-relaxed">
                                                        {faq.answer}
                                                    </p>

                                                    {/* Key Highlights Checklist Pills */}
                                                    {faq.keyPoints && faq.keyPoints.length > 0 && (
                                                        <div className="mt-4 pt-3.5 border-t border-base-subtle flex flex-wrap gap-2">
                                                            {faq.keyPoints.map((point) => (
                                                                <div
                                                                    key={point}
                                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-base-subtle border border-base-gray-light/70 text-xs font-mono text-base-gray-dark"
                                                                >
                                                                    <CheckCircle2 className="w-3 h-3 text-base-black shrink-0" />
                                                                    <span>{point}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* No Search Results */}
                    {filteredFaqs.length === 0 && (
                        <div className="p-8 text-center rounded-xl border border-base-gray-light bg-base-white space-y-3">
                            <p className="font-mono text-sm text-base-gray-dark">
                                Tidak ada pertanyaan yang cocok dengan pencarian "{searchQuery}".
                            </p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); }}
                                className="px-4 py-2 rounded-lg text-xs font-mono font-medium bg-base-black text-base-white hover:bg-base-gray-dark"
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    )}
                </div>

                {/* Interactive Bottom Help Card */}
                <div className="mt-8 p-6 rounded-2xl border border-base-gray-light bg-base-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div className="flex items-center gap-3.5 text-center sm:text-left">
                        <div className="w-10 h-10 rounded-xl bg-base-black text-base-white flex items-center justify-center shrink-0">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-mono text-sm font-semibold text-base-black">
                                Punya pertanyaan spesifik atau ide proyek?
                            </h4>
                            <p className="text-xs text-base-gray-dark mt-0.5">
                                Konsultasikan langsung via WhatsApp. Gratis tanpa komitmen awal.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        {CONTACT.admins.map((admin) => (
                            <a
                                key={admin.phone}
                                href={admin.waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-base-black text-base-white hover:bg-base-gray-dark active:scale-95 transition-all"
                            >
                                <span>{admin.name}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}