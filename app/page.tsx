import Script from "next/script";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Regions from "../components/Regions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "M2Car Araç Kiralama",
    url: "https://www.m2car.com.tr",
    telephone: "+90 850 888 80 98",
    image: "https://www.m2car.com.tr/logo.png",
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
      "İstanbul",
      "Avcılar",
      "Esenyurt",
      "Büyükçekmece",
    ],
    priceRange: "₺₺",
    openingHours: "Mo-Su 08:00-22:00",
    sameAs: [
      "https://www.m2car.com.tr"
    ],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-black text-white">
        <Header />
        <Hero />
        <Services />
        <Regions />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
}