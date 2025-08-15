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

    // Convert Buffer to ArrayBuffer for Response compatibility
    const arrayBuffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    if (arrayBuffer instanceof SharedArrayBuffer) {
        // Convert SharedArrayBuffer to regular ArrayBuffer
        const regularBuffer = new ArrayBuffer(arrayBuffer.byteLength);
        new Uint8Array(regularBuffer).set(new Uint8Array(arrayBuffer));
        return new Response(regularBuffer, {
            headers: {
                "Content-Type": "image/png",
                "Content-Disposition": `inline; filename="${codeValue}.png"`,
                "Cache-Control": "public, max-age=31536000, immutable"
            }
        });
    }

    return new Response(arrayBuffer, {
        headers: {
            "Content-Type": "image/png",
            "Content-Disposition": `inline; filename="${codeValue}.png"`,
            "Cache-Control": "public, max-age=31536000, immutable"
        }
    });
} 