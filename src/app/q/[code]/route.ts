import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { code: string } }) {
    const code = params.code || "qr-mailer-2025";
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_SCANS_TABLE_ID, AIRTABLE_SCANS_TABLE_NAME } = process.env as Record<string, string>;

    try {
        if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID && (AIRTABLE_SCANS_TABLE_ID || AIRTABLE_SCANS_TABLE_NAME)) {
            const ua = req.headers.get("user-agent") || "";
            const referer = req.headers.get("referer") || "";
            const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
            const fields: Record<string, any> = { Code: code, UserAgent: ua, Referer: referer, IP: ip };
            const tablePath = encodeURIComponent(AIRTABLE_SCANS_TABLE_ID || AIRTABLE_SCANS_TABLE_NAME!);
            const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tablePath}`;

            await fetch(url, {
                method: "POST",
                headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`, "Content-Type": "application/json" },
                body: JSON.stringify({ records: [{ fields }] }),
            });
        }
    } catch (e) {
        console.error("Scan log error:", e);
    }

    const dest = new URL(`/quiz/start?src=${encodeURIComponent(code)}`, req.nextUrl.origin);
    return NextResponse.redirect(dest, 302);
} 