export default function Hero() {
  return (
    <section id="ana-sayfa" className="bg-black">
      {/* Masaüstü */}
      <img
        src="/images/hero-desktop.png"
        alt="M2Car"
        className="hidden w-full md:block"
      />

      {/* Mobil */}
      <img
        src="/images/hero-mobile.png"
        alt="M2Car"
        className="block w-full md:hidden"
      />
    </section>
  );
}