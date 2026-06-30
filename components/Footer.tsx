export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050506] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-9 md:grid-cols-3">
          {/* Marka */}
          <div>
            <div className="text-2xl font-extrabold leading-none">
              <span className="text-red-600">M2</span>
              <span className="text-white">CAR</span>
            </div>

            <p className="mt-2 text-[9px] font-semibold tracking-[0.35em] text-zinc-400">
              ARAÇ KİRALAMA
            </p>

            <p className="mt-5 max-w-sm text-xs leading-6 text-zinc-500">
              Günlük, haftalık ve aylık araç kiralama ihtiyaçlarınızda bakımlı
              araçlarımız ve güvenilir hizmet anlayışımızla yanınızdayız.
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.18em]">
              İLETİŞİM
            </h3>

            <div className="mt-4 h-0.5 w-10 bg-red-600" />

            <div className="mt-5 space-y-3 text-xs text-zinc-400">
              <a
                href="tel:08508888098"
                className="block transition hover:text-red-500"
              >
                0850 888 80 98
              </a>

              <a
                href="https://wa.me/905336027805"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-red-500"
              >
                0533 602 78 05
              </a>

              <p className="max-w-xs leading-6">
                Atatürk Bulvarı No:3
                <br />
                Beycity Çarşı No:117
              </p>
            </div>
          </div>

          {/* Hızlı bağlantılar */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.18em]">
              HIZLI BAĞLANTILAR
            </h3>

            <div className="mt-4 h-0.5 w-10 bg-red-600" />

            <nav className="mt-5 grid gap-3 text-xs text-zinc-400">
              <a href="#" className="transition hover:text-red-500">
                Ana Sayfa
              </a>

              <a
                href="#hizmetlerimiz"
                className="transition hover:text-red-500"
              >
                Hizmetlerimiz
              </a>

              <a href="#filo" className="transition hover:text-red-500">
                Araç Filomuz
              </a>

              <a href="#bolgeler" className="transition hover:text-red-500">
                Kiralama Bölgeleri
              </a>

              <a href="#iletisim" className="transition hover:text-red-500">
                İletişim
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 M2Car Araç Kiralama. Tüm hakları saklıdır.</p>

          <p>7 gün 24 saat hizmetinizdeyiz.</p>
        </div>
      </div>
    </footer>
  );
}