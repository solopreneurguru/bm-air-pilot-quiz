/* eslint-disable @next/next/no-img-element */
"use client";

export default function Sticker({ params }: { params: { code: string } }) {
    const code = params.code || "qr-mailer-2025";
    const onPrint = () => { if (typeof window !== "undefined") window.print(); };

    return (
        <div style={{ padding: "16px" }}>
            <style>{`
        @media print {
          @page { size: 2in 2in; margin: 0; }
          body { margin: 0; }
        }
        .card { width: 2in; height: 2in; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; border: 1px solid #ddd; border-radius: 8px; }
        .title { font: 600 10pt system-ui, -apple-system, Segoe UI, Roboto, sans-serif; text-align: center; }
        .qr { width: 1.4in; height: 1.4in; }
        .sub { font: 500 7pt system-ui; color: #555; text-align: center; }
        .actions { margin-top: 12px; display: flex; gap: 10px; }
        .btn { padding: 6px 10px; border: 1px solid #ddd; border-radius: 8px; font: 500 10pt system-ui; }
      `}</style>
            <div className="card">
                <div className="title">Scan Me for our<br />Pilot Program Information</div>
                <img className="qr" alt="QR" src={`/api/qr/${encodeURIComponent(code)}`} loading="eager" decoding="sync" />
                <div className="sub">{code}</div>
            </div>
            <div className="actions">
                <button className="btn" onClick={onPrint}>Print sticker</button>
                <a className="btn" href={`/api/qr.png/${encodeURIComponent(code)}`} download>Download PNG</a>
            </div>
        </div>
    );
} 