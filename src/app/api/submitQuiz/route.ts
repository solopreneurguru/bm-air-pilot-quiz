import { NextResponse } from "next/server";

interface QuizSubmission {
    answers: Record<string, string>;
    contact: {
        name: string;
        phone: string;
        email: string;
    };
    source: string;
}

interface AirtableFields {
    Name: string;
    Phone: string;
    Email: string;
    Source: string;
    SubmittedAt: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    Q5: string;
}

export async function POST(req: Request) {
    try {
        const { answers = {}, contact = { name: "", phone: "", email: "" }, source = "qr-mailer-2025" }: QuizSubmission = await req.json();
        const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_TABLE_ID } = process.env as Record<string, string>;

        if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
            return NextResponse.json({ ok: false, error: "Missing env" }, { status: 500 });
        }

        const fields: AirtableFields = {
            Name: contact.name || "",
            Phone: contact.phone || "",
            Email: contact.email || "",
            Source: source,
            SubmittedAt: new Date().toISOString(),
            Q1: answers.Q1 || "",
            Q2: answers.Q2 || "",
            Q3: answers.Q3 || "",
            Q4: answers.Q4 || "",
            Q5: answers.Q5 || "",
        };

        const tablePath = encodeURIComponent(AIRTABLE_TABLE_ID || AIRTABLE_TABLE_NAME || "");
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tablePath}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ records: [{ fields }] })
        });

        if (!res.ok) {
            const text = await res.text();
            let details: any = null;
            try { details = JSON.parse(text); } catch { }
            const errorPayload = details?.error || text || "Unknown Airtable error";
            return NextResponse.json({ ok: false, status: res.status, error: errorPayload }, { status: res.status });
        }

        return NextResponse.json({ ok: true });
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
    }
} 