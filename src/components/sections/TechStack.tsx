"use client";

import { motion } from "framer-motion";
import { TECH_STACK, TechStackItem } from "@/lib/data";
import { IconType } from "react-icons";
import {
    SiNextdotjs,
    SiLaravel,
    SiReact,
    SiFlutter,
    SiMysql,
    SiSupabase,
    SiGithub,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiDocker,
    SiPhp,
    SiPostman,
} from "react-icons/si";

const ICON_MAP: Record<string, IconType> = {
    SiNextdotjs,
    SiLaravel,
    SiReact,
    SiFlutter,
    SiMysql,
    SiSupabase,
    SiGithub,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiDocker,
    SiPhp,
    SiPostman,
};

function TechCard({ item }: { item: TechStackItem }) {
    const IconComponent = ICON_MAP[item.icon] || SiReact;

    return (
        <div className="group relative flex items-center gap-3.5 px-4 py-3 rounded-xl border border-base-gray-light bg-base-white shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:border-base-black/40 transition-all duration-300 shrink-0 cursor-default select-none min-w-[200px]">
            <div
                className="w-10 h-10 rounded-lg border border-base-gray-light/60 bg-base-subtle/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                style={{
                    backgroundColor: `${item.color}10`, // 10% opacity tint
                }}
            >
                <IconComponent
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                />
            </div>
            <div className="flex flex-col min-w-0">
                <span className="font-mono text-sm font-semibold text-base-black truncate group-hover:text-base-black/90">
                    {item.name}
                </span>
                <span className="text-[11px] font-mono text-base-gray-medium truncate">
                    {item.category}
                </span>
            </div>
        </div>
    );
}

export default function TechStack() {
    // Split into 2 rows for balanced opposite-direction marquee
    const halfIndex = Math.ceil(TECH_STACK.length / 2);
    const row1 = TECH_STACK.slice(0, halfIndex);
    const row2 = TECH_STACK.slice(halfIndex);

    // Duplicate arrays for seamless infinite loop
    const duplicatedRow1 = [...row1, ...row1];
    const duplicatedRow2 = [...row2, ...row2];

    return (
        <section id="tech-stack" className="py-10 md:py-14 border-t border-base-gray-light overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">
                            Teknologi & Tools
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-base-black animate-pulse" />
                    </div>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                        Tech Stack Modern & Teruji
                    </h2>
                    <p className="mt-2 text-sm text-base-gray-dark max-w-xl leading-relaxed">
                        Kami menggunakan teknologi dan tools industri terkini untuk memastikan kode rapi, performa responsif, dan kemudahan skalabilitas jangka panjang.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container with side gradient masks */}
            <div className="relative w-full overflow-hidden py-2 space-y-4">
                {/* Left & Right Gradient Shadows */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10"
                />

                {/* Row 1: Leftward Marquee */}
                <div className="flex animate-marquee gap-4 items-center">
                    {duplicatedRow1.map((item, idx) => (
                        <TechCard key={`row1-${item.name}-${idx}`} item={item} />
                    ))}
                </div>

                {/* Row 2: Rightward Marquee (Opposite direction) */}
                <div className="flex animate-marquee-reverse gap-4 items-center">
                    {duplicatedRow2.map((item, idx) => (
                        <TechCard key={`row2-${item.name}-${idx}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
