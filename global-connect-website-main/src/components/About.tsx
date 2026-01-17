import { useLanguage } from '@/context/LanguageContext';
import { Heart, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t.values.passion.title,
      description: t.values.passion.description,
      color: 'primary',
    },
    {
      icon: TrendingUp,
      title: t.values.impact.title,
      description: t.values.impact.description,
      color: 'secondary',
    },
    {
      icon: Users,
      title: t.values.community.title,
      description: t.values.community.description,
      color: 'accent',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t.about.description}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description2}
          </p>
          <div className="mt-10 p-6 rounded-2xl gradient-bg-secondary">
            <p className="text-xl sm:text-2xl font-bold text-secondary-foreground">
              {t.about.tagline}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 card-elevated hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                value.color === 'primary' ? 'gradient-bg-primary' :
                value.color === 'secondary' ? 'gradient-bg-secondary' :
                'bg-accent'
              }`}>
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
