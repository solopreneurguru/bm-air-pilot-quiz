import { NextRequest } from "next/server";
import QRCode from "qrcode";

interface RouteParams {
    params: Promise<{ code: string }>;
}

export async function GET(req: NextRequest, { params }: RouteParams) {
    const { code } = await params;
    const codeValue = code || "qr-mailer-2025";
    const origin = req.nextUrl.origin;
    const target = `${origin}/q/${encodeURIComponent(codeValue)}`;

    const svg = await QRCode.toString(target, {
        type: "svg",
        margin: 1,
        errorCorrectionLevel: "M"
    });

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=31536000, immutable"
        }
    });
} 