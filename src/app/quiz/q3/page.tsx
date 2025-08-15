"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import OptionButton from "@/components/OptionButton";

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
            <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">How many units are you considering?</h1>
                <p className="text-neutral-600 text-sm">Help us understand the scope of your pilot program.</p>
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