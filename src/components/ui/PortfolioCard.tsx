import { PortfolioItem } from "@/lib/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
    return (
        <div className="flex flex-col p-6 rounded-2xl border border-base-gray-light h-full transition-all duration-300 hover:-translate-y-1 hover:border-base-black/40 hover:shadow-lg">
            <div className="aspect-video rounded-lg bg-base-gray-light flex items-center justify-center">
                <span className="font-mono text-xs text-base-gray">{item.category}</span>
            </div>

            <h3 className="mt-5 font-medium text-lg">{item.title}</h3>

            <div className="mt-4 space-y-3 flex-1">
                <p className="text-sm text-base-gray-dark leading-relaxed">
                    <span className="font-medium text-base-black">Tantangan: </span>
                    {item.challenge}
                </p>
                <p className="text-sm text-base-gray-dark leading-relaxed">
                    <span className="font-medium text-base-black">Solusi: </span>
                    {item.solution}
                </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                    <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-full bg-base-gray-light text-base-gray-dark"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}