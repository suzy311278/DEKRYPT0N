import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const Testimonials = () => {
  const satisfaction = useCounterAnimation({ end: 97, duration: 2000 });
  const attendees = useCounterAnimation({ end: 4200, duration: 2500 });
  const organizations = useCounterAnimation({ end: 300, duration: 2000 });
  const rating = useCounterAnimation({ end: 4.9, duration: 2000, decimals: 1 });

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "CISO",
      company: "Reliance Digital",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
      rating: 5,
      text: "DEKRIPT0N is the DEFCON of Asia. The quality of speakers, the hands-on workshops, and the networking opportunities are unmatched. Our entire security team attends every year.",
    },
    {
      name: "James Morrison",
      role: "Security Researcher",
      company: "Google Project Zero",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      rating: 5,
      text: "I've spoken at BlackHat, RSA, and DEFCON — DEKRIPT0N stands shoulder to shoulder with them. The community energy and the focus on practical skills make it special.",
    },
    {
      name: "Dr. Meera Iyer",
      role: "Director, National CERT",
      company: "Government of India",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
      rating: 5,
      text: "DEKRIPT0N plays a crucial role in strengthening India's cybersecurity ecosystem. The policy track brings together stakeholders who shape our national cyber defense strategy.",
    },
    {
      name: "Vikram Desai",
      role: "Founder & CEO",
      company: "CyberShield Ventures",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
      rating: 5,
      text: "We launched our startup at DEKRIPT0N's Innovation Challenge and secured $2M in funding within 3 months. The investor network here is phenomenal for cybersecurity startups.",
    },
  ];

  const sponsors = [
    "CROWDSTRIKE",
    "PALO ALTO",
    "MANDIANT",
    "TATA CYBER",
    "INFOSYS",
    "MICROSOFT",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Past Attendees
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            What Attendees <span className="text-primary">Say</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-primary/10 bg-card hover:border-primary/25 transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm text-foreground/70 mb-6 leading-relaxed font-mono">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sponsors */}
        <div className="text-center mb-16">
          <p className="text-xs text-muted-foreground mb-6 font-mono tracking-widest uppercase">
            Powered by industry-leading sponsors
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {sponsors.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-4 px-3 border border-primary/8 bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-xs text-muted-foreground/50 font-mono tracking-widest hover:text-primary/60 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
          <div className="bg-background p-6 text-center">
            <p ref={satisfaction.ref} className="text-3xl font-black text-primary mb-1 font-mono tabular-nums">
              {satisfaction.count}%
            </p>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Would Attend Again</p>
          </div>
          <div className="bg-background p-6 text-center">
            <p ref={attendees.ref} className="text-3xl font-black text-primary mb-1 font-mono tabular-nums">
              {attendees.count}+
            </p>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Attendees Last Year</p>
          </div>
          <div className="bg-background p-6 text-center">
            <p ref={organizations.ref} className="text-3xl font-black text-primary mb-1 font-mono tabular-nums">
              {organizations.count}+
            </p>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Organizations</p>
          </div>
          <div className="bg-background p-6 text-center">
            <p ref={rating.ref} className="text-3xl font-black text-primary mb-1 font-mono tabular-nums">
              {rating.count}/5
            </p>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
