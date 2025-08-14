import QRCode from "qrcode";

export async function GET(request: Request, { params }: { params: { code: string } }) {
    const code = params?.code ?? "qr-mailer-2025";
    const origin = new URL(request.url).origin;
    const target = `${origin}/q/${encodeURIComponent(code)}`;
    const svg = await QRCode.toString(target, { type: "svg", margin: 1, errorCorrectionLevel: "M" });
    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    });
} 