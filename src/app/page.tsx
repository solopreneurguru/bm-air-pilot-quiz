import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome to BMAir</h1>
          <p className="text-xl text-neutral-200 max-w-lg mx-auto leading-relaxed">
            Complete our quick pilot program questionnaire to get started with BMAir air filtration solutions.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/quiz"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-sky-500 text-white text-lg font-semibold hover:bg-sky-600 active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
