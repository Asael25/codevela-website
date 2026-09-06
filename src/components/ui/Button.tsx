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
        "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200";
    const styles =
        variant === "primary"
            ? "bg-accent text-base-black hover:bg-accent/90"
            : "border border-base-black text-base-black hover:bg-base-gray-light";

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