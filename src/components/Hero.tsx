import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import TerminalLogs from "@/components/TerminalLogs";
import { useState, useEffect } from "react";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const Hero = () => {
  const attendees = useCounterAnimation({ end: 5000, duration: 2500 });
  const speakers = useCounterAnimation({ end: 120, duration: 2500 });
  const countries = useCounterAnimation({ end: 45, duration: 2000 });
  const countdown = useCountdown(new Date("2026-10-15T09:00:00+05:30"));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 scanlines">
      <TerminalLogs />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.02]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow rounded-full blur-3xl opacity-40" />

      <div className="w-full relative z-10 px-3 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto">

        {/* ── Terminal window ── */}
        <div className="bg-card border border-primary/20 shadow-card overflow-hidden animate-slide-up w-full">

          {/* Title bar */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 bg-card border-b border-primary/15">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-foreground/20" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-foreground/10" />
            </div>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono tracking-wider">
              root@dekript0n:~
            </span>
            <div className="w-12 sm:w-16" />
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">

            {/* ── Split: Title left / Countdown right ── */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">

              {/* ═══ Left: Title block ═══ */}
              <div className="flex-1 min-w-0">
                {/* Command line */}
                <div className="text-[10px] sm:text-xs text-muted-foreground font-mono mb-4 overflow-x-auto">
                  <span className="text-primary">root@dekript0n</span><span className="text-foreground/40">:</span><span className="text-foreground/60">~</span><span className="text-primary">$</span> ./launch_conference.sh --2026
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-3 md:mb-5">
                  <span className="text-primary">DEKRIPT</span><span className="text-foreground">0</span><span className="text-primary">N</span>
                  <span className="terminal-cursor text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-1">_</span>
                </h1>

                <div className="text-xs sm:text-sm md:text-base font-mono text-foreground/50 tracking-[0.1em] sm:tracking-[0.15em] uppercase mb-5 md:mb-8">
                  Asia's Premier Cybersecurity Summit
                </div>

                {/* Status lines */}
                <div className="space-y-1 sm:space-y-1.5 font-mono text-[10px] sm:text-xs mb-6 md:mb-8">
                  <div className="text-muted-foreground">
                    <span className="text-primary">[OK]</span> Conference platform initialized
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">[OK]</span> 120+ speakers confirmed
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">[OK]</span> 40+ workshops loaded
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">[OK]</span> Registration gateway active
                  </div>
                </div>

                {/* Date & Venue */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-foreground/60">
                    <div className="w-1 h-3 sm:h-3.5 bg-primary" />
                    OCT 15–18, 2026
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-border" />
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-foreground/60">
                    <div className="w-1 h-3 sm:h-3.5 bg-primary" />
                    NEW DELHI, INDIA
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("register")}
                    className="h-11 sm:h-12 px-6 sm:px-8 shadow-glow bg-primary hover:bg-primary/90 font-bold text-xs sm:text-sm tracking-wide border border-primary"
                  >
                    Register Now
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("speakers")}
                    className="h-11 sm:h-12 px-6 sm:px-8 font-bold text-xs sm:text-sm border border-primary/30 hover:border-primary hover:bg-primary/5 tracking-wide"
                  >
                    View Speakers
                  </Button>
                </div>
              </div>

              {/* ═══ Right: Countdown + Stats ═══ */}
              <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
                {/* Countdown label */}
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono tracking-widest uppercase mb-3">
                  <span className="text-primary">$</span> ./countdown --target="OCT 15 2026"
                </div>

                {/* Countdown grid */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {[
                    { label: "DAYS", value: countdown.days },
                    { label: "HRS", value: countdown.hours },
                    { label: "MIN", value: countdown.minutes },
                    { label: "SEC", value: countdown.seconds },
                  ].map((unit) => (
                    <div key={unit.label} className="bg-background border border-primary/15 p-2.5 sm:p-4 text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary font-mono tabular-nums leading-none">
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <div className="text-[7px] sm:text-[8px] text-muted-foreground font-mono tracking-widest mt-1 sm:mt-2">
                        {unit.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini stats */}
                <div className="border border-primary/15 bg-background divide-y divide-primary/10">
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Attendees</span>
                    <span ref={attendees.ref} className="text-xs sm:text-sm font-black text-primary font-mono tabular-nums">
                      {attendees.count}+
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Speakers</span>
                    <span ref={speakers.ref} className="text-xs sm:text-sm font-black text-primary font-mono tabular-nums">
                      {speakers.count}+
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Countries</span>
                    <span ref={countries.ref} className="text-xs sm:text-sm font-black text-primary font-mono tabular-nums">
                      {countries.count}+
                    </span>
                  </div>
                </div>

                {/* Status badge */}
                <div className="mt-3 sm:mt-4 flex items-center gap-2 px-3 py-2 sm:py-2.5 bg-primary/5 border border-primary/15">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] text-primary font-mono tracking-wider uppercase font-semibold">
                    Early Bird Registration Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
