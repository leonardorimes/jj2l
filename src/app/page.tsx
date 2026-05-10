import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Cta />
      <Footer />
    </main>
  );
}
