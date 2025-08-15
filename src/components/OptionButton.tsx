"use client";
import { cn } from "@/lib/cn";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface OptionButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    selected?: boolean;
    disabled?: boolean;
}

export default function OptionButton({
    children,
    onClick,
    selected = false,
    disabled = false
}: OptionButtonProps) {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        if (disabled || !onClick) return;

        // Show selected state briefly before routing
        setIsPressed(true);
        setTimeout(() => {
            onClick();
        }, 120);
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={cn(
                "w-full rounded-2xl border px-6 py-4 text-left text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
                "hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                selected || isPressed
                    ? "bg-sky-50 border-sky-300 text-sky-700 shadow-sm"
                    : "bg-white border-neutral-200 text-neutral-900 hover:border-neutral-300"
            )}
        >
            <div className="flex items-center justify-between">
                <span>{children}</span>
                {(selected || isPressed) && (
                    <CheckCircle2 className="h-5 w-5 text-sky-500 flex-shrink-0" />
                )}
            </div>
        </button>
    );
} 