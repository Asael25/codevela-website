"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
    return (
        <section className="py-14 md:py-20 border-t border-base-gray-light bg-base-gray-light/40">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-2xl md:text-3xl font-medium max-w-lg">Testimoni</h2>

                <div className="mt-14">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!pb-12"
                    >
                        {TESTIMONIALS.map((t) => (
                            <SwiperSlide key={t.name}>
                                <div className="h-full p-6 rounded-2xl border border-base-gray-light bg-base-white flex flex-col">
                                    <p className="text-sm text-base-gray-dark leading-relaxed flex-1">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="mt-6">
                                        <p className="font-medium text-sm">{t.name}</p>
                                        <p className="text-xs text-base-gray">{t.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}