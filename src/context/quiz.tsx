"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Answers = { [key: string]: string };
interface Contact { name: string; phone: string; email: string; }
interface QuizState { answers: Answers; contact: Contact; setAnswer: (q: string, a: string) => void; setContact: (c: Partial<Contact>) => void; reset: () => void; }

const defaultContact: Contact = { name: "", phone: "", email: "" };
const QuizCtx = createContext<QuizState | null>(null);
const STORAGE_KEY = "bm-air-quiz-state";

export function QuizProvider({ children }: { children: React.ReactNode }) {
    const [answers, setAnswers] = useState<Answers>({});
    const [contact, setContactState] = useState<Contact>(defaultContact);

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            if (raw) {
                const p = JSON.parse(raw);
                setAnswers(p.answers || {});
                setContactState(p.contact || defaultContact);
            }
        } catch { }
    }, []);

    useEffect(() => {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, contact }));
        } catch { }
    }, [answers, contact]);

    const api = useMemo<QuizState>(() => ({
        answers, contact,
        setAnswer: (q, a) => setAnswers(prev => ({ ...prev, [q]: a })),
        setContact: (c) => setContactState(prev => ({ ...prev, ...c })),
        reset: () => { setAnswers({}); setContactState(defaultContact); sessionStorage.removeItem(STORAGE_KEY); },
    }), [answers, contact]);

    return <QuizCtx.Provider value={api}>{children}</QuizCtx.Provider>;
}

export function useQuiz() {
    const v = useContext(QuizCtx);
    if (!v) throw new Error("useQuiz must be used within QuizProvider");
    return v;
} 