import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Handshake, Share2, ArrowRight } from 'lucide-react';
import SubmissionForm from './SubmissionForm';

type SubmissionType = 'volunteer' | 'program' | 'partner' | 'spread';

const GetInvolved = () => {
  const { t } = useLanguage();
  const [openForm, setOpenForm] = useState<SubmissionType | null>(null);

  const ways = [
    {
      icon: Users,
      title: t.getInvolved.volunteer.title,
      description: t.getInvolved.volunteer.description,
      cta: t.getInvolved.volunteer.cta,
      gradient: 'gradient-bg-primary',
      type: 'volunteer' as SubmissionType,
    },
    {
      icon: BookOpen,
      title: t.getInvolved.programs.title,
      description: t.getInvolved.programs.description,
      cta: t.getInvolved.programs.cta,
      gradient: 'gradient-bg-secondary',
      type: 'program' as SubmissionType,
    },
    {
      icon: Handshake,
      title: t.getInvolved.collaborate.title,
      description: t.getInvolved.collaborate.description,
      cta: t.getInvolved.collaborate.cta,
      gradient: 'gradient-bg-primary',
      type: 'partner' as SubmissionType,
    },
    {
      icon: Share2,
      title: t.getInvolved.spread.title,
      description: t.getInvolved.spread.description,
      cta: t.getInvolved.spread.cta,
      gradient: 'gradient-bg-secondary',
      type: 'spread' as SubmissionType,
    },
  ];

  const getFormTitle = (type: SubmissionType) => {
    switch (type) {
      case 'volunteer':
        return t.getInvolved.volunteer.title;
      case 'program':
        return t.getInvolved.programs.title;
      case 'partner':
        return t.getInvolved.collaborate.title;
      case 'spread':
        return t.getInvolved.spread.title;
    }
  };

  return (
    <section id="get-involved" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.getInvolved.title}
          </h2>
        </div>

        {/* Ways Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way) => (
            <div
              key={way.title}
              className="bg-card rounded-2xl p-6 card-elevated hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${way.gradient}`}>
                <way.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {way.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {way.description}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setOpenForm(way.type)}
              >
                {way.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Opportunities Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t.getInvolved.opportunities.title}
            </h3>
            <p className="text-muted-foreground">
              {t.getInvolved.opportunities.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.getInvolved.opportunities.items.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="text-center">
            <Button className="gradient-bg-primary text-primary-foreground border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {t.getInvolved.opportunities.viewAll}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Submission Form Modal */}
      {openForm && (
        <SubmissionForm
          isOpen={!!openForm}
          onClose={() => setOpenForm(null)}
          type={openForm}
          title={getFormTitle(openForm)}
        />
      )}
    </section>
  );
};

export default GetInvolved;
