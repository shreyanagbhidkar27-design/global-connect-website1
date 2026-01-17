import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Innovation and Creativity" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            {t.hero.india}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-primary-foreground/90 mb-4">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-bg-primary text-primary-foreground border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow-effect"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {t.hero.learnMore}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <span className="text-sm mb-2">{t.hero.learnMore}</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
