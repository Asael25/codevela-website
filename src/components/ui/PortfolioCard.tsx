import { PortfolioItem } from "@/lib/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
    return (
        <div className="group flex flex-col rounded-xl border border-base-gray-light bg-base-white shadow-sm overflow-hidden hover:shadow-md hover:border-base-gray-medium transition-all duration-200">
            {/* Image placeholder — will be replaced with actual screenshots */}
            <div className="aspect-video bg-base-subtle flex items-center justify-center border-b border-base-gray-light relative overflow-hidden">
                <span className="font-mono text-xs text-base-gray px-3 py-1 rounded-full border border-base-gray-light bg-base-white/80">
                    {item.category}
                </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-sm text-base-black leading-snug">
                    {item.title}
                </h3>
                <p className="mt-2 text-xs text-base-gray-dark leading-relaxed line-clamp-2">
                    {item.solution}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-xs px-2 py-0.5 rounded border border-base-gray-light text-base-gray-medium bg-base-subtle"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}