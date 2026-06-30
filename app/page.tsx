import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Regions from "../components/Regions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Regions />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}