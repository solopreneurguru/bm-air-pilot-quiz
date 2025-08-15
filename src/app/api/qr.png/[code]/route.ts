export const runtime = "nodejs";
import QRCode from "qrcode";

export async function GET(request: Request, { params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const codeValue = code ?? "qr-mailer-2025";
    const origin = new URL(request.url).origin;
    const target = `${origin}/q/${encodeURIComponent(codeValue)}`;
    const buf = await QRCode.toBuffer(target, {
        type: "png",
        margin: 1,
        errorCorrectionLevel: "M",
        width: 1024 // hi-res for print
    });
    return new Response(buf, {
        headers: {
            "Content-Type": "image/png",
            "Content-Disposition": `inline; filename="${codeValue}.png"`,
            "Cache-Control": "public, max-age=31536000, immutable"
        }
    });
} 