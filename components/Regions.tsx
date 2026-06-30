"use client";

import { useEffect, useState } from "react";

const regions = [
  {
    title: "BEYLİKDÜZÜ",
    image: "/images/m2car-bolge-gorselleri/beylikduzu.jpg",
    description:
      "Cumhuriyet, Barış, Kavaklı ve tüm Beylikdüzü bölgesine hizmet veriyoruz.",
  },
  {
    title: "ESENYURT",
    image: "/images/m2car-bolge-gorselleri/esenyurt.jpg",
    description:
      "Esenyurt merkez ve çevresine günlük, haftalık ve aylık kiralama.",
  },
  {
    title: "AVCILAR",
    image: "/images/m2car-bolge-gorselleri/avcilar.jpg",
    description: "Avcılar ve Üniversite bölgesine hızlı araç teslimatı.",
  },
  {
    title: "TÜYAP",
    image: "/images/m2car-bolge-gorselleri/tuyap.jpg",
    description:
      "Fuar ve organizasyonlarınız için TÜYAP’a hızlı teslim imkânı.",
  },
  {
    title: "MARMARA PARK",
    image: "/images/m2car-bolge-gorselleri/marmara-park.jpg",
    description:
      "Marmara Park AVM yakınında hızlı araç teslim hizmeti.",
  },
];

const cars = [
  {
    name: "FIAT EGEA",
    image: "/cars/fiat-egea.png",
    details: "Sedan • Dizel • Manuel",
  },
  {
    name: "RENAULT TALİANT",
    image: "/cars/renault-taliant.png",
    details: "Sedan • Benzin • Otomatik",
  },
  {
    name: "OPEL CORSA",
    image: "/cars/opel-corsa.png",
    details: "Hatchback • Benzin • Otomatik",
  },
  {
    name: "DACIA SANDERO",
    image: "/cars/dacia-sandero.png",
    details: "Hatchback • Benzin • Otomatik",
  },
];

export default function Regions() {
  const [activeCar, setActiveCar] = useState(0);

  const nextCar = () => {
    setActiveCar((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setActiveCar((prev) => (prev - 1 + cars.length) % cars.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCar((prev) => (prev + 1) % cars.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const car = cars[activeCar];

  return (
    <section className="bg-black px-3 py-4 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-4 xl:grid-cols-[minmax(0,2.25fr)_minmax(310px,0.9fr)]">
        <div id="bolgeler">
          <div className="mb-4">
            <h2 className="text-[18px] font-semibold tracking-wide text-white md:text-2xl">
              HİZMET VERDİĞİMİZ BÖLGELER
            </h2>
            <div className="mt-2 h-[2px] w-11 bg-red-600" />
          </div>

          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
            {regions.map((region) => (
              <article
                key={region.title}
                className="group overflow-hidden border border-white/10 bg-[#0a0b0d] transition duration-300 hover:-translate-y-1 hover:border-red-600/70"
              >
                <div className="h-20 overflow-hidden bg-[#111214] md:h-24">
                  <img
                    src={region.image}
                    alt={`${region.title} araç kiralama`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-2.5 md:p-3.5">
                  <h3 className="text-[12px] font-extrabold tracking-wide text-white md:text-[13px]">
                    {region.title}
                  </h3>

                  <p className="mt-0.5 text-[8px] font-bold tracking-wide text-red-500 md:text-[9px]">
                    ARAÇ KİRALAMA
                  </p>

                  <p className="mt-2 min-h-[48px] text-[9px] leading-[15px] text-zinc-400 md:mt-3 md:text-[10px] md:leading-[17px]">
                    {region.description}
                  </p>

                  <a
                    href="#iletisim"
                    className="mt-2 inline-block text-[8px] font-bold tracking-wide text-red-500 transition hover:text-white md:text-[9px]"
                  >
                    DETAYLI BİLGİ →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside
          id="filo"
          className="flex min-h-[285px] flex-col border border-white/10 bg-[#090a0c] md:min-h-[315px]"
        >
          <div className="border-b border-white/10 px-4 py-3 md:px-5 md:py-4">
            <h2 className="text-[20px] font-semibold tracking-wide text-white md:text-xl">
              ARAÇ FİLOMUZ
            </h2>
            <div className="mt-2 h-[2px] w-11 bg-red-600 md:mt-3" />
          </div>

          <div className="relative flex h-[175px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#17181b] to-black px-8 py-3 md:h-[205px] md:px-9 md:py-4">
            <button
              onClick={prevCar}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-4xl font-light text-white/80 transition hover:text-red-500 md:left-3"
              aria-label="Önceki araç"
            >
              ‹
            </button>

            <img
              src={car.image}
              alt={car.name}
              className="h-28 w-full object-contain drop-shadow-2xl transition duration-500 md:h-36"
            />

            <button
              onClick={nextCar}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-4xl font-light text-white/80 transition hover:text-red-500 md:right-3"
              aria-label="Sonraki araç"
            >
              ›
            </button>
          </div>

          <div className="border-t border-white/10 px-4 py-3 text-center md:px-5">
            <h3 className="text-sm font-extrabold tracking-wide text-white">
              {car.name}
            </h3>

            <p className="mt-1 text-[10px] text-zinc-400">{car.details}</p>

            <div className="mt-2.5 flex justify-center gap-1.5">
              {cars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCar(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    activeCar === index ? "bg-red-600" : "bg-zinc-600"
                  }`}
                  aria-label={`${index + 1}. aracı göster`}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}