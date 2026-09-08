"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

const NAV_LINKS = [
    { href: "#benefit", label: "Codevela" },
    { href: "#alur-kerja", label: "Alur Kerja" },
    { href: "#layanan", label: "Layanan" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 12);

            const sectionIds = ["benefit", "alur-kerja", "layanan", "portofolio", "faq"];
            const scrollPosition = window.scrollY + 140;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sectionIds[i]);
                    return;
                }
            }
            setActiveSection("");
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-base-white/90 backdrop-blur-md shadow-sm border-b border-base-gray-light"
                : "bg-base-white/75 backdrop-blur-sm border-b border-base-gray-light/60"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 md:h-18 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2.5 group shrink-0 transition-transform active:scale-95"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src="/logo.png"
                        alt="Codevela Logo"
                        width={160}
                        height={64}
                        className="h-12 md:h-14 w-auto object-contain mix-blend-multiply group-hover:opacity-80 transition-opacity duration-200"
                        priority
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative font-mono text-xs tracking-wide py-1.5 transition-colors group ${isActive
                                    ? "text-base-black font-bold"
                                    : "text-base-gray-dark hover:text-base-black font-medium"
                                    }`}
                            >
                                <span>{link.label}</span>
                                {isActive ? (
                                    <motion.span
                                        layoutId="activeNavIndicator"
                                        className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-base-black rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                ) : (
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-base-black/40 transition-all duration-300 group-hover:w-full rounded-full" />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Desktop CTA */}
                <a
                    href={CONTACT.primaryWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-5 py-2.5 rounded-full bg-base-black text-base-white hover:bg-base-gray-dark hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all shadow-xs"
                >
                    <span>Hubungi Kami</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                {/* Mobile hamburger button */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden w-10 h-10 rounded-xl border border-base-gray-light bg-base-white flex items-center justify-center text-base-black hover:bg-base-subtle active:scale-95 transition-all shadow-xs"
                    aria-label="Toggle mobile menu"
                >
                    <motion.div
                        animate={{ rotate: menuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </motion.div>
                </button>
            </nav>

            {/* Mobile Animated Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden bg-base-white/95 backdrop-blur-xl border-b border-base-gray-light shadow-xl"
                    >
                        <div className="px-6 pt-4 pb-6 space-y-1">
                            {NAV_LINKS.map((link, idx) => {
                                const isActive = activeSection === link.href.slice(1);
                                return (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.04, duration: 0.2 }}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center justify-between py-3.5 text-sm font-mono border-b border-base-gray-light/60 last:border-b-0 transition-colors ${isActive
                                            ? "text-base-black font-bold"
                                            : "text-base-gray-dark hover:text-base-black font-medium"
                                            }`}
                                    >
                                        <span>{link.label}</span>
                                        {isActive && (
                                            <span className="w-2 h-2 rounded-full bg-base-black" />
                                        )}
                                    </motion.a>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.25 }}
                                className="pt-4"
                            >
                                <a
                                    href={CONTACT.primaryWaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full text-center text-xs font-mono font-semibold px-5 py-3 rounded-full bg-base-black text-base-white hover:bg-base-gray-dark active:scale-[0.98] transition-all shadow-md"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Hubungi Kami</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
