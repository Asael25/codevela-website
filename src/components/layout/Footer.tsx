import { CONTACT, SOCIALS } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="border-t border-base-gray-light bg-base-gray-light/60 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <span className="font-mono text-lg tracking-tight font-medium">codevela</span>
                        <p className="mt-3 text-sm text-base-gray-dark max-w-xs leading-relaxed">
                            Solusi IT & pemrograman untuk kebutuhan bisnis dan akademik.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase font-mono tracking-wider text-base-gray font-medium">Kontak</p>
                        <div className="mt-3 space-y-2 text-sm">
                            {CONTACT.admins.map((admin) => (
                                <a
                                    key={admin.phone}
                                    href={admin.waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-base-gray-dark hover:text-base-black transition-colors"
                                >
                                    Chat {admin.name} — WhatsApp
                                </a>
                            ))}

                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase font-mono tracking-wider text-base-gray font-medium">Sosial Media</p>
                        <div className="mt-3 space-y-2 text-sm">
                            <a
                                href={SOCIALS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-base-gray-dark hover:text-base-black transition-colors"
                            >
                                Instagram
                            </a>
                            <a
                                href={SOCIALS.linktree}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-base-gray-dark hover:text-base-black transition-colors"
                            >
                                Linktree
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-base-gray-light/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-base-gray">
                    <p>© {new Date().getFullYear()} Codevela. All rights reserved.</p>
                    <p className="font-mono">Clean Code • On-Time • Guaranteed</p>
                </div>
            </div>
        </footer>
    );
}

