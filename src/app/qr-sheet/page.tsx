"use client";
import { useSearchParams } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default function Sheet() {
    const qs = useSearchParams();
    const code = qs.get("code") || "qr-mailer-2025";
    const count = Math.min(12, Math.max(1, Number(qs.get("count") || 12)));
    const arr = Array.from({ length: count });

    return (
        <div style={{ padding: 16 }}>
            <style>{`
        @media print {
          @page { size: Letter; margin: 0.25in; }
          body { margin: 0; }
          .no-print { display: none; }
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 2in);
          grid-auto-rows: 2in;
          gap: 0.15in;
          justify-content: center;
        }
        .card {
          width: 2in; height: 2in;
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;
          border: 1px solid #ddd; border-radius: 8px;
        }
        .title { font: 600 10pt system-ui, -apple-system, Segoe UI, Roboto, sans-serif; text-align:center; }
        .qr { width: 1.4in; height: 1.4in; }
        .sub { font: 500 7pt system-ui; color:#555; text-align:center; }
        .controls { margin-bottom: 12px; display:flex; gap:10px; align-items:center; }
        .btn { padding: 6px 10px; border: 1px solid #ddd; border-radius: 8px; font: 500 10pt system-ui; }
        .small { font: 500 10pt system-ui; }
      `}</style>

            <div className="controls no-print">
                <button className="btn" onClick={() => window.print()}>Print sheet</button>
                <span className="small">Code: <b>{code}</b> • Count: {count}</span>
            </div>

            <div className="grid">
                {arr.map((_, i) => (
                    <div className="card" key={i}>
                        <div className="title">Scan Me for our<br />Pilot Program Information</div>
                        <img className="qr" alt="QR" src={`/api/qr/${encodeURIComponent(code)}`} />
                        <div className="sub">{code}</div>
                    </div>
                ))}
            </div>
        </div>
    );
} 