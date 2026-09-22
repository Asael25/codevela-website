"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import PortfolioCard from "@/components/ui/PortfolioCard";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, PortfolioCategory, PortfolioItem, CONTACT } from "@/lib/data";
import {
    ChevronLeft,
    ChevronRight,
    Star,
    CheckCircle2,
    ArrowUpRight,
    ExternalLink,
    Code2
} from "lucide-react";
import { SiGithub } from "react-icons/si";

function MockupImageViewer({
    item,
    targetUrl,
}: {
    item: PortfolioItem;
    targetUrl?: string;
}) {
    const images = item.images && item.images.length > 0 ? item.images : (item.imageUrl ? [item.imageUrl] : []);
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % images.length);
        }, 3800);
        return () => clearInterval(interval);
    }, [images.length]);

    if (images.length === 0) return null;

    const currentImage = images[currentImgIdx];
    const isPhoneScreenshot = currentImage.includes("phone");

    return (
        <div className="relative aspect-[16/8.5] sm:aspect-[2/1] w-full overflow-hidden bg-base-subtle group/img select-none">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {isPhoneScreenshot ? (
                        <div className="relative w-full h-full flex items-center justify-center p-2.5 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/70">
                            <div className="relative h-full aspect-[9/19] rounded-xl overflow-hidden shadow-md border-2 border-base-black/10">
                                <Image
                                    src={currentImage}
                                    alt={`${item.title} Mobile View`}
                                    fill
                                    sizes="300px"
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={`relative w-full h-full ${item.imageFit === "contain" ? "bg-white" : "bg-base-subtle"}`}>
                            <Image
                                src={currentImage}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                                className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                                    item.imageFit === "contain"
                                        ? "object-contain"
                                        : "object-cover object-top"
                                }`}
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Multiple images indicator & manual switcher */}
            {images.length > 1 && (
                <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1.5 bg-base-black/75 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-sm">
                    {images.map((img, i) => (
                        <button
                            key={img}
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentImgIdx(i);
                            }}
                            className={`transition-all rounded-full cursor-pointer ${
                                i === currentImgIdx
                                    ? "w-3.5 h-1.5 bg-base-white"
                                    : "w-1.5 h-1.5 bg-base-white/40 hover:bg-base-white/80"
                            }`}
                            aria-label={`Lihat gambar ${i + 1}`}
                        />
                    ))}
                    <span className="text-[10px] font-mono text-base-white/90 ml-1 font-medium">
                        {currentImgIdx === 0 ? "Banner" : "App UI"}
                    </span>
                </div>
            )}

            {/* Hover Action Link Overlay */}
            {targetUrl && (
                <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-base-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px] z-20"
                    title={`Buka ${item.title}`}
                >
                    <span className="font-mono text-xs text-base-white bg-base-black/90 hover:bg-base-black px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md transition-colors">
                        <span>{item.liveUrl ? "Kunjungi Website" : "Lihat di GitHub"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                </a>
            )}
        </div>
    );
}

export default function Portfolio() {
    const [active, setActive] = useState<PortfolioCategory>("Highlight");
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const filtered =
        active === "Highlight" ? PORTFOLIO : PORTFOLIO.filter((item) => item.category === active);

    return (
        <section id="portofolio" className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header & Filter Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8"
                >
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">Hasil Kerja</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-base-black animate-pulse" />
                        </div>
                        <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                            Portofolio Terpilih
                        </h2>
                        <p className="mt-2 text-sm text-base-gray-dark max-w-md">
                            Solusi nyata yang telah kami bangun dengan arsitektur modern, performa tinggi, dan clean code.
                        </p>
                    </div>

                    {/* Filter Pills - Single Row Bar */}
                    <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-base-subtle/80 border border-base-gray-light max-w-full overflow-x-auto no-scrollbar shrink-0 self-start lg:self-auto">
                        {PORTFOLIO_CATEGORIES.map((cat) => {
                            const isHighlight = cat === "Highlight";
                            const isSelected = active === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`relative px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all duration-200 flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer ${isSelected
                                        ? "bg-base-black text-base-white shadow-sm"
                                        : "text-base-gray-dark hover:text-base-black hover:bg-base-white/60"
                                        }`}
                                >
                                    {isHighlight && (
                                        <Star className="w-3.5 h-3.5 fill-current shrink-0" />
                                    )}
                                    <span>{cat}</span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Main Content Area */}
                <AnimatePresence mode="wait">
                    {active === "Highlight" ? (
                        /* MODE 1: FEATURED HIGHLIGHT SLIDER */
                        <motion.div
                            key="highlight-slider"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Slide Navigation Controls */}
                            <div className="flex items-center justify-end mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs font-semibold text-base-black mr-2">
                                        {String(currentSlide + 1).padStart(2, "0")} / {String(PORTFOLIO.length).padStart(2, "0")}
                                    </span>
                                    <button
                                        onClick={() => swiperRef.current?.slidePrev()}
                                        aria-label="Previous Project"
                                        className="w-8 h-8 rounded-lg border border-base-gray-light bg-base-white hover:bg-base-subtle hover:border-base-black text-base-black flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => swiperRef.current?.slideNext()}
                                        aria-label="Next Project"
                                        className="w-8 h-8 rounded-lg border border-base-gray-light bg-base-white hover:bg-base-subtle hover:border-base-black text-base-black flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Swiper Container */}
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                loop={true}
                                spaceBetween={24}
                                slidesPerView={1}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => {
                                    setCurrentSlide(swiper.realIndex);
                                }}
                                className="rounded-2xl border border-base-gray-light bg-base-white shadow-sm overflow-hidden"
                            >
                                {PORTFOLIO.map((item, idx) => {
                                    const targetUrl = item.liveUrl || item.githubUrl;
                                    const displayUrl = targetUrl
                                        ? targetUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
                                        : `codevela.id/portfolio/${item.slug}`;

                                    return (
                                        <SwiperSlide key={item.slug || item.title}>
                                            <div className="p-5 sm:p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                                                {/* Visual Mockup Showcase (Left Column) */}
                                                <div className="lg:col-span-7 flex flex-col">
                                                    <div className="rounded-xl border border-base-gray-light bg-base-subtle shadow-md overflow-hidden group">
                                                        {/* Mockup Browser Window Header */}
                                                        <div className="bg-base-white px-4 py-2.5 border-b border-base-gray-light flex items-center justify-between gap-2 sm:gap-3">
                                                            <div className="flex items-center gap-1.5 shrink-0">
                                                                <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                                                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                                                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                                                            </div>

                                                            {/* Real Address Bar Link */}
                                                            {targetUrl ? (
                                                                <a
                                                                    href={targetUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-1.5 sm:gap-2 bg-base-subtle hover:bg-base-gray-light/60 px-2.5 sm:px-3 py-1 rounded-md border border-base-gray-light text-[11px] font-mono text-base-gray-dark hover:text-base-black max-w-[240px] sm:max-w-[320px] truncate transition-colors group/url"
                                                                    title={`Akses ${targetUrl}`}
                                                                >
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                                                    <span className="truncate">{displayUrl}</span>
                                                                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/url:opacity-100 shrink-0 ml-auto transition-opacity" />
                                                                </a>
                                                            ) : (
                                                                <div className="flex items-center gap-1.5 sm:gap-2 bg-base-subtle px-2.5 sm:px-3 py-1 rounded-md border border-base-gray-light text-[11px] font-mono text-base-gray-medium max-w-[240px] sm:max-w-[320px] truncate">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                                                    <span className="truncate">{displayUrl}</span>
                                                                </div>
                                                            )}

                                                            <div className="text-[10px] font-mono text-base-gray-medium px-2 py-0.5 rounded border border-base-gray-light bg-base-white shrink-0">
                                                                {item.demoBadge}
                                                            </div>
                                                        </div>

                                                        {/* Screenshot Image or Multi-Image Slider */}
                                                        {item.imageUrl ? (
                                                            <MockupImageViewer item={item} targetUrl={targetUrl} />
                                                        ) : (
                                                            <div className="p-6 md:p-8 bg-gradient-to-br from-base-white via-base-subtle/50 to-base-subtle min-h-[240px] flex flex-col justify-between relative overflow-hidden">
                                                                {/* Watermark badge */}
                                                                <div className="absolute top-4 right-4 text-6xl font-mono font-black text-base-black/[0.03] select-none pointer-events-none">
                                                                    {item.number || `0${idx + 1}`}
                                                                </div>

                                                                {/* Mockup App Header */}
                                                                <div className="flex items-center justify-between border-b border-base-gray-light/60 pb-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="w-7 h-7 rounded-lg bg-base-black text-base-white flex items-center justify-center font-mono text-xs font-bold">
                                                                            {"</>"}
                                                                        </div>
                                                                        <span className="font-mono text-xs font-bold text-base-black truncate max-w-[180px]">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-base-black text-base-white">
                                                                        {item.category}
                                                                    </span>
                                                                </div>

                                                                {/* Mockup Body Content Card */}
                                                                <div className="my-4 p-4 rounded-xl border border-base-gray-light/80 bg-base-white/90 shadow-sm backdrop-blur-sm">
                                                                    <div className="flex items-center gap-2 mb-1.5">
                                                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                                                        <span className="font-mono text-xs font-semibold text-base-black">
                                                                            Ringkasan Solusi:
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-xs text-base-gray-dark leading-relaxed line-clamp-3">
                                                                        {item.description}
                                                                    </p>
                                                                </div>

                                                                {/* Mockup Footer Stats & Stack Bar */}
                                                                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-base-gray-light/60 text-xs font-mono text-base-gray-medium">
                                                                    <div className="flex items-center gap-2">
                                                                        <Code2 className="w-3.5 h-3.5 text-base-black" />
                                                                        <span className="text-base-black font-semibold">Clean Code Standards</span>
                                                                    </div>
                                                                    <div className="flex gap-1.5">
                                                                        {item.stack.slice(0, 3).map((st) => (
                                                                            <span key={st} className="px-1.5 py-0.5 rounded border border-base-gray-light bg-base-white text-[10px] text-base-gray-dark">
                                                                                {st}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Project Story & Storyline (Right Column) */}
                                                <div className="lg:col-span-5 flex flex-col justify-center">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-base-black text-base-white">
                                                            {item.number || `0${idx + 1}`}
                                                        </span>
                                                        <span className="font-mono text-[11px] font-semibold text-base-gray-medium tracking-wide uppercase truncate">
                                                            {item.categorySubtitle || item.category}
                                                        </span>
                                                        {item.year && (
                                                            <span className="font-mono text-[11px] text-base-gray ml-auto shrink-0">
                                                                {item.year}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h3 className="mt-2 font-mono text-lg sm:text-xl font-bold tracking-tight text-base-black">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-0.5 font-mono text-[11px] text-base-gray-medium line-clamp-1">
                                                        {item.tagline}
                                                    </p>

                                                    <p className="mt-2.5 text-xs sm:text-[13px] text-base-gray-dark leading-relaxed">
                                                        {item.description}
                                                    </p>

                                                    {/* Key Highlights Checklist */}
                                                    <div className="mt-3 space-y-1.5">
                                                        {item.highlights.map((point) => (
                                                            <div key={point} className="flex items-start gap-2 text-xs text-base-gray-dark">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-base-black shrink-0 mt-0.5" />
                                                                <span className="font-medium">{point}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Tech Stack Pills */}
                                                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                                                        {item.stack.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="font-mono text-[10px] px-2 py-0.5 rounded border border-base-gray-light text-base-gray-dark bg-base-subtle hover:border-base-black hover:text-base-black transition-colors"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Project Live Access Links */}
                                                    <div className="mt-4 flex flex-wrap items-center gap-2">
                                                        {item.liveUrl && (
                                                            <a
                                                                href={item.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-base-black text-base-white hover:bg-base-gray-dark active:scale-95 transition-all shadow-sm"
                                                            >
                                                                <span>Lihat Live Demo</span>
                                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                        {item.githubUrl && (
                                                            <a
                                                                href={item.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border border-base-gray-light bg-base-white text-base-black hover:bg-base-subtle hover:border-base-black active:scale-95 transition-all"
                                                            >
                                                                <SiGithub className="w-3.5 h-3.5" />
                                                                <span>GitHub</span>
                                                            </a>
                                                        )}
                                                        {!item.liveUrl && !item.githubUrl && (
                                                            <a
                                                                href={`${CONTACT.primaryWaLink}?text=${encodeURIComponent(`Halo Codevela, saya tertarik dengan proyek portofolio "${item.title}". Bisa konsultasi seputar proyek serupa?`)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-base-black text-base-white hover:bg-base-gray-dark active:scale-95 transition-all shadow-sm"
                                                            >
                                                                <span>Konsultasi Proyek Serupa</span>
                                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </motion.div>
                    ) : (
                        /* MODE 2: CATEGORY CARD GRID VIEW */
                        <motion.div
                            key={`category-grid-${active}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            {/* Card Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                                {filtered.map((item) => (
                                    <PortfolioCard key={item.title} item={item} />
                                ))}
                            </div>

                            {filtered.length === 0 && (
                                <div className="p-12 text-center rounded-xl border border-base-gray-light bg-base-white">
                                    <p className="font-mono text-sm text-base-gray-dark">
                                        Belum ada portofolio yang ditampilkan untuk kategori ini.
                                    </p>
                                    <button
                                        onClick={() => setActive("Highlight")}
                                        className="mt-4 px-4 py-2 rounded-full text-xs font-mono font-medium bg-base-black text-base-white hover:bg-base-gray-dark"
                                    >
                                        Kembali ke Highlight
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}