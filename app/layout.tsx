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
    default:
      "M2Car Araç Kiralama | Beylikdüzü Rent A Car | Günlük ve Aylık Araç Kiralama",
    template: "%s | M2Car Araç Kiralama",
  },
  description:
    "M2Car Araç Kiralama, Beylikdüzü ve çevresinde günlük, haftalık ve aylık araç kiralama hizmeti sunar. Ekonomik, SUV ve otomatik araç seçenekleriyle uygun fiyat ve hızlı rezervasyon imkanı.",
  keywords: [
    "M2Car Araç Kiralama",
    "Beylikdüzü araç kiralama",
    "Beylikdüzü rent a car",
    "Rent A Car Beylikdüzü",
    "İstanbul araç kiralama",
    "Günlük araç kiralama",
    "Haftalık araç kiralama",
    "Aylık araç kiralama",
    "Otomatik araç kiralama",
    "SUV araç kiralama",
    "Ekonomik araç kiralama",
    "Peugeot 3008 kiralama",
    "Renault Clio kiralama",
    "Fiat Egea kiralama",
    "Dacia Sandero kiralama",
  ],
  openGraph: {
    title:
      "M2Car Araç Kiralama | Beylikdüzü Rent A Car",
    description:
      "Beylikdüzü'nde günlük, haftalık ve aylık araç kiralama. Ekonomik, SUV ve otomatik araç seçenekleriyle hızlı rezervasyon.",
    locale: "tr_TR",
    type: "website",
  },
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