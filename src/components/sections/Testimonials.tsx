"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-10 md:py-13 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-base-gray font-semibold">Kata Mereka</span>
                    <h2 className="mt-1.5 font-mono text-2xl md:text-3xl font-semibold text-base-black">
                        Testimoni
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!pb-10"
                >
                    {TESTIMONIALS.map((t) => (
                        <SwiperSlide key={t.name}>
                            {/* min-h ensures same height baseline; flex-col + flex-1 stretches content */}
                            <div className="flex flex-col min-h-[168px] h-full p-6 rounded-xl border border-base-gray-light bg-base-white shadow-sm hover:shadow-md hover:border-base-gray-medium transition-all duration-200">
                                <Quote className="w-4 h-4 text-base-gray-light mb-3 shrink-0" />
                                <p className="text-sm text-base-gray-dark leading-relaxed flex-1">
                                    {t.quote}
                                </p>
                                <div className="mt-5 pt-4 border-t border-base-gray-light shrink-0">
                                    <p className="font-semibold text-sm text-base-black">{t.name}</p>
                                    <p className="text-xs text-base-gray font-mono mt-0.5">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}