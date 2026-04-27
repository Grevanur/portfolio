import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Gowtham Revanur",
  description:
    "Graduate CS student at Georgia State University specializing in cybersecurity, embedded systems, and real-time security engineering. Open to roles starting May 2027.",
  openGraph: {
    title: "Gowtham Revanur — Security Engineer & Embedded Systems Developer",
    description:
      "Graduate CS student at GSU (GPA 3.90) · Hagan Scholar · Building safety-critical firmware, cloud-native threat detection, and ML-based intrusion systems.",
    url: "https://portfolio-grevanur.vercel.app",
    siteName: "Gowtham Revanur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowtham Revanur — Security Engineer & Embedded Systems Developer",
    description:
      "Graduate CS student at GSU · Hagan Scholar · Security Engineering · Embedded Systems · Real-Time Detection",
  },
  metadataBase: new URL("https://portfolio-grevanur.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] text-[#ededed] font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
