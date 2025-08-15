import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BMAir Pilot Program",
  description: "Quick pilot program questionnaire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-900`}>
        <header className="w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-2xl px-4 py-3 flex items-center gap-3">
            {/* Optional logo */}
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg">BMAir Pilot Program</span>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-2xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-2xl px-4 py-4 text-sm text-neutral-500">
            © {new Date().getFullYear()} SmartTech USA • BMAir
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
