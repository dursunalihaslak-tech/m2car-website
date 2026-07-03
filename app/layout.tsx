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
    "M2Car Araç Kiralama, Beylikdüzü'nde günlük, haftalık ve aylık rent a car hizmeti sunar. Kaskolu, bakımlı ve yeni model araç seçenekleri için hemen iletişime geçin.",

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "M2Car Araç Kiralama | Beylikdüzü Rent A Car",
    description:
      "Beylikdüzü'nde güvenilir günlük, haftalık ve aylık araç kiralama. Kaskolu, bakımlı ve yeni model araçlarla hızlı rezervasyon.",
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
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "M2Car Araç Kiralama",
    url: "https://www.m2car.com.tr",
    image: "https://www.m2car.com.tr/logo.png",
    telephone: "+90 850 888 80 98",
    priceRange: "₺₺",
    openingHours: "Mo-Su 08:00-20:00",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "BEYCİTY ÇARŞI, Cumhuriyet Mahallesi, Atatürk Bulvarı No:3 C117",
      addressLocality: "Beylikdüzü",
      addressRegion: "İstanbul",
      postalCode: "34519",
      addressCountry: "TR",
    },
    areaServed: [
      "Beylikdüzü",
      "Esenyurt",
      "Avcılar",
      "Büyükçekmece",
      "İstanbul",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Günlük Araç Kiralama",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haftalık Araç Kiralama",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aylık Araç Kiralama",
        },
      },
    ],
  };

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </body>
    </html>
  );
}