import { CONTACT } from "@/lib/data";

const NAV_LINKS = [
    { href: "#benefit", label: "Kenapa Kami" },
    { href: "#alur-kerja", label: "Alur Kerja" },
    { href: "#layanan", label: "Layanan" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-base-white/80 backdrop-blur border-b border-base-gray-light">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-mono text-lg tracking-tight">codevela</span>

                <div className="hidden md:flex items-center gap-8 text-sm text-base-gray-dark">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative hover:text-base-black transition-colors group"
                        >
                            {link.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-px bg-base-black transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <a
                    href={CONTACT.primaryWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-4 py-2 rounded-full bg-base-black text-base-white hover:bg-base-gray-dark transition-colors"
                >
                    Konsultasi
                </a>
            </nav>
        </header>
    );
}