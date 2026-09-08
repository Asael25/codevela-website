import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    external?: boolean;
};

export default function Button({ href, children, variant = "primary", external }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200";
    const styles =
        variant === "primary"
            ? "bg-base-black text-base-white hover:bg-base-gray-dark active:scale-95"
            : "border border-base-gray-dark text-base-black hover:bg-base-gray-light active:scale-95";

    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`${base} ${styles}`}
        >
            {children}
        </Link>
    );
}