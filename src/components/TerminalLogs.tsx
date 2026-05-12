import { useEffect, useState } from "react";

interface LogEntry {
  id: number;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

const TerminalLogs = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const logTemplates = [
    { text: "$ ssh admin@dekript0n.com", type: 'info' as const },
    { text: "[INFO] Connecting to dekript0n.com (103.21.58.12)...", type: 'info' as const },
    { text: "[OK] Connection established", type: 'success' as const },
    { text: "[INFO] Loading conference platform...", type: 'info' as const },
    { text: "[OK] Platform online — 5,000 seats available", type: 'success' as const },
    { text: "[INFO] Syncing speaker database...", type: 'info' as const },
    { text: "[OK] 120 speakers confirmed", type: 'success' as const },
    { text: "[INFO] Initializing CTF environment...", type: 'info' as const },
    { text: "[OK] CTF servers ready — 12 challenges loaded", type: 'success' as const },
    { text: "[INFO] Checking venue connectivity...", type: 'info' as const },
    { text: "[OK] Pragati Maidan — all systems operational", type: 'success' as const },
    { text: "[INFO] Fetching sponsor data...", type: 'info' as const },
    { text: "[OK] 45 sponsors onboarded", type: 'success' as const },
    { text: "[INFO] Verifying registration gateway...", type: 'info' as const },
    { text: "[OK] Payment systems active", type: 'success' as const },
    { text: "[INFO] Running security scan on conference infra...", type: 'info' as const },
    { text: "[OK] No vulnerabilities detected", type: 'success' as const },
    { text: "[INFO] Streaming setup check...", type: 'info' as const },
    { text: "[OK] Live stream — 10 Gbps uplink ready", type: 'success' as const },
    { text: "[WARN] Early bird pricing ends Jul 31", type: 'warning' as const },
  ];

  useEffect(() => {
    let logId = 0;
    const maxLogs = 15;

    const addLog = () => {
      const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      
      setLogs(prev => {
        const newLog: LogEntry = {
          id: logId++,
          text: `[${timestamp}] ${template.text}`,
          type: template.type
        };
        
        const updated = [...prev, newLog];
        return updated.slice(-maxLogs);
      });
    };

    addLog();
    addLog();

    const interval = setInterval(addLog, 2000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (type: LogEntry['type']) => {
    switch(type) {
      case 'success': return 'text-primary';
      case 'warning': return 'text-primary/70';
      case 'error': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex flex-col justify-start p-4 md:p-8 font-mono text-xs md:text-sm space-y-1 opacity-10 blur-[0.5px]">
        {logs.map((log) => (
          <div
            key={log.id}
            className={`${getColorClass(log.type)} animate-slide-in-right whitespace-nowrap overflow-hidden`}
          >
            {log.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalLogs;
