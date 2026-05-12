import { Award, Users, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Hands-On Workshops",
    description:
      "40+ interactive workshops with live hacking labs, CTF challenges, and real-world attack simulations led by industry experts.",
  },
  {
    icon: Users,
    title: "Networking Hub",
    description:
      "Connect with 5,000+ CISOs, hackers, researchers, and security leaders. Build relationships that last beyond the conference.",
  },
  {
    icon: Award,
    title: "Cutting-Edge Research",
    description:
      "First-look at breakthrough security research, zero-day disclosures, and emerging threat landscapes from top researchers.",
  },
  {
    icon: TrendingUp,
    title: "Career Opportunities",
    description:
      "Exclusive career fair with 50+ top cybersecurity companies hiring. Resume reviews, mentorship sessions, and interview prep.",
  },
];

const WhyUs = () => {
  return (
    <section id="tracks" className="py-24 relative overflow-hidden bg-secondary/20 scanlines">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px]">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Why Attend
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            More Than a <span className="text-primary">Conference</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-mono">
            DEKRIPT0N is the cybersecurity industry's flagship gathering — where policies are shaped, vulnerabilities are disclosed, and the community comes together.
          </p>
        </div>

        {/* Mission statement */}
        <div className="max-w-3xl mx-auto mb-16 p-6 md:p-8 bg-card/60 backdrop-blur-sm border border-primary/15 text-center">
          <div className="text-[10px] text-primary font-mono tracking-widest uppercase mb-3">Mission</div>
          <p className="text-sm md:text-base text-foreground/70 font-mono leading-relaxed">
            To unite the global cybersecurity community — from ethical hackers to enterprise CISOs — for knowledge exchange, skill-building, and collective defense against evolving digital threats.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-primary/10 p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold mb-2 tracking-wide text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
          {[
            { label: "Expected Attendees", value: "5K+" },
            { label: "Speakers Confirmed", value: "120+" },
            { label: "Workshops Planned", value: "40+" },
            { label: "Countries", value: "45+" },
          ].map((stat, index) => (
            <div key={index} className="bg-background p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
