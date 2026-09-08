import { PortfolioItem, CONTACT } from "@/lib/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
    const waMessage = encodeURIComponent(`Halo Codevela, saya tertarik dengan proyek portofolio "${item.title}". Bisa info lebih lanjut?`);
    const waLink = `${CONTACT.primaryWaLink}?text=${waMessage}`;

    return (
        <div className="group flex flex-col rounded-xl border border-base-gray-light bg-base-white shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-base-black/30 transition-all duration-300">
            {/* Visual Browser Header */}
            <div className="bg-base-subtle/80 border-b border-base-gray-light p-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-base-gray-light/90 group-hover:bg-red-400/80 transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-base-gray-light/90 group-hover:bg-yellow-400/80 transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-base-gray-light/90 group-hover:bg-green-400/80 transition-colors" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-base-gray px-2 py-0.5 rounded border border-base-gray-light/70 bg-base-white">
                        {item.demoBadge}
                    </span>
                    <span className="font-mono text-[10px] text-base-gray-medium">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Visual Card Canvas */}
            <div className="p-5 border-b border-base-gray-light/60 bg-gradient-to-b from-base-subtle/30 to-base-white flex flex-col justify-center min-h-[100px]">
                <h4 className="font-mono text-base font-semibold text-base-black group-hover:text-base-black/80 transition-colors">
                    {item.title}
                </h4>
                <p className="mt-1 text-xs text-base-gray-medium font-mono">
                    {item.tagline}
                </p>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                    <p className="text-xs text-base-gray-dark leading-relaxed">
                        {item.solution}
                    </p>

                    {/* Key Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-3.5 pt-3 border-t border-base-gray-light/60 space-y-1.5">
                            {item.highlights.slice(0, 2).map((hl) => (
                                <div key={hl} className="flex items-start gap-1.5 text-[11px] text-base-gray-dark">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-base-black shrink-0 mt-0.5" />
                                    <span>{hl}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-3.5 border-t border-base-gray-light/60 flex flex-col gap-3">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                        {item.stack.map((tech) => (
                            <span
                                key={tech}
                                className="font-mono text-[11px] px-2 py-0.5 rounded border border-base-gray-light text-base-gray-dark bg-base-subtle group-hover:border-base-gray-medium transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action link */}
                    <a
                        href={item.liveUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between text-xs font-mono font-medium text-base-black hover:text-base-gray-dark pt-1 group/btn"
                    >
                        <span>Lihat Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
}