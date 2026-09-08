"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS, FAQ_CATEGORIES, FAQCategory, CONTACT } from "@/lib/data";
import {
    Search,
    X,
    ChevronRight,
    CheckCircle2,
    HelpCircle,
    MessageSquare,
    ArrowUpRight,
} from "lucide-react";

export default function FAQ() {
    const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("Semua");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFaqIndex, setSelectedFaqIndex] = useState<number>(0);

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

    const activeFaq = filteredFaqs[selectedFaqIndex] || filteredFaqs[0];

    const handleCategorySelect = (cat: FAQCategory) => {
        setSelectedCategory(cat);
        setSelectedFaqIndex(0);
    };

    const handleSearchInput = (val: string) => {
        setSearchQuery(val);
        setSelectedFaqIndex(0);
    };

    return (
        <section id="faq" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">

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
                <div className="space-y-4 mb-7">
                    {/* Instant Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-base-gray-medium">
                            <Search className="w-4 h-4 text-base-gray-medium" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => handleSearchInput(e.target.value)}
                            placeholder="Cari pertanyaan (misal: garansi, DP, deadline, revisi)..."
                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-base-gray-light bg-base-white font-mono text-xs text-base-black placeholder:text-base-gray focus:outline-none focus:border-base-black focus:ring-1 focus:ring-base-black shadow-sm transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => handleSearchInput("")}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-base-gray hover:text-base-black cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Pills & Counter */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                            {FAQ_CATEGORIES.map((cat) => {
                                const isSelected = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategorySelect(cat)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer ${isSelected
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

                {/* 2-Column Master-Detail Layout */}
                {filteredFaqs.length === 0 ? (
                    <div className="p-8 text-center rounded-xl border border-base-gray-light bg-base-white space-y-3">
                        <p className="font-mono text-sm text-base-gray-dark">
                            Tidak ada pertanyaan yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;.
                        </p>
                        <button
                            onClick={() => { handleSearchInput(""); handleCategorySelect("Semua"); }}
                            className="px-4 py-2 rounded-lg text-xs font-mono font-medium bg-base-black text-base-white hover:bg-base-gray-dark cursor-pointer transition-colors"
                        >
                            Reset Pencarian
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Left Column: Scrollable Questions List Container */}
                        <div className="lg:col-span-5 flex flex-col">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <span className="text-xs font-mono text-base-gray-medium font-medium">
                                    Daftar Pertanyaan
                                </span>
                                <span className="text-[11px] font-mono text-base-gray-medium">
                                    Scroll & klik untuk baca
                                </span>
                            </div>

                            <div className="max-h-[380px] sm:max-h-[460px] md:max-h-[500px] overflow-y-auto pr-1.5 space-y-2.5 custom-faq-scrollbar">
                                {filteredFaqs.map((faq, i) => {
                                    const isSelected = activeFaq?.question === faq.question;
                                    const questionNumber = String(i + 1).padStart(2, "0");

                                    return (
                                        <button
                                            key={faq.question}
                                            onClick={() => setSelectedFaqIndex(i)}
                                            className={`w-full text-left p-3.5 md:p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 group cursor-pointer ${isSelected
                                                ? "bg-base-white border-base-black shadow-sm ring-1 ring-base-black/10"
                                                : "bg-base-white/80 border-base-gray-light hover:bg-base-white hover:border-base-gray-medium"
                                                }`}
                                        >
                                            <div className="flex items-start gap-3 min-w-0">
                                                {/* Monospace Step Number */}
                                                <span
                                                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded transition-colors shrink-0 ${isSelected
                                                        ? "bg-base-black text-base-white"
                                                        : "bg-base-subtle text-base-gray-dark group-hover:bg-base-black group-hover:text-base-white"
                                                        }`}
                                                >
                                                    {questionNumber}
                                                </span>

                                                <div className="min-w-0">
                                                    <h3
                                                        className={`text-xs md:text-sm leading-snug transition-colors line-clamp-2 ${isSelected
                                                            ? "text-base-black font-semibold"
                                                            : "text-base-gray-dark group-hover:text-base-black font-medium"
                                                            }`}
                                                    >
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
                                                                <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 font-semibold">
                                                                    {faq.badge}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Selection indicator icon */}
                                            <div
                                                className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-all ${isSelected
                                                    ? "bg-base-black text-base-white"
                                                    : "text-base-gray-medium group-hover:text-base-black"
                                                    }`}
                                            >
                                                <ChevronRight
                                                    className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-0.5" : ""
                                                        }`}
                                                />
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Sticky Active Answer Card */}
                        <div className="lg:col-span-7 lg:sticky lg:top-24">
                            {activeFaq && (
                                <div className="p-6 md:p-8 rounded-2xl border border-base-gray-light bg-base-white shadow-sm flex flex-col justify-between min-h-[380px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeFaq.question}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-4"
                                        >
                                            {/* Answer Header Bar */}
                                            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-base-subtle">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2.5 py-0.5 rounded-full bg-base-subtle border border-base-gray-light text-[11px] font-mono text-base-gray-dark font-medium">
                                                        {activeFaq.category}
                                                    </span>
                                                    {activeFaq.badge && (
                                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[11px] font-mono text-emerald-700 font-semibold">
                                                            {activeFaq.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="font-mono text-xs text-base-gray-medium">
                                                    Pertanyaan {String(filteredFaqs.findIndex(f => f.question === activeFaq.question) + 1).padStart(2, "0")} / {String(filteredFaqs.length).padStart(2, "0")}
                                                </span>
                                            </div>

                                            {/* Question Heading */}
                                            <h3 className="font-mono text-base md:text-lg font-bold text-base-black leading-snug tracking-tight">
                                                {activeFaq.question}
                                            </h3>

                                            {/* Answer Content */}
                                            <p className="text-sm md:text-base text-base-gray-dark leading-relaxed">
                                                {activeFaq.answer}
                                            </p>

                                            {/* Key Highlights Checklist Pills */}
                                            {activeFaq.keyPoints && activeFaq.keyPoints.length > 0 && (
                                                <div className="mt-5 pt-4 border-t border-base-subtle">
                                                    <span className="text-[11px] font-mono uppercase tracking-wider text-base-gray-medium font-semibold block mb-2.5">
                                                        Poin Penting:
                                                    </span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {activeFaq.keyPoints.map((point) => (
                                                            <div
                                                                key={point}
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-subtle border border-base-gray-light/70 text-xs font-mono text-base-gray-dark"
                                                            >
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-base-black shrink-0" />
                                                                <span>{point}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Direct WhatsApp Consultation for this topic */}
                                    <div className="mt-7 pt-4 border-t border-base-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-base-subtle/50 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-5 md:p-6 rounded-b-2xl">
                                        <div className="text-xs text-base-gray-dark">
                                            <span className="font-semibold text-base-black block">Punya pertanyaan seputar hal ini?</span>
                                            Tanyakan langsung ke tim developer kami via WhatsApp.
                                        </div>
                                        <a
                                            href={`https://wa.me/${CONTACT.admins[0].phone}?text=${encodeURIComponent(`Halo Codevela, saya ingin tanya lebih lanjut mengenai: "${activeFaq.question}"`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-base-black text-base-white font-mono text-xs font-semibold hover:bg-base-gray-dark active:scale-95 transition-all shrink-0 cursor-pointer shadow-sm"
                                        >
                                            <span>Tanya Topik Ini</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

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