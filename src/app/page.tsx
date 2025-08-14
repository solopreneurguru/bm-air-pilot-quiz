import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Welcome</h1>
      <p className="text-neutral-700">
        This site will host our fast, mobile‑friendly pilot program questionnaire.
      </p>
      <Link
        href="/quiz"
        className="inline-block rounded-xl border px-5 py-3 text-center font-medium hover:bg-neutral-50 active:scale-[.99]"
      >
        Go to Quiz
      </Link>
    </div>
  );
}
