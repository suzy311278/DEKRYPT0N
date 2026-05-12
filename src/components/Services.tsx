import { Shield, Search, Lock, FileCode, Cloud, AlertTriangle, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

const keynotes = [
  {
    icon: Shield,
    name: "Dr. Kavitha Raman",
    title: "CISO, National Cyber Command",
    topic: "The Future of Nation-State Cyber Warfare",
    tag: "KEYNOTE",
    time: "Day 1 · 10:00 AM",
  },
  {
    icon: Lock,
    name: "Marcus Chen",
    title: "Head of Security Research, ZeroTrust Labs",
    topic: "Breaking Zero-Day: Live Exploit Demonstration",
    tag: "LIVE DEMO",
    time: "Day 1 · 2:00 PM",
  },
  {
    icon: Search,
    name: "Aisha Khalid",
    title: "Threat Intelligence Director, CyberArk",
    topic: "AI-Powered Threat Hunting in 2026",
    tag: "WORKSHOP",
    time: "Day 2 · 9:00 AM",
  },
  {
    icon: FileCode,
    name: "Raj Patel",
    title: "Founder, OT Shield Alliance",
    topic: "Securing Critical Infrastructure: Lessons from the Field",
    tag: "PANEL",
    time: "Day 2 · 11:30 AM",
  },
  {
    icon: Cloud,
    name: "Elena Volkov",
    title: "Cloud Security Architect, AWS",
    topic: "Cloud-Native Security: Beyond the Perimeter",
    tag: "KEYNOTE",
    time: "Day 2 · 3:00 PM",
  },
  {
    icon: AlertTriangle,
    name: "David Okonkwo",
    title: "Red Team Lead, Mandiant",
    topic: "Red vs Blue: Advanced Adversary Simulation",
    tag: "CTF",
    time: "Day 3 · 10:00 AM",
  },
];

const Services = () => {
  return (
    <section id="speakers" className="py-24 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px]">
        <div className="mb-16">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Featured Speakers
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            World-Class <span className="text-primary">Security Experts</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl font-mono">
            120+ speakers from leading organizations — hackers, researchers, CISOs, and policymakers on one stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {keynotes.map((speaker, index) => (
            <Card
              key={index}
              className="group relative bg-card border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/0 group-hover:bg-primary/5 blur-3xl transition-all duration-500" />

              <div className="relative p-6">
                {/* Tag + Time header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-primary bg-primary/10 px-2.5 py-1">
                    {speaker.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                    <Mic className="h-3 w-3 text-primary/60" />
                    {speaker.time}
                  </div>
                </div>

                {/* Speaker info */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <speaker.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold mb-0.5 text-foreground group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-mono mb-3 truncate">
                      {speaker.title}
                    </p>
                  </div>
                </div>

                {/* Topic */}
                <div className="mt-4 pt-4 border-t border-primary/8">
                  <p className="text-sm text-foreground/70 leading-relaxed font-mono">
                    {speaker.topic}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
