const services = [
  {
    title: "GÜNLÜK",
    description: "ARAÇ KİRALAMA",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
        <path d="M8 13h3M8 17h5" />
      </svg>
    ),
  },
  {
    title: "HAFTALIK",
    description: "ARAÇ KİRALAMA",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
        <path d="m8 15 2 2 5-5" />
      </svg>
    ),
  },
  {
    title: "AYLIK",
    description: "ARAÇ KİRALAMA",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
        <path d="M8 13h2M14 13h2M8 17h2M14 17h2" />
      </svg>
    ),
  },
  {
    title: "EKONOMİK",
    description: "ARAÇ KİRALAMA",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="m5 15 2-6h10l2 6" />
        <path d="M3 15h18v4H3zM6 19v2M18 19v2" />
      </svg>
    ),
  },
  {
    title: "OTOMATİK VİTES",
    description: "ARAÇLAR",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M8 3h8v18H8zM8 8h8M8 14h8M12 3v18" />
      </svg>
    ),
  },
  {
    title: "KURUMSAL",
    description: "ARAÇ KİRALAMA",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 21V7h16v14M8 7V3h8v4" />
        <path d="M8 11h2M14 11h2M8 15h2M14 15h2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="hizmetlerimiz"
      className="bg-black px-4 py-4 md:px-6"
    >
      <div className="mx-auto max-w-7xl overflow-hidden border border-white/10 bg-[#090a0c]">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[230px_repeat(6,minmax(0,1fr))]">

          {/* Başlık */}
          <div className="col-span-2 flex min-h-[108px] flex-col justify-center border-b border-white/10 px-6 md:col-span-3 xl:col-span-1 xl:border-b-0 xl:border-r">
            <h2 className="text-lg font-semibold tracking-wide text-white md:text-xl">
              HİZMETLERİMİZ
            </h2>

            <div className="mt-3 h-[2px] w-11 bg-red-600" />
          </div>

          {/* Hizmetler */}
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`
                group flex min-h-[108px] flex-col items-center justify-center
                border-white/10 px-3 py-4 text-center
                transition duration-300 hover:bg-white/[0.035]
                ${index % 2 === 0 ? "border-r" : ""}
                ${index < 4 ? "border-b" : ""}
                md:border-r md:last:border-r-0
                xl:border-b-0 xl:border-r xl:last:border-r-0
              `}
            >
              <div className="mb-2.5 h-7 w-7 text-red-600 transition group-hover:-translate-y-0.5 [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-none [&>svg]:stroke-current [&>svg]:stroke-[1.7] [&>svg]:stroke-linecap-round [&>svg]:stroke-linejoin-round">
                {service.icon}
              </div>

              <h3 className="text-[11px] font-bold tracking-[0.07em] text-white">
                {service.title}
              </h3>

              <p className="mt-1 text-[9px] font-medium tracking-[0.05em] text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}