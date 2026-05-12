import { Building, Factory, Wrench, Zap, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const tracks = [
  {
    icon: Shield,
    title: "Offensive Security",
    description:
      "Red teaming, penetration testing, exploit development, and advanced adversary tactics. Live CTF competitions with prizes worth $50K.",
  },
  {
    icon: Factory,
    title: "ICS / OT Security",
    description:
      "Industrial control systems, SCADA security, critical infrastructure defense, and IEC 62443 deep dives with hands-on labs.",
  },
  {
    icon: Wrench,
    title: "AppSec & DevSecOps",
    description:
      "Secure software development, CI/CD pipeline security, container hardening, and shift-left strategies for modern applications.",
  },
  {
    icon: Zap,
    title: "AI & ML Security",
    description:
      "AI-powered threat detection, adversarial machine learning, LLM security, and the future of autonomous cyber defense.",
  },
  {
    icon: Building,
    title: "Governance & Policy",
    description:
      "Cyber regulations, compliance frameworks, CISO roundtables, and shaping national cybersecurity policy — India and beyond.",
  },
  {
    icon: Award,
    title: "Startup & Innovation",
    description:
      "Cybersecurity startup pitches, VC panels, innovation showcases, and the DEKRIPT0N Startup Challenge with $100K in funding.",
  },
];

const Solutions = () => {
  return (
    <section id="agenda" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px]">
        <div className="mb-16">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Conference Tracks
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Six Specialized <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl font-mono">
            Deep-dive sessions covering every domain of modern cybersecurity, curated by industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="group bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <track.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                    3 Days
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-mono">
                  {track.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
