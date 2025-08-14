import { NextResponse } from "next/server";

export async function GET() {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_TABLE_ID, AIRTABLE_SCANS_TABLE_ID } = process.env as Record<string, string>;
    const tablePath = encodeURIComponent(AIRTABLE_TABLE_ID || AIRTABLE_TABLE_NAME || "");

    return NextResponse.json({
        hasKey: !!AIRTABLE_API_KEY,
        base: AIRTABLE_BASE_ID || null,
        tableName: AIRTABLE_TABLE_NAME || null,
        tableId: AIRTABLE_TABLE_ID || null,
        tablePath,
        scansTableId: AIRTABLE_SCANS_TABLE_ID || null,
    });
} 