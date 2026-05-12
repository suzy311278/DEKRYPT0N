import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center font-mono">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border-2 border-primary/50 flex items-center justify-center">
            <Terminal className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="text-sm text-muted-foreground mb-4">
          <span className="text-primary">$</span> cat /error.log
        </div>
        <h1 className="mb-4 text-6xl font-black text-primary">404</h1>
        <p className="mb-2 text-lg text-foreground/70">
          [ERROR] Route not found: <span className="text-primary">{location.pathname}</span>
        </p>
        <p className="mb-8 text-sm text-muted-foreground">
          The requested resource does not exist on this server.
        </p>
        <a href="/">
          <Button className="shadow-glow bg-primary hover:bg-primary/90 font-bold border-2 border-primary">
            $ cd /home
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
