import { MapPin, Clock, Calendar } from "lucide-react";

const EventDetails = () => {
  const events = [
    {
      title: "Ceremony",
      time: "4:00 PM",
      location: "The Garden Chapel",
      address: "123 Vineyard Lane, Napa Valley",
      description: "Join us as we exchange vows in the beautiful garden chapel surrounded by roses and olive trees.",
    },
    {
      title: "Reception",
      time: "6:00 PM",
      location: "The Grand Ballroom",
      address: "123 Vineyard Lane, Napa Valley",
      description: "Dinner, dancing, and celebration under the stars on the terrace overlooking the vineyard.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Save the Date
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Wedding Details
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-sage-light" />
            <Calendar className="w-5 h-5 text-sage" />
            <div className="h-px w-24 bg-sage-light" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="bg-ivory/80 backdrop-blur-sm rounded-lg p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <h3 className="font-display text-2xl text-charcoal mb-4">
                {event.title}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-sage" />
                  <span className="font-body text-lg">{event.time}</span>
                </div>
                
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-sage mt-1" />
                  <div>
                    <p className="font-body text-lg">{event.location}</p>
                    <p className="font-body text-sm">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <p className="font-body text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
