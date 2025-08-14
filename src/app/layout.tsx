import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BM Air Pilot Quiz",
  description: "Professional pilot assessment and training platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">BM Air Pilot Quiz</h1>
              </div>
              <nav className="hidden sm:flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="/quiz" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Quiz
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; 2024 BM Air Pilot Quiz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
