import { Terminal, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/10 text-foreground py-14 relative overflow-hidden font-mono">
      <div className="container relative mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Terminal className="h-6 w-6 text-primary" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-primary tracking-wider">
                  DEKRIPT0N
                </span>
                <span className="text-[8px] text-muted-foreground tracking-[0.2em] uppercase">
                  Conference 2026
                </span>
              </div>
            </div>
            <p className="text-xs text-foreground/50 leading-relaxed max-w-[240px]">
              Asia's premier cybersecurity conference bringing together hackers, researchers, CISOs, and industry leaders.
            </p>
          </div>

          {/* Conference */}
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-5">Conference</h3>
            <ul className="space-y-2.5 text-xs text-foreground/50">
              <li><a href="#speakers" className="hover:text-primary transition-colors">Speakers</a></li>
              <li><a href="#tracks" className="hover:text-primary transition-colors">Tracks</a></li>
              <li><a href="#agenda" className="hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#register" className="hover:text-primary transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-5">Resources</h3>
            <ul className="space-y-2.5 text-xs text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CFP Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sponsor Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Venue & Travel</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-5">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-primary/15 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4 text-foreground/40 hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-primary/15 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Twitter className="h-4 w-4 text-foreground/40 hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-primary/15 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Github className="h-4 w-4 text-foreground/40 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-foreground/40">
            © {new Date().getFullYear()} DEKRIPT0N Conference. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-primary/20">·</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
