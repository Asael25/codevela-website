"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CONTACT } from "@/lib/data";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: "#benefit", label: "Kenapa Kami" },
    { href: "#alur-kerja", label: "Alur Kerja" },
    { href: "#layanan", label: "Layanan" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-base-white/90 backdrop-blur-md shadow-sm border-b border-base-gray-light"
                : "bg-base-white/70 backdrop-blur-sm border-b border-base-gray-light/50"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group shrink-0" onClick={() => setMenuOpen(false)}>
                    <Image
                        src="/logo.png"
                        alt="Codevela Logo"
                        width={120}
                        height={48}
                        className="h-10 w-auto object-contain mix-blend-multiply group-hover:opacity-80 transition-opacity duration-200"
                        priority
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-7 text-sm text-base-gray-dark">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative hover:text-base-black transition-colors group py-1"
                        >
                            {link.label}
                            <span className="absolute left-0 -bottom-0 w-0 h-px bg-base-black transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href={CONTACT.primaryWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-base-black text-base-white hover:bg-base-gray-dark transition-colors"
                >
                    Konsultasi
                </a>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden p-2 rounded-lg text-base-black hover:bg-base-gray-light transition-colors"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-base-white border-t border-base-gray-light px-6 pb-6 pt-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 text-sm font-medium text-base-gray-dark hover:text-base-black border-b border-base-gray-light/60 transition-colors last:border-b-0"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={CONTACT.primaryWaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 block w-full text-center text-sm font-medium px-4 py-3 rounded-full bg-base-black text-base-white hover:bg-base-gray-dark transition-colors"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            )}
        </header>
    );
}
