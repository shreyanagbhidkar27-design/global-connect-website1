import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import creativeWorkshop from '@/assets/creative-workshop.jpg';
import creativityProgram from '@/assets/creativity-program.jpg';
import youthEntrepreneurship from '@/assets/youth-entrepreneurship.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      title: t.programs.artWorkshop.title,
      description: t.programs.artWorkshop.description,
      image: creativeWorkshop,
    },
    {
      title: t.programs.innovationLabs.title,
      description: t.programs.innovationLabs.description,
      image: creativityProgram,
    },
    {
      title: t.programs.entrepreneurship.title,
      description: t.programs.entrepreneurship.description,
      image: youthEntrepreneurship,
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.programs.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.programs.subtitle}
          </p>
        </div>

        {/* Programs Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {programs.map((program, index) => (
              <CarouselItem key={program.title} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="group relative bg-card rounded-2xl overflow-hidden card-elevated hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto text-primary font-semibold hover:bg-transparent hover:text-primary/80">
                      {t.hero.learnMore}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
            <CarouselNext className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
          </div>
        </Carousel>

        {/* Vision Banner */}
        <div className="mt-16 p-8 rounded-2xl gradient-bg-primary text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary-foreground">
            {t.programs.kalamVision}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
