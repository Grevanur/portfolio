import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gowtham Revanur",
  description: "Graduate CS student at Georgia State University — cybersecurity, embedded systems, and real-time security engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] text-[#ededed] font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
