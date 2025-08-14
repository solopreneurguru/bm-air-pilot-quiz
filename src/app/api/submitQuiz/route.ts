import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { answers = {}, contact = {}, source = "qr-mailer-2025" } = await req.json();
        const {
            AIRTABLE_API_KEY,
            AIRTABLE_BASE_ID,
            AIRTABLE_TABLE_NAME,
            AIRTABLE_TABLE_ID,
        } = process.env as Record<string, string>;

        if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !(AIRTABLE_TABLE_ID || AIRTABLE_TABLE_NAME)) {
            return NextResponse.json({ ok: false, error: "Missing env" }, { status: 500 });
        }

        const fields: Record<string, any> = {
            Name: contact?.name || "",
            Phone: contact?.phone || "",
            Email: contact?.email || "",
            Source: source || "qr-mailer-2025",
        };
        for (const k of ["Q1", "Q2", "Q3", "Q4", "Q5"]) fields[k] = (answers as any)[k] || "";

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
        let data: any = null;
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
    } catch (e: any) {
        console.error("SubmitQuiz route error:", e);
        return NextResponse.json({ ok: false, error: e?.message || "Unknown" }, { status: 500 });
    }
} 