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
  metadataBase: new URL("https://www.m2car.com.tr"),

  title: {
    default:
      "M2Car Araç Kiralama | Beylikdüzü Rent A Car | Günlük ve Aylık Araç Kiralama",
    template: "%s | M2Car Araç Kiralama",
  },

  description:
    "M2Car Araç Kiralama, Beylikdüzü'nde günlük, haftalık ve aylık rent a car hizmeti sunar. Ekonomik, SUV ve otomatik araç seçenekleri için hemen iletişime geçin.",

  keywords: [
    "M2Car Araç Kiralama",
    "Beylikdüzü araç kiralama",
    "Beylikdüzü rent a car",
    "Rent A Car Beylikdüzü",
    "İstanbul araç kiralama",
    "Günlük araç kiralama",
    "Aylık araç kiralama",
    "Otomatik araç kiralama",
    "SUV araç kiralama",
    "Ekonomik araç kiralama",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "M2Car Araç Kiralama | Beylikdüzü Rent A Car",
    description:
      "Beylikdüzü'nde güvenilir günlük, haftalık ve aylık araç kiralama. M2Car ile hızlı rezervasyon ve uygun fiyatlı rent a car hizmeti.",
    url: "https://www.m2car.com.tr",
    siteName: "M2Car Araç Kiralama",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "M2Car Araç Kiralama Beylikdüzü Rent A Car",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "M2Car Araç Kiralama | Beylikdüzü Rent A Car",
    description:
      "Beylikdüzü'nde günlük, haftalık ve aylık araç kiralama hizmeti.",
    images: ["/logo.png"],
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