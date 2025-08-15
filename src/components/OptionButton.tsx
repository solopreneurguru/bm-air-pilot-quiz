"use client";
import { cn } from "@/lib/cn";

export default function OptionButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full rounded-2xl border bg-white px-6 py-4 text-left text-lg font-semibold shadow-sm transition hover:shadow md:text-xl focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-[.99]"
            )}
        >
            {children}
        </button>
    );
} 