import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

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
      <body className={`${inter.className} min-h-screen bg-neutral-900 text-white antialiased`}>
        <header className="w-full border-b border-neutral-700 bg-neutral-950/80 backdrop-blur-sm">
          <div className="mx-auto max-w-2xl px-4 py-4 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl text-white">BMAir Pilot Program</span>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-2xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t border-neutral-700 bg-neutral-950/80">
          <div className="mx-auto max-w-2xl px-4 py-4 text-sm text-neutral-300">
            © {new Date().getFullYear()} SmartTech USA • BMAir
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
