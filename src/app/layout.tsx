import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMAir Pilot Program",
  description: "Quick pilot program questionnaire",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-neutral-100 text-neutral-900`}>
        <header className="w-full border-b bg-white">
          <div className="mx-auto max-w-2xl px-4 py-3 font-semibold">
            BMAir Pilot Program
          </div>
        </header>
        <main className="mx-auto max-w-2xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 text-sm text-neutral-500">
            © {new Date().getFullYear()} SmartTech USA • BMAir
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
