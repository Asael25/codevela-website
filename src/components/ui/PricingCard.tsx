import { PricingTier } from "@/lib/data";
import { GraduationCap, Globe, Cpu, CheckCircle2, Sparkles, LucideIcon } from "lucide-react";

const TIER_ICONS: Record<string, LucideIcon> = {
    GraduationCap,
    Globe,
    Cpu,
};

export default function PricingCard({ tier, highlighted = false }: { tier: PricingTier; highlighted?: boolean }) {
    const IconComponent = TIER_ICONS[tier.icon] || Globe;

    return (
        <div
            className={`flex flex-col h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${highlighted ? "border-base-black bg-base-black/[0.02]" : "border-base-gray-light hover:border-base-black/40 bg-white"
                }`}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-base-black text-base-white flex items-center justify-center shrink-0 shadow-sm">
                    <IconComponent className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-mono text-lg font-medium leading-snug">{tier.title}</h3>
            </div>

            <p className="mt-4 text-xl font-semibold tracking-tight text-base-black">{tier.priceRange}</p>

            <div className="mt-6 space-y-5 flex-1">
                <div>
                    <p className="text-xs uppercase font-mono tracking-wider text-base-gray font-medium">{tier.floorLabel}</p>
                    <ul className="mt-2.5 space-y-2">
                        {tier.floorItems.map((item) => (
                            <li key={item} className="text-sm text-base-gray-dark leading-snug flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-base-gray mt-1.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-xs uppercase font-mono tracking-wider text-base-gray font-medium">{tier.ceilingLabel}</p>
                    <ul className="mt-2.5 space-y-2">
                        {tier.ceilingItems.map((item) => (
                            <li key={item} className="text-sm text-base-gray-dark leading-snug flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-base-black mt-1.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-base-gray-light">
                <p className="text-xs uppercase font-mono tracking-wider text-base-gray font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    Benefit Paket
                </p>
                <ul className="mt-2.5 space-y-2">
                    {tier.benefits.map((item) => (
                        <li key={item} className="text-sm leading-snug font-medium text-base-black flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}