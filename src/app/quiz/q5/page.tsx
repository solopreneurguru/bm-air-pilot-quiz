"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import OptionButton from "@/components/OptionButton";

export default function Q5() {
    const r = useRouter();
    const { setAnswer } = useQuiz();

    const go = (a: string) => {
        setAnswer("Q5", a);
        r.push("/quiz/contact");
    };

    const A = ["Yes, on-site demo", "Yes, remote intro", "Send spec sheet first"];

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">Would you like us to contact you to set up the pilot?</h1>
                <p className="text-neutral-600 text-sm">Choose how you&apos;d like to proceed with the next steps.</p>
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