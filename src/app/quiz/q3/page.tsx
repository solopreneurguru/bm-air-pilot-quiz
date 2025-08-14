"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";

export default function Q3() {
    const r = useRouter();
    const { setAnswer } = useQuiz();
    const go = (a: string) => {
        setAnswer("Q3", a);
        r.push("/quiz/q4");
    };
    const A = ["1 machine", "2–3 machines", "4+ machines"];
    return (
        <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">How many units are you considering?</h1>
            <div className="space-y-3">
                {A.map(x => (
                    <button key={x} onClick={() => go(x)} className="w-full rounded-2xl border px-6 py-4 text-left text-lg font-semibold hover:bg-neutral-50 active:scale-[.99]">
                        {x}
                    </button>
                ))}
            </div>
        </div>
    );
} 