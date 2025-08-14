import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { answers = {}, contact = {}, source = "qr-mailer-2025" } = await req.json();
        const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env as Record<string, string>;

        if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
            return NextResponse.json({ ok: false, error: "Missing env" }, { status: 500 });
        }

        const fields: Record<string, any> = {
            Name: contact.name || "",
            Phone: contact.phone || "",
            Email: contact.email || "",
            Source: source,
            SubmittedAt: new Date().toISOString(),
        };

        for (const k of ["Q1", "Q2", "Q3", "Q4", "Q5"]) fields[k] = (answers as any)[k] || "";

        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ records: [{ fields }] })
        });

        if (!res.ok) {
            const t = await res.text();
            return NextResponse.json({ ok: false, error: t }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e?.message || "Unknown" }, { status: 500 });
    }
} 