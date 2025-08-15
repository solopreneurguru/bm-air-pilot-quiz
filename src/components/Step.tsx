"use client";

import { motion } from "framer-motion";

export function Step({ n, total }: { n: number; total: number }) {
    const pct = Math.round((n / total) * 100);
    return (
        <div className="flex items-center gap-4">
            <div className="flex-1 h-1 rounded-full bg-neutral-200 overflow-hidden">
                <motion.div
                    className="h-1 rounded-full bg-sky-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </div>
            <div className="text-sm font-semibold text-neutral-700 tabular-nums min-w-[2rem] text-right">
                {n}/{total}
            </div>
        </div>
    );
} 