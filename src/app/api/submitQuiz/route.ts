import { NextResponse } from "next/server";

interface QuizSubmission {
    answers: Record<string, string>;
    contact: {
        name?: string;
        phone?: string;
        email?: string;
    };
    source?: string;
}

interface AirtableFields {
    Name: string;
    Phone: string;
    Email: string;
    Source: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    Q5: string;
}

interface AirtableErrorResponse {
    error?: {
        message?: string;
        type?: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

export async function POST(req: Request) {
    try {
        const { answers = {}, contact = {}, source = "qr-mailer-2025" }: QuizSubmission = await req.json();
        const {
            AIRTABLE_API_KEY,
            AIRTABLE_BASE_ID,
            AIRTABLE_TABLE_NAME,
            AIRTABLE_TABLE_ID,
        } = process.env as Record<string, string>;

        if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !(AIRTABLE_TABLE_ID || AIRTABLE_TABLE_NAME)) {
            return NextResponse.json({ ok: false, error: "Missing env" }, { status: 500 });
        }

        const fields: AirtableFields = {
            Name: contact?.name || "",
            Phone: contact?.phone || "",
            Email: contact?.email || "",
            Source: source || "qr-mailer-2025",
            Q1: answers.Q1 || "",
            Q2: answers.Q2 || "",
            Q3: answers.Q3 || "",
            Q4: answers.Q4 || "",
            Q5: answers.Q5 || "",
        };

        const tablePath = encodeURIComponent(AIRTABLE_TABLE_ID || AIRTABLE_TABLE_NAME!);
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tablePath}`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ records: [{ fields }] }),
        });

        const text = await res.text();
        let data: AirtableErrorResponse | null = null;
        try { data = JSON.parse(text); } catch { }

        if (!res.ok) {
            const message =
                data?.error?.message ||
                data?.error?.type ||
                data?.error ||
                text ||
                `Airtable error (HTTP ${res.status})`;
            console.error("Airtable submit error:", { status: res.status, message, data });
            return NextResponse.json({ ok: false, status: res.status, error: message }, { status: res.status });
        }

        return NextResponse.json({ ok: true });
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        console.error("SubmitQuiz route error:", e);
        return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
    }
} 