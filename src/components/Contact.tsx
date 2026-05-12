import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received",
      description: "You'll receive confirmation within 24 hours.",
    });
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.015]" />
      
      <div className="container relative mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="text-xs text-primary font-mono tracking-widest uppercase mb-4">
            Registration
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Secure Your <span className="text-primary">Spot</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-mono">
            Early bird pricing available until July 31, 2026. Limited seats — register today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <Card className="p-6 md:p-8 bg-card border border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[11px] font-mono text-muted-foreground mb-2 block tracking-wider uppercase">
                    Full Name
                  </label>
                  <Input 
                    placeholder="Enter your full name" 
                    className="h-11 bg-background border border-primary/15 focus:border-primary font-mono text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-muted-foreground mb-2 block tracking-wider uppercase">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 bg-background border border-primary/15 focus:border-primary font-mono text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-muted-foreground mb-2 block tracking-wider uppercase">
                    Organization
                  </label>
                  <Input 
                    placeholder="Your company or organization" 
                    className="h-11 bg-background border border-primary/15 focus:border-primary font-mono text-sm" 
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-muted-foreground mb-2 block tracking-wider uppercase">
                    Message
                  </label>
                  <Textarea
                    placeholder="Any special requirements, group bookings, or questions..."
                    className="min-h-[100px] bg-background border border-primary/15 focus:border-primary font-mono text-sm resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 shadow-glow bg-primary hover:bg-primary/90 font-bold font-mono text-sm tracking-wider uppercase"
                >
                  Submit Registration
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            {/* Contact cards */}
            <Card className="p-5 bg-card border border-primary/10 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mb-2">Email</div>
                  <p className="text-sm text-foreground/80 font-mono">register@dekript0n.com</p>
                  <p className="text-sm text-foreground/80 font-mono">sponsors@dekript0n.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-card border border-primary/10 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mb-2">Phone</div>
                  <p className="text-sm text-foreground/80 font-mono">+91 (11) 4567-8900</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Mon–Sat 9AM–7PM IST</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-card border border-primary/10 hover:border-primary/25 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mb-2">Venue</div>
                  <p className="text-sm text-foreground/80 font-mono">Pragati Maidan Convention Centre</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">New Delhi, India · October 15–18, 2026</p>
                </div>
              </div>
            </Card>

            {/* Pricing */}
            <Card className="p-5 bg-card border border-primary/10">
              <div className="text-[10px] text-primary font-mono tracking-widest uppercase mb-4">Pricing</div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <span className="text-foreground/70">Early Bird <span className="text-[10px] text-muted-foreground">(until Jul 31)</span></span>
                  <span className="text-primary font-bold">₹14,999</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <span className="text-foreground/70">Regular Pass</span>
                  <span className="text-primary font-bold">₹24,999</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <span className="text-foreground/70">VIP + Workshop Access</span>
                  <span className="text-primary font-bold">₹49,999</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground/70">Student Pass</span>
                  <span className="text-primary font-bold">₹4,999</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
