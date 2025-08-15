"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import OptionButton from "@/components/OptionButton";

export default function Q2() {
    const r = useRouter();
    const { setAnswer } = useQuiz();

    const go = (a: string) => {
        setAnswer("Q2", a);
        r.push("/quiz/q3");
    };

    const A = ["Cab dust", "Diesel emissions", "Silica", "New MSHA Regulations", "All of the above"];

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">Primary air‑quality concern?</h1>
                <p className="text-neutral-600 text-sm">What&apos;s driving your need for air quality solutions?</p>
            </div>
            <div className="space-y-3">
                {A.map(x => (
                    <OptionButton key={x} onClick={() => go(x)}>
                        {x}
                    </OptionButton>
                ))}
            </div>
        </div>
    );
} 