"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import OptionButton from "@/components/OptionButton";

export default function Q4() {
    const r = useRouter();
    const { setAnswer } = useQuiz();

    const go = (a: string) => {
        setAnswer("Q4", a);
        r.push("/quiz/q5");
    };

    const A = ["This quarter", "Next quarter", "Exploring options"];

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">Timeline to start a pilot?</h1>
                <p className="text-neutral-600 text-sm">When are you looking to begin implementation?</p>
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