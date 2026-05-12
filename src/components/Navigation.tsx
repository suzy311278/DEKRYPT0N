import { Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Speakers", action: () => scrollToSection("speakers") },
    { label: "Tracks", action: () => scrollToSection("tracks") },
    { label: "Agenda", action: () => scrollToSection("agenda") },
    { label: "About", link: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-primary/10 z-50 font-mono">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Terminal className="h-7 w-7 text-primary" />
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-primary tracking-wider">
              DEKRIPT0N
            </span>
            <span className="text-[8px] text-muted-foreground tracking-[0.2em] uppercase">
              Conference 2026
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.link ? (
              <Link
                key={item.label}
                to={item.link}
                className="px-4 py-2 text-xs font-semibold text-foreground/70 hover:text-primary tracking-wider uppercase transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.action}
                className="px-4 py-2 text-xs font-semibold text-foreground/70 hover:text-primary tracking-wider uppercase transition-colors duration-200"
              >
                {item.label}
              </button>
            )
          )}

          <div className="w-px h-5 bg-border mx-2" />
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("register")}
            size="sm"
            className="ml-2 shadow-glow bg-primary hover:bg-primary/90 font-bold text-xs tracking-wider uppercase border border-primary h-9 px-5"
          >
            Register
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 px-4 pb-4">
          {navItems.map((item) =>
            item.link ? (
              <Link
                key={item.label}
                to={item.link}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-foreground/70 hover:text-primary tracking-wider uppercase transition-colors border-b border-primary/5"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.action}
                className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground/70 hover:text-primary tracking-wider uppercase transition-colors border-b border-primary/5"
              >
                {item.label}
              </button>
            )
          )}
          <div className="flex items-center gap-3 mt-3 px-4">
            <ThemeToggle />
            <Button
              onClick={() => { scrollToSection("register"); setMobileOpen(false); }}
              size="sm"
              className="flex-1 shadow-glow bg-primary hover:bg-primary/90 font-bold text-xs tracking-wider uppercase"
            >
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
