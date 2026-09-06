"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-14 md:py-20 border-t border-base-gray-light">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-mono text-2xl md:text-3xl font-medium max-w-lg">
                    Tanya Jawab Singkat
                </h2>

                <div className="mt-10 max-w-2xl divide-y divide-base-gray-light">
                    {FAQS.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={faq.question}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-medium text-sm md:text-base pr-6">{faq.question}</span>
                                    <span className="text-base-gray text-xl leading-none shrink-0">
                                        {isOpen ? "–" : "+"}
                                    </span>
                                </button>
                                {isOpen && (
                                    <p className="pb-5 text-sm text-base-gray-dark leading-relaxed max-w-xl">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}