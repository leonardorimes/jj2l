import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Gallery from '@/components/Gallery';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Cta />
      <Footer />
    </main>
  );
}
