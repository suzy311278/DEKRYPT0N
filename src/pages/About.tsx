import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Terminal, Shield, Users, Target, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Community First",
      description: "Building the largest cybersecurity community in Asia through inclusive events, mentorship, and knowledge sharing"
    },
    {
      icon: Users,
      title: "Diversity & Inclusion",
      description: "Championing diversity in cybersecurity with scholarships, women-in-security tracks, and student programs"
    },
    {
      icon: Target,
      title: "Practical Knowledge",
      description: "Every talk backed by real-world case studies, live demos, and hands-on workshops — no fluff, only actionable insights"
    },
    {
      icon: Zap,
      title: "Innovation Platform",
      description: "Launching pad for cybersecurity startups with pitch competitions, VC networking, and innovation showcases"
    }
  ];

  const stats = [
    { label: "Editions Hosted", count: "7", description: "Years of bringing the cybersecurity community together" },
    { label: "Total Attendees", count: "25K+", description: "Professionals who've attended DEKRIPT0N over the years" },
    { label: "Speakers Featured", count: "500+", description: "World-class researchers, hackers, and CISOs" },
    { label: "Countries", count: "45+", description: "Global participation from 6 continents" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto max-w-[1200px] relative">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-6">
            About DEKRIPT0N
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Asia's Premier <br /><span className="text-primary">Cybersecurity Summit</span>
          </h1>
          
          <div className="max-w-2xl space-y-4 text-base text-foreground/70 font-mono leading-relaxed">
            <p>
              DEKRIPT0N is <span className="text-primary font-semibold">Asia's premier cybersecurity conference</span>, modeled after NASSCOM but built exclusively for the security industry — bringing together ethical hackers, CISOs, policymakers, researchers, and startups under one roof.
            </p>
            <p>
              Since our founding, we've hosted <span className="text-primary font-semibold">25,000+ professionals</span> across 7 editions, becoming the go-to platform for cybersecurity discourse in the region.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-5 mt-14">
            <Card className="bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/25 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <Terminal className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Mission</h3>
                </div>
                <p className="text-sm text-foreground/60 font-mono leading-relaxed">
                  To create the most impactful cybersecurity conference in Asia — where cutting-edge research meets policy, where startups meet investors, and where the community comes together to secure our digital future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/25 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Vision</h3>
                </div>
                <p className="text-sm text-foreground/60 font-mono leading-relaxed">
                  To establish DEKRIPT0N as the world's most influential cybersecurity summit — rivaling DEFCON, BlackHat, and RSA — while championing the unique perspectives and innovations emerging from India and the Global South.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Our Values
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
            Core <span className="text-primary">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/25 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm text-foreground/60 font-mono leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Track Record
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
            By the <span className="text-primary">Numbers</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-background p-6 text-center">
                <div className="text-4xl font-black text-primary mb-2 font-mono">{stat.count}</div>
                <h3 className="text-sm font-semibold mb-1 text-foreground">{stat.label}</h3>
                <p className="text-[11px] text-muted-foreground font-mono">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
