import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: "ics-threat-landscape-2025",
      title: "ICS Threat Landscape 2025: What You Need to Know",
      excerpt: "An in-depth analysis of emerging threats targeting industrial control systems and how to defend against them.",
      category: "Threat Intelligence",
      date: "Nov 8, 2025",
      readTime: "8 min",
      author: "Security Research Team",
      featured: true
    },
    {
      id: "implementing-iec-62443",
      title: "Implementing IEC 62443: A Practical Guide",
      excerpt: "Step-by-step guidance on implementing the IEC 62443 standard in your industrial environment.",
      category: "Standards & Compliance",
      date: "Nov 5, 2025",
      readTime: "12 min",
      author: "Compliance Team",
      featured: true
    },
    {
      id: "scada-security-basics",
      title: "SCADA Security Fundamentals for Beginners",
      excerpt: "Essential concepts every OT security professional should know about SCADA system security.",
      category: "Fundamentals",
      date: "Nov 1, 2025",
      readTime: "6 min",
      author: "Training Team",
      featured: false
    },
    {
      id: "zero-trust-ot-networks",
      title: "Applying Zero Trust to OT Networks",
      excerpt: "How to adapt Zero Trust principles for operational technology environments without disrupting operations.",
      category: "Architecture",
      date: "Oct 28, 2025",
      readTime: "10 min",
      author: "Architecture Team",
      featured: false
    },
    {
      id: "incident-response-playbook",
      title: "OT Incident Response Playbook",
      excerpt: "Comprehensive guide to responding to cybersecurity incidents in industrial control environments.",
      category: "Incident Response",
      date: "Oct 25, 2025",
      readTime: "15 min",
      author: "IR Team",
      featured: false
    },
    {
      id: "modbus-protocol-security",
      title: "Securing Modbus Protocol Communications",
      excerpt: "Deep dive into Modbus protocol vulnerabilities and practical security measures.",
      category: "Protocols",
      date: "Oct 22, 2025",
      readTime: "9 min",
      author: "Protocol Team",
      featured: false
    }
  ];

  const categories = ["All", "Threat Intelligence", "Standards & Compliance", "Fundamentals", "Architecture", "Incident Response", "Protocols"];

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto relative">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md">
            <span className="text-primary font-mono text-sm">$ ls -la /blog/posts/</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-mono">
            <span className="text-primary">&gt;</span> security_blog
          </h1>
          
          <p className="text-xl text-muted-foreground font-mono max-w-3xl mb-12">
            Insights, tutorials, and news about operational technology cybersecurity
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors font-mono"
              >
                {category}
              </Badge>
            ))}
          </div>

          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md">
                <span className="text-primary font-mono text-sm">$ cat featured_posts.log</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Link to={`/blog/${article.id}`} key={article.id}>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                      <CardHeader className="border-b border-primary/20 bg-primary/5">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="default" className="font-mono bg-primary">
                            {article.category}
                          </Badge>
                          <Badge variant="outline" className="border-primary/50 text-primary font-mono">
                            featured
                          </Badge>
                        </div>
                        <h2 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground font-mono mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md">
              <span className="text-primary font-mono text-sm">$ find . -name "*.md" | sort -r</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Link to={`/blog/${article.id}`} key={article.id}>
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 font-mono">
                        {article.category}
                      </Badge>
                      <h3 className="text-xl font-bold font-mono text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-4 border-t border-primary/20">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
