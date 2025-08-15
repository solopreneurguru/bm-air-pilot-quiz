"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import { useState } from "react";

export default function Contact() {
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
        } catch (e: any) {
            setErr(e?.message || "Something went wrong");
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">How can we reach you?</h1>
            <form onSubmit={submit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
                    <input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={contact.name}
                        onChange={e => setContact({ name: e.target.value })}
                        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-neutral-700">Phone</label>
                    <input
                        id="phone"
                        required
                        placeholder="Your phone number"
                        value={contact.phone}
                        onChange={e => setContact({ phone: e.target.value })}
                        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                    <input
                        id="email"
                        required
                        type="email"
                        placeholder="your.email@company.com"
                        value={contact.email}
                        onChange={e => setContact({ email: e.target.value })}
                        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
                    />
                </div>
                {err && <div className="text-red-600 text-sm">{err}</div>}
                <p className="text-neutral-500 text-sm">We'll only use your info to contact you about the pilot.</p>
                <button
                    disabled={busy}
                    className="w-full rounded-2xl bg-sky-500 text-white px-6 py-4 text-center text-lg font-semibold hover:bg-sky-600 active:scale-[.99] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {busy ? "Submitting…" : "Submit"}
                </button>
            </form>
        </div>
    );
} 