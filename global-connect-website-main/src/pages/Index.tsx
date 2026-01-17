import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Events from '@/components/Events';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <Events />
        <GetInvolved />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
