"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuiz } from "@/context/quiz";
import { useState, Suspense } from "react";

interface ApiResponse {
    ok: boolean;
    error?: string;
}

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
            let data: ApiResponse = { ok: false };
            try { data = await res.json(); } catch { }
            if (!res.ok) throw new Error(data?.error || `Submit failed (${res.status})`);
            reset();
            router.push("/quiz/thank-you");
        } catch (e: unknown) {
            console.error(e);
            const errorMessage = e instanceof Error ? e.message : "Something went wrong";
            setErr(errorMessage);
        } finally {
            setBusy(false);
        }
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">How can we reach you?</h1>
            <input
                required
                placeholder="Name"
                value={contact.name}
                onChange={e => setContact({ name: e.target.value })}
                className="w-full rounded-xl border px-4 py-3"
            />
            <input
                required
                placeholder="Phone"
                value={contact.phone}
                onChange={e => setContact({ phone: e.target.value })}
                className="w-full rounded-xl border px-4 py-3"
            />
            <input
                required
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={e => setContact({ email: e.target.value })}
                className="w-full rounded-xl border px-4 py-3"
            />
            {err && <div className="text-red-600">{err}</div>}
            <button
                disabled={busy}
                className="w-full rounded-2xl border px-6 py-4 text-center text-lg font-semibold hover:bg-neutral-50 active:scale-[.99]"
            >
                {busy ? "Submitting…" : "Submit"}
            </button>
        </form>
    );
}

export default function Contact() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
        </Suspense>
    );
} 