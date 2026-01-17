import { useLanguage } from '@/context/LanguageContext';
import { Calendar, MapPin } from 'lucide-react';
import event1 from '@/assets/event1.jpg';
import event2 from '@/assets/event2.jpg';
import event3 from '@/assets/event3.jpg';
import event4 from '@/assets/event4.jpg';

const Events = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t.events.event1.title,
      date: t.events.event1.date,
      location: t.events.event1.location,
      image: event1,
    },
    {
      title: t.events.event2.title,
      date: t.events.event2.date,
      location: t.events.event2.location,
      image: event2,
    },
    {
      title: t.events.event3.title,
      date: t.events.event3.date,
      location: t.events.event3.location,
      image: event3,
    },
    {
      title: t.events.event4.title,
      date: t.events.event4.date,
      location: t.events.event4.location,
      image: event4,
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.events.title}
          </h2>
          <p className="text-xl text-primary font-semibold">
            {t.events.past}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden card-elevated hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Event Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Event Details */}
              <div className="p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
