"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import { useState, Suspense } from "react";

function ContactForm() {
    const router = useRouter();
    const qs = useSearchParams();
    const source = qs.get("src") || "qr-mailer-2025";
    const { answers, contact, setContact, reset } = useQuiz();
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setBusy(true);
        setErr("");
        try {
            const res = await fetch("/api/submitQuiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answers, contact, source }),
            });
            if (!res.ok) throw new Error("Submit failed");
            reset();
            router.push("/quiz/thank-you");
        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : "Something went wrong";
            setErr(errorMessage);
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">How can we reach you?</h1>
                <p className="text-neutral-600 text-base">We&apos;ll only use your information to contact you about the pilot program.</p>
            </div>

            {err && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="text-red-700 text-sm font-medium">{err}</div>
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-neutral-700">Full Name</label>
                    <input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={contact.name}
                        onChange={e => setContact({ name: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-neutral-700">Phone Number</label>
                    <input
                        id="phone"
                        required
                        placeholder="Your phone number"
                        value={contact.phone}
                        onChange={e => setContact({ phone: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-neutral-700">Email Address</label>
                    <input
                        id="email"
                        required
                        type="email"
                        placeholder="your.email@company.com"
                        value={contact.email}
                        onChange={e => setContact({ email: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-neutral-500">We&apos;ll only use this to contact you about the pilot.</p>
                </div>

                <button
                    disabled={busy}
                    className="w-full rounded-2xl bg-sky-500 text-white px-6 py-4 text-center text-lg font-semibold hover:bg-sky-600 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                    {busy ? "Submitting…" : "Submit Application"}
                </button>
            </form>
        </div>
    );
}

export default function Contact() {
    return (
        <Suspense fallback={<div className="space-y-6"><div className="h-8 bg-neutral-200 rounded animate-pulse"></div><div className="space-y-4"><div className="h-4 bg-neutral-200 rounded animate-pulse"></div><div className="h-4 bg-neutral-200 rounded animate-pulse"></div></div></div>}>
            <ContactForm />
        </Suspense>
    );
} 