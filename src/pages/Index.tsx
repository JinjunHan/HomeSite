import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-white/30 selection:text-white flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <FeaturedVideoSection />
        <PhilosophySection />
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
