import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashwin Satvi — Computer Engineering Portfolio",
  description:
    "Personal portfolio of Ashwin Satvi, B.Tech Computer Engineering student at VJTI Mumbai. Explore projects in full-stack development, DevOps, computer vision, and machine learning.",
  keywords: [
    "Ashwin Satvi",
    "VJTI",
    "Computer Engineering",
    "Portfolio",
    "Full Stack Developer",
    "DevOps",
    "Machine Learning",
    "Computer Vision",
  ],
  authors: [{ name: "Ashwin Satvi" }],
  openGraph: {
    title: "Ashwin Satvi — Computer Engineering Portfolio",
    description:
      "B.Tech Computer Engineering student at VJTI Mumbai. Full-stack development, DevOps, and computer vision.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
