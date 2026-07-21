import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gowtham Revanur — AI Governance & IT Risk",
  description:
    "M.S. Computer Science at Georgia State University · Hagan Scholar. AI Governance, IT Risk & GRC, and security engineering. Building the controls that let organizations trust the intelligence they deploy.",
  openGraph: {
    title: "Gowtham Revanur — AI Governance & IT Risk",
    description:
      "AI Governance, IT Risk & GRC, security engineering. GSU M.S. (GPA 3.90) · Hagan Scholar · drafting AI governance frameworks for the financial markets at CDSL.",
    siteName: "Gowtham Revanur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowtham Revanur — AI Governance & IT Risk",
    description: "AI Governance · IT Risk & GRC · Security Engineering · GSU M.S. · Hagan Scholar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
