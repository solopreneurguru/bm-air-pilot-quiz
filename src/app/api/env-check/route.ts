import { NextResponse } from "next/server";

export async function GET() {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env as Record<string, string>;
    return NextResponse.json({
        hasKey: !!AIRTABLE_API_KEY,
        base: AIRTABLE_BASE_ID || null,
        table: AIRTABLE_TABLE_NAME || null
    });
} 