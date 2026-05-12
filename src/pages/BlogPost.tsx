import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog post data - in real app, fetch from API
  const posts: Record<string, any> = {
    "ics-threat-landscape-2025": {
      title: "ICS Threat Landscape 2025: What You Need to Know",
      category: "Threat Intelligence",
      date: "Nov 8, 2025",
      readTime: "8 min",
      author: "Security Research Team",
      content: `
The industrial control systems (ICS) threat landscape continues to evolve at an unprecedented pace. As we move through 2025, understanding emerging threats and implementing robust defenses has never been more critical for organizations operating critical infrastructure.

## Key Threat Vectors

### 1. Supply Chain Attacks
Modern ICS environments are increasingly interconnected, creating multiple entry points for adversaries. Supply chain attacks targeting vendors and service providers have become a primary concern.

### 2. Ransomware Evolution
Ransomware groups have shifted focus to operational technology environments, recognizing the critical nature of industrial operations and the pressure to restore services quickly.

### 3. Nation-State Activities
State-sponsored actors continue to probe critical infrastructure for vulnerabilities, establishing persistent access for potential future disruption campaigns.

## Defense Strategies

### Network Segmentation
Implementing proper network segmentation following the Purdue Model remains fundamental. Organizations must ensure clear boundaries between IT and OT networks.

### Zero Trust Architecture
Adapting Zero Trust principles to OT environments provides defense in depth without compromising operational requirements.

### Continuous Monitoring
Real-time visibility into ICS networks enables rapid threat detection and response, minimizing potential impact.

## Looking Ahead

The convergence of IT and OT security continues, requiring professionals who understand both domains. Investment in training, technology, and processes will determine an organization's resilience against emerging threats.

Organizations that prioritize OT security today will be best positioned to defend against tomorrow's threats.
      `
    }
  };

  const post = posts[id || ""] || posts["ics-threat-landscape-2025"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono">
            <ArrowLeft className="h-4 w-4" />
            <span>$ cd ../blog</span>
          </Link>

          <div className="mb-8">
            <Badge variant="default" className="mb-4 font-mono bg-primary">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-mono leading-tight">
              <span className="text-primary">&gt;</span> {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground font-mono text-sm mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime} read
              </span>
              <span>by {post.author}</span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="font-mono">
                <Share2 className="h-4 w-4 mr-2" />
                $ share
              </Button>
            </div>
          </div>

          <Card className="bg-card/50 border-2 border-primary/30 mb-8">
            <CardContent className="p-8">
              <div 
                className="prose prose-invert max-w-none font-mono
                  prose-headings:text-foreground prose-headings:font-mono prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:flex prose-h2:items-center prose-h2:gap-2
                  prose-h2:before:content-['$'] prose-h2:before:text-primary
                  prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:my-4 prose-li:text-muted-foreground prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
              >
                {post.content.split('\n').map((paragraph: string, idx: number) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.trim()) {
                    return <p key={idx}>{paragraph}</p>;
                  }
                  return null;
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-2 border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 font-mono text-foreground">
                $ cat related_training.txt
              </h3>
              <p className="text-muted-foreground font-mono mb-4">
                Want to learn more? Check out our hands-on training programs:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/training/ics-risk-assessment">
                  <Button variant="outline" className="font-mono">
                    ICS Risk Assessment →
                  </Button>
                </Link>
                <Link to="/training/iec-62443-bootcamp">
                  <Button variant="outline" className="font-mono">
                    IEC 62443 Bootcamp →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
