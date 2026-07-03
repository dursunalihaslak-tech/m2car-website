const contactItems = [
  {
    title: "SABİT HAT",
    value: "0850 888 80 98",
    href: "tel:08508888098",
    button: "HEMEN ARA →",
    icon: "☎",
  },
  {
    title: "WHATSAPP",
    value: "0533 602 78 05",
    href: "https://wa.me/905336027805",
    button: "MESAJ GÖNDER →",
    icon: "💬",
  },
  {
    title: "ADRES",
    value: `BEYCİTY ÇARŞI
Cumhuriyet Mahallesi
Atatürk Bulvarı No:3 C117
34519 Beylikdüzü / İstanbul`,
    href: "https://maps.app.goo.gl/dNQdSVpga5prj2vA7",
    button: "HARİTADA GÖR →",
    icon: "📍",
  },
];

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-black px-4 py-5 text-white md:px-6 md:py-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5">
          <p className="mb-2 text-[10px] font-bold tracking-[0.3em] text-red-500">
            BİZE ULAŞIN
          </p>

          <h2 className="text-2xl font-extrabold tracking-wide">
            İLETİŞİM
          </h2>

          <div className="mt-3 h-[2px] w-14 bg-red-600" />
        </div>

        <div className="grid overflow-hidden rounded-md border border-white/10 bg-[#090a0c] md:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.title === "SABİT HAT" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border-b border-white/10 px-6 py-6 transition hover:bg-white/[0.03] md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-red-600/40 text-xl text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
                {item.icon}
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] text-red-500">
                  {item.title}
                </p>

                <p className="mt-2 whitespace-pre-line text-base font-bold leading-6 text-white">
                  {item.value}
                </p>

                <p className="mt-3 text-xs font-semibold text-zinc-500 transition group-hover:text-red-500">
                  {item.button}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
          <iframe
            title="M2Car Araç Kiralama Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.6048199542424!2d28.640472075858707!3d41.012021971349974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f31e872e13d%3A0x15a054b87736fa7e!2zTTJDYXIgQXJhw6cgS2lyYWxhbWEtQmV5bGlrZMO8esO8!5e0!3m2!1str!2str!4v1783078237971!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}