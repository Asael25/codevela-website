import Image from "next/image";
import { CONTACT, SOCIALS } from "@/lib/data";

const NAV_SHORTCUTS = [
    { href: "#benefit", label: "Kenapa Kami" },
    { href: "#alur-kerja", label: "Alur Kerja" },
    { href: "#layanan", label: "Layanan & Harga" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#faq", label: "FAQ" },
];

function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

function TikTokIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.29 8.29 0 004.84 1.54V6.78a4.85 4.85 0 01-1.07-.09z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="border-t-2 border-base-gray-light bg-base-black text-base-white/80">
            <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-14 pb-8">

                {/* Footer columns — flex layout, avoids grid column math bugs */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-8">

                    {/* Brand — takes more space */}
                    <div className="md:flex-[2] min-w-0">
                        <a href="#" className="inline-flex items-center gap-3 group">
                            <Image
                                src="/logo.png"
                                alt="Codevela Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <span className="font-mono text-xl tracking-tight font-bold text-white">codevela</span>
                        </a>
                        <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
                            Solusi IT & pemrograman untuk kebutuhan bisnis dan akademik. Clean code, on-time, transparan.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div className="md:flex-1 min-w-0">
                        <p className="text-xs uppercase font-mono tracking-wider text-white/35 font-medium mb-4">Navigasi</p>
                        <ul className="space-y-2.5">
                            {NAV_SHORTCUTS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sosial Media */}
                    <div className="md:flex-1 min-w-0">
                        <p className="text-xs uppercase font-mono tracking-wider text-white/35 font-medium mb-4">Sosial Media</p>
                        <div className="flex flex-col gap-3">
                            <a
                                href={CONTACT.primaryWaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                                aria-label="WhatsApp"
                            >
                                <span className="p-2 rounded-lg border border-white/15 text-white/50 group-hover:border-white/35 group-hover:text-white transition-all shrink-0">
                                    <WhatsAppIcon />
                                </span>
                                <span className="text-sm text-white/50 group-hover:text-white transition-colors font-mono">WhatsApp</span>
                            </a>
                            <a
                                href={SOCIALS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                                aria-label="Instagram"
                            >
                                <span className="p-2 rounded-lg border border-white/15 text-white/50 group-hover:border-white/35 group-hover:text-white transition-all shrink-0">
                                    <InstagramIcon />
                                </span>
                                <span className="text-sm text-white/50 group-hover:text-white transition-colors font-mono">Instagram</span>
                            </a>
                            <a
                                href={SOCIALS.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                                aria-label="TikTok"
                            >
                                <span className="p-2 rounded-lg border border-white/15 text-white/50 group-hover:border-white/35 group-hover:text-white transition-all shrink-0">
                                    <TikTokIcon />
                                </span>
                                <span className="text-sm text-white/50 group-hover:text-white transition-colors font-mono">TikTok</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
                    <p>© {new Date().getFullYear()} Codevela. All rights reserved.</p>
                    <p className="font-mono tracking-wide">Clean Code · On-Time · Guaranteed</p>
                </div>
            </div>
        </footer>
    );
}
