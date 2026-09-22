"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem, CONTACT } from "@/lib/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
    const images = item.images && item.images.length > 0 ? item.images : (item.imageUrl ? [item.imageUrl] : []);
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    const targetUrl = item.liveUrl || item.githubUrl;
    const displayUrl = targetUrl
        ? targetUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
        : null;

    const waMessage = encodeURIComponent(`Halo Codevela, saya tertarik dengan proyek portofolio "${item.title}". Bisa info lebih lanjut?`);
    const waLink = `${CONTACT.primaryWaLink}?text=${waMessage}`;

    const currentImage = images[currentImgIdx];
    const isPhoneScreenshot = currentImage?.includes("phone");

    return (
        <div className="group flex flex-col rounded-xl border border-base-gray-light bg-base-white shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300">
            {/* Visual Browser Header */}
            <div className="bg-base-subtle/80 border-b border-base-gray-light px-3 py-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-base-gray-light/90 group-hover:bg-red-400/80 transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-base-gray-light/90 group-hover:bg-yellow-400/80 transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-base-gray-light/90 group-hover:bg-green-400/80 transition-colors" />
                </div>

                {displayUrl ? (
                    <span className="font-mono text-[10px] text-base-gray-medium truncate max-w-[190px] sm:max-w-[240px]">
                        {displayUrl}
                    </span>
                ) : (
                    <span className="font-mono text-[10px] text-base-gray-medium truncate">
                        {item.category}
                    </span>
                )}

                <div className="flex items-center gap-1.5 shrink-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-base-gray px-2 py-0.5 rounded border border-base-gray-light/70 bg-base-white">
                        {item.demoBadge}
                    </span>
                </div>
            </div>

            {/* Visual Card Image or Canvas */}
            {images.length > 0 && (
                <div className="relative aspect-[16/8.5] sm:aspect-[2/1] w-full overflow-hidden border-b border-base-gray-light/60 bg-base-subtle">
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
                                <div className="relative w-full h-full flex items-center justify-center p-2 bg-gradient-to-br from-slate-100 to-slate-200/70">
                                    <div className="relative h-full aspect-[9/19] rounded-lg overflow-hidden shadow-sm border border-base-black/10">
                                        <Image
                                            src={currentImage}
                                            alt={`${item.title} Mobile View`}
                                            fill
                                            sizes="240px"
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
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
                                            item.imageFit === "contain"
                                                ? "object-contain"
                                                : "object-cover object-top"
                                        }`}
                                    />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {images.length > 1 && (
                        <div className="absolute bottom-2 right-2.5 z-10 flex items-center gap-1 bg-base-black/75 backdrop-blur-xs px-2 py-0.5 rounded-full">
                            {images.map((img, i) => (
                                <span
                                    key={img}
                                    className={`rounded-full transition-all ${
                                        i === currentImgIdx
                                            ? "w-3 h-1 bg-base-white"
                                            : "w-1 h-1 bg-base-white/40"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-base-gray-light/60 bg-gradient-to-b from-base-subtle/30 to-base-white flex flex-col justify-center">
                <div className="flex items-center justify-between gap-2">
                    <h4 className="font-mono text-sm sm:text-base font-semibold text-base-black group-hover:text-base-black/80 transition-colors">
                        {item.title}
                    </h4>
                    {item.year && (
                        <span className="font-mono text-[10px] text-base-gray shrink-0">
                            {item.year}
                        </span>
                    )}
                </div>
                <p className="mt-0.5 text-[11px] text-base-gray-medium font-mono truncate">
                    {item.tagline}
                </p>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                    <p className="text-xs text-base-gray-dark leading-relaxed line-clamp-2">
                        {item.description}
                    </p>

                    {/* Key Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-base-gray-light/60 space-y-1">
                            {item.highlights.slice(0, 2).map((hl) => (
                                <div key={hl} className="flex items-start gap-1.5 text-[11px] text-base-gray-dark">
                                    <CheckCircle2 className="w-3 h-3 text-base-black shrink-0 mt-0.5" />
                                    <span className="line-clamp-1">{hl}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-3.5 pt-3 border-t border-base-gray-light/60 flex flex-col gap-3">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                        {item.stack.map((tech) => (
                            <span
                                key={tech}
                                className="font-mono text-[10px] px-2 py-0.5 rounded border border-base-gray-light text-base-gray-dark bg-base-subtle group-hover:border-base-gray-medium transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center justify-between pt-1 border-t border-base-gray-light/40">
                        <div className="flex items-center gap-3">
                            {item.liveUrl && (
                                <a
                                    href={item.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-base-black hover:text-base-gray-dark group/btn"
                                >
                                    <span>Live Demo</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            )}
                            {item.githubUrl && (
                                <a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-base-gray-dark hover:text-base-black"
                                >
                                    <SiGithub className="w-3.5 h-3.5" />
                                    <span>GitHub</span>
                                </a>
                            )}
                        </div>

                        {!item.liveUrl && !item.githubUrl && (
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-base-black hover:text-base-gray-dark group/btn ml-auto"
                            >
                                <span>Konsultasi Serupa</span>
                                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}