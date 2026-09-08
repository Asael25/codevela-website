import { PricingTier } from "@/lib/data";
import { GraduationCap, Globe, Cpu, Check, LucideIcon } from "lucide-react";

const TIER_ICONS: Record<string, LucideIcon> = {
    GraduationCap,
    Globe,
    Cpu,
};

export default function PricingCard({ tier, highlighted = false }: { tier: PricingTier; highlighted?: boolean }) {
    const IconComponent = TIER_ICONS[tier.icon] || Globe;

    return (
        <div
            className={`flex flex-col h-full p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${highlighted
                ? "border-base-black bg-base-black text-base-white shadow-lg"
                : "border-base-gray-light hover:border-base-gray-medium bg-base-white shadow-sm hover:shadow-md"
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${highlighted ? "bg-white/10" : "bg-base-subtle"}`}>
                    <IconComponent className={`w-4.5 h-4.5 ${highlighted ? "text-white" : "text-base-gray-dark"}`} />
                </div>
                <h3 className={`font-mono text-sm font-medium leading-snug ${highlighted ? "text-white" : "text-base-black"}`}>
                    {tier.title}
                </h3>
            </div>

            <p className={`mt-5 text-xl font-semibold tracking-tight ${highlighted ? "text-white" : "text-base-black"}`}>
                {tier.priceRange}
            </p>

            <div className={`mt-1 h-px ${highlighted ? "bg-white/15" : "bg-base-gray-light"}`} />

            <div className="mt-5 space-y-4 flex-1">
                <div>
                    <p className={`text-xs uppercase font-mono tracking-wider font-medium ${highlighted ? "text-white/50" : "text-base-gray"}`}>
                        {tier.floorLabel}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                        {tier.floorItems.map((item) => (
                            <li key={item} className={`text-sm leading-snug flex items-start gap-2 ${highlighted ? "text-white/70" : "text-base-gray-dark"}`}>
                                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${highlighted ? "bg-white/40" : "bg-base-gray"}`} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className={`text-xs uppercase font-mono tracking-wider font-medium ${highlighted ? "text-white/50" : "text-base-gray"}`}>
                        {tier.ceilingLabel}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                        {tier.ceilingItems.map((item) => (
                            <li key={item} className={`text-sm leading-snug flex items-start gap-2 ${highlighted ? "text-white/70" : "text-base-gray-dark"}`}>
                                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${highlighted ? "bg-white/70" : "bg-base-black"}`} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`mt-5 pt-5 border-t ${highlighted ? "border-white/15" : "border-base-gray-light"}`}>
                <p className={`text-xs uppercase font-mono tracking-wider font-medium ${highlighted ? "text-white/50" : "text-base-gray"}`}>
                    Benefit Paket
                </p>
                <ul className="mt-2 space-y-1.5">
                    {tier.benefits.map((item) => (
                        <li key={item} className={`text-sm leading-snug font-medium flex items-start gap-2 ${highlighted ? "text-white" : "text-base-black"}`}>
                            <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${highlighted ? "text-white/70" : "text-base-gray-dark"}`} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}