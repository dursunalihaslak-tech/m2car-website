const cars = [
  {
    name: "PEUGEOT 3008",
    category: "SUV",
    transmission: "OTOMATİK",
    fuel: "DİZEL",
  },
  {
    name: "RENAULT CLIO",
    category: "EKONOMİK",
    transmission: "OTOMATİK",
    fuel: "BENZİN",
  },
  {
    name: "FIAT EGEA",
    category: "SEDAN",
    transmission: "MANUEL",
    fuel: "DİZEL",
  },
];

function CarIcon() {
  return (
    <svg
      viewBox="0 0 64 32"
      className="h-20 w-36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 22h48l-4-9a5 5 0 0 0-4.6-3H22a6 6 0 0 0-4.8 2.4L10 22Z" />
      <path d="M17 13h31M13 22v4M52 22v4" />
      <circle cx="18" cy="25" r="4" />
      <circle cx="47" cy="25" r="4" />
      <path d="M5 22h5M56 22h3" />
    </svg>
  );
}

export default function Fleet() {
  return (
    <section
      id="filo"
      className="bg-black px-4 py-12 text-white md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-red-500">
              M2CAR
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              ARAÇ FİLOMUZ
            </h2>

            <div className="mt-4 h-0.5 w-12 bg-red-600" />
          </div>

          <p className="max-w-md text-xs leading-5 text-zinc-400 md:text-right">
            Bakımlı, temiz ve konforlu araç seçeneklerimiz hakkında bilgi almak
            için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.name}
              className="group overflow-hidden border border-white/10 bg-[#08090b] transition duration-300 hover:-translate-y-1 hover:border-red-600/70"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#15161a] to-[#050506] text-red-600">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.13),transparent_65%)]" />
                <div className="relative transition duration-300 group-hover:scale-105">
                  <CarIcon />
                </div>
              </div>

              <div className="p-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-red-500">
                  M2CAR FİLO
                </p>

                <h3 className="mt-2 text-base font-extrabold tracking-wide">
                  {car.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[car.category, car.transmission, car.fuel].map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/905336027805?text=${encodeURIComponent(
                    `${car.name} hakkında bilgi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] font-bold tracking-wide text-white transition hover:text-red-500"
                >
                  WHATSAPP İLE BİLGİ AL
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}