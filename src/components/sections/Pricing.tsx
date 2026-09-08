import PricingCard from "@/components/ui/PricingCard";
import { PRICING, PRICING_DISCLAIMER } from "@/lib/data";

export default function Pricing() {
    return (
        <section id="layanan" className="py-12 md:py-16 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray">Layanan</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-medium text-base-black">
                        Layanan & Range Harga
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {PRICING.map((tier, i) => (
                        <PricingCard key={tier.title} tier={tier} highlighted={i === 1} />
                    ))}
                </div>

                <p className="mt-6 text-sm text-base-gray-dark max-w-lg">{PRICING_DISCLAIMER}</p>
            </div>
        </section>
    );
}