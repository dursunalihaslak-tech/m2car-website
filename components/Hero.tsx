export default function Hero() {
  return (
    <>
      <section id="ana-sayfa" className="bg-black">
        {/* Masaüstü */}
        <img
          src="/images/hero-desktop.png"
          alt="M2Car Araç Kiralama Beylikdüzü"
          className="hidden w-full md:block"
        />

        {/* Mobil */}
        <img
          src="/images/hero-mobile.png"
          alt="M2Car Araç Kiralama Beylikdüzü"
          className="block w-full md:hidden"
        />
      </section>

      {/* SEO Tanıtım Alanı */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-12">

          <p className="mb-2 text-sm font-bold tracking-[0.3em] text-red-500">
            M2CAR ARAÇ KİRALAMA
          </p>

          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Beylikdüzü Araç Kiralama ve Rent A Car Hizmeti
          </h1>

          <div className="mt-5 h-1 w-16 bg-red-600"></div>

          <p className="mt-8 text-base leading-8 text-zinc-300">
            M2Car Araç Kiralama olarak Beylikdüzü ve İstanbul genelinde
            günlük, haftalık ve aylık araç kiralama hizmeti sunuyoruz.
            Yeni model, bakımlı, kaskolu ve full sigortalı araçlarımız ile
            güvenli ve konforlu ulaşım deneyimi sağlıyoruz.
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-300">
            Araç teslimlerini ofisimizden veya İstanbul Havalimanı ile
            Sabiha Gökçen Havalimanı'ndan hızlı şekilde gerçekleştirebiliyoruz.
            Ekonomik sınıf, sedan ve SUV araç seçeneklerimiz sayesinde
            bireysel ve kurumsal müşterilerimize profesyonel araç kiralama
            çözümleri sunuyoruz.
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-300">
            Şeffaf fiyat politikamız, güçlü müşteri memnuniyeti anlayışımız
            ve 7/24 destek hizmetimiz ile M2Car, Beylikdüzü rent a car
            sektöründe güvenilir ve kaliteli hizmet sunmayı hedeflemektedir.
          </p>

        </div>
      </section>
    </>
  );
}