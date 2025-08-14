/* eslint-disable @next/next/no-img-element */

export default function Sticker({ params }: { params: { code: string } }) {
    const code = params.code || "qr-mailer-2025";

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
        .print { margin-top: 12px; }
      `}</style>

            <div className="card">
                <div className="title">Scan Me for our<br />Pilot Program Information</div>
                <img className="qr" alt="QR" src={`/api/qr/${encodeURIComponent(code)}`} />
                <div className="sub">{code}</div>
            </div>

            <button className="print" onClick={() => window.print()}>Print sticker</button>
        </div>
    );
} 