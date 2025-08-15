"use client";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import OptionButton from "@/components/OptionButton";
import { getQuestionByKey } from "@/quiz/questions";

export default function Q3() {
    const router = useRouter();
    const { setAnswer } = useQuiz();
    const question = getQuestionByKey("Q3");

    if (!question) return null;

    const go = (a: string) => {
        setAnswer("Q3", a);
        router.push("/quiz/q4");
    };

    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">{question.title}</h1>
                {question.subtitle && (
                    <p className="text-neutral-600 text-base">{question.subtitle}</p>
                )}
            </div>
            <div className="space-y-3">
                {question.answers.map(answer => (
                    <OptionButton key={answer} onClick={() => go(answer)}>
                        {answer}
                    </OptionButton>
                ))}
            </div>
        </div>
    );
} 