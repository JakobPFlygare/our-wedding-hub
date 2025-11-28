import { Heart } from "lucide-react";

const OurStory = () => {
  return (
    <section className="py-24 px-6 bg-ivory">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4">
          Our Journey
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
          Our Story
        </h2>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-24 bg-sage-light" />
          <Heart className="w-5 h-5 text-blush-dark fill-blush" />
          <div className="h-px w-24 bg-sage-light" />
        </div>

        <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
          <p>
            We first met on a rainy autumn day at a small coffee shop in San Francisco. 
            What started as a chance encounter over a spilled latte turned into hours of 
            conversation that felt like minutes.
          </p>
          
          <p>
            Three years, countless adventures, and one very memorable trip to Paris later, 
            James proposed at the same coffee shop where it all began. Emma said yes before 
            he could even finish the question.
          </p>
          
          <p className="font-display text-xl text-charcoal italic">
            "Some love stories are meant to be told forever."
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          <div className="text-center">
            <p className="font-display text-3xl text-sage">2021</p>
            <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">First Met</p>
          </div>
          <div className="h-16 w-px bg-sage-light" />
          <div className="text-center">
            <p className="font-display text-3xl text-sage">2024</p>
            <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Engaged</p>
          </div>
          <div className="h-16 w-px bg-sage-light" />
          <div className="text-center">
            <p className="font-display text-3xl text-sage">2025</p>
            <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Forever</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
