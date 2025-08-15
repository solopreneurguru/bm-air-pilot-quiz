"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import OptionButton from "@/components/OptionButton";

export default function Q1() {
    const r = useRouter();
    const { setAnswer } = useQuiz();

    const go = (a: string) => {
        setAnswer("Q1", a);
        r.push("/quiz/q2");
    };

    const A = ["Excavators", "Wheel Loaders", "Bulldozers", "Other"];

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">What equipment do you want to pilot BMAir on first?</h1>
                <p className="text-neutral-600 text-sm">Select the primary equipment type for your pilot program.</p>
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