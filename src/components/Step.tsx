"use client";

export function Step({ n, total }: { n: number; total: number }) {
    const pct = Math.round((n / total) * 100);
    return (
        <div className="flex items-center gap-3">
            <div className="h-2 w-full rounded-full bg-neutral-200">
                <div className="h-2 rounded-full bg-sky-500" style={{ width: pct + "%" }} />
            </div>
            <div className="text-sm text-neutral-600 tabular-nums">{n}/{total}</div>
        </div>
    );
} 