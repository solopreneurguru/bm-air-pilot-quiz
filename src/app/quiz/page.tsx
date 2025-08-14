import Link from "next/link";

export default function QuizIntro() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">Quiz coming soon</h1>
            <p className="text-neutral-700">
                This is a placeholder. Tap Start to continue.
            </p>
            <Link
                href="/quiz/start"
                className="block w-full rounded-2xl border px-6 py-4 text-center text-lg font-semibold hover:bg-neutral-50 active:scale-[.99]"
            >
                Start
            </Link>
        </div>
    );
} 