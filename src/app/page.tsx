import Script from 'next/script';
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
      <Script 
        src="https://widgets.leadconnectorhq.com/loader.js" 
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="6a023c30d31db45000223539" 
        data-source="WEB_USER"
        strategy="lazyOnload"
      />
    </main>
  );
}
