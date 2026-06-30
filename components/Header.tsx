const menuItems = [
  { label: "ANA SAYFA", href: "#ana-sayfa" },
  { label: "HİZMETLERİMİZ", href: "#hizmetlerimiz" },
  { label: "ARAÇ FİLOMUZ", href: "#filo" },
  { label: "KİRALAMA BÖLGELERİ", href: "#bolgeler" },
  { label: "HAKKIMIZDA", href: "#hakkimizda" },
  { label: "İLETİŞİM", href: "#iletisim" },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.4 8.2c.5 3.1 2.3 5 5.5 6.2" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center px-5 lg:px-8">
        <a href="#ana-sayfa" className="shrink-0">
          <div className="flex items-center text-[30px] font-black leading-none tracking-[-2px]">
            <span className="text-red-600">M2</span>
            <span className="text-white">CAR</span>
          </div>

          <div className="mt-1 text-[8px] font-semibold tracking-[5px] text-zinc-300">
            ARAÇ KİRALAMA
          </div>
        </a>

        <nav className="ml-auto hidden items-center gap-7 xl:flex">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-3 text-[10px] font-bold text-zinc-200 transition hover:text-red-500"
            >
              {item.label}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-red-600" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="tel:08508888098"
          className="ml-auto hidden items-center gap-3 lg:flex xl:ml-8"
        >
          <span className="text-red-600">
            <PhoneIcon />
          </span>

          <span>
            <strong className="block text-[14px] leading-4 text-white">
              0850 888 80 98
            </strong>
            <small className="mt-1 block text-[9px] text-zinc-300">
              7/24 Destek Hattı
            </small>
          </span>
        </a>

        <a
          href="https://wa.me/905336027805"
          target="_blank"
          rel="noreferrer"
          className="ml-5 hidden h-[42px] items-center gap-2 rounded bg-red-600 px-5 text-[11px] font-extrabold text-white transition hover:bg-red-700 sm:flex"
        >
          <WhatsAppIcon />
          WHATSAPP
        </a>

        <details className="relative ml-auto xl:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-white/20 text-xl text-white">
            ☰
          </summary>

          <div className="absolute right-0 top-12 w-64 border border-white/10 bg-[#080808] p-3 shadow-2xl">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block border-b border-white/10 px-3 py-3 text-[11px] font-bold text-white last:border-0 hover:text-red-500"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:08508888098"
              className="mt-3 block bg-red-600 px-3 py-3 text-center text-xs font-bold text-white"
            >
              0850 888 80 98
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}