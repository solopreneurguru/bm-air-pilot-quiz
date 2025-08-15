import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome</h1>
        <p className="text-neutral-700">
          This site will host our fast, mobile‑friendly pilot program questionnaire.
        </p>
        <Link
          href="/quiz"
          className="inline-block rounded-xl bg-sky-500 text-white px-5 py-3 text-center font-medium hover:bg-sky-600 active:scale-[.99] transition-colors"
        >
          Go to Quiz
        </Link>
      </div>
    </div>
  );
}
