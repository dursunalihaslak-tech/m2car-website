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
  title: {
    default: "M2Car | Araç Kiralama",
    template: "%s | M2Car",
  },
  description:
    "Beylikdüzü'nde günlük, haftalık ve aylık araç kiralama hizmeti.",
  keywords: [
    "M2Car",
    "Araç Kiralama",
    "Beylikdüzü Araç Kiralama",
    "İstanbul Araç Kiralama",
    "Günlük Araç Kiralama",
    "Haftalık Araç Kiralama",
    "Aylık Araç Kiralama",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}