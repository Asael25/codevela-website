import PricingCard from "@/components/ui/PricingCard";
import { PRICING, PRICING_DISCLAIMER } from "@/lib/data";

export default function Pricing() {
    return (
        <section id="layanan" className="py-14 md:py-20 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-2xl md:text-3xl font-medium max-w-lg">
                    Layanan & Range Harga
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PRICING.map((tier, i) => (
                        <PricingCard key={tier.title} tier={tier} highlighted={i === 1} />
                    ))}
                </div>

                <p className="mt-8 text-sm text-base-gray-dark max-w-lg">{PRICING_DISCLAIMER}</p>
            </div>
        </section>
    );
}