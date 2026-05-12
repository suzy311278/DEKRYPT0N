import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "001",
      client: "Energy Sector Corporation",
      industry: "Power Generation",
      challenge: "Legacy SCADA systems vulnerable to modern cyber threats with no trained security personnel",
      solution: "6-month comprehensive OT security training program covering ICS protocols, risk assessment, and incident response",
      results: [
        "Trained 25 engineers in ICS/OT security fundamentals",
        "95% reduction in security incidents within first year",
        "Achieved IEC 62443 compliance across all facilities",
        "Established internal security operations center"
      ],
      metrics: {
        trained: 25,
        duration: "6 months",
        compliance: "IEC 62443"
      }
    },
    {
      id: "002",
      client: "Manufacturing Giant",
      industry: "Industrial Automation",
      challenge: "Multiple production line disruptions due to lack of OT security awareness and proper network segmentation",
      solution: "Custom training modules for network segmentation, secure remote access, and ICS protocol security",
      results: [
        "Zero production disruptions in 18 months post-training",
        "40 engineers certified in ICS security",
        "Implemented Purdue Model architecture across 5 plants",
        "Reduced cyber risk exposure by 80%"
      ],
      metrics: {
        trained: 40,
        duration: "4 months",
        compliance: "NIST CSF"
      }
    },
    {
      id: "003",
      client: "Water Treatment Facility",
      industry: "Critical Infrastructure",
      challenge: "Aging infrastructure with no cybersecurity program and regulatory compliance requirements",
      solution: "Intensive IEC 62443 bootcamp and ongoing mentorship program for operational staff",
      results: [
        "Achieved full regulatory compliance ahead of deadline",
        "15 operators trained in secure OT operations",
        "Implemented continuous monitoring systems",
        "Created sustainable security culture"
      ],
      metrics: {
        trained: 15,
        duration: "3 months",
        compliance: "IEC 62443"
      }
    },
    {
      id: "004",
      client: "Oil & Gas Enterprise",
      industry: "Energy",
      challenge: "Distributed facilities across remote locations with inconsistent security practices and high turnover",
      solution: "Virtual lab-based training program with realistic simulations and 24/7 access to learning resources",
      results: [
        "80+ personnel trained across 12 remote sites",
        "Standardized security procedures company-wide",
        "50% reduction in security policy violations",
        "Created internal trainer certification program"
      ],
      metrics: {
        trained: 80,
        duration: "12 months",
        compliance: "ISO 27001"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto relative">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md">
            <span className="text-primary font-mono text-sm">$ cat case_studies/*.log</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-mono">
            <span className="text-primary">&gt;</span> success_stories
          </h1>
          
          <p className="text-xl text-muted-foreground font-mono max-w-3xl mb-12">
            Real-world results from organizations that transformed their OT security posture through our training programs.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-primary/10 border-2 border-primary/30">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary font-mono mb-1">160+</div>
                <div className="text-sm text-muted-foreground font-mono">professionals_trained</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border-2 border-primary/30">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary font-mono mb-1">85%</div>
                <div className="text-sm text-muted-foreground font-mono">incident_reduction</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border-2 border-primary/30">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary font-mono mb-1">100%</div>
                <div className="text-sm text-muted-foreground font-mono">compliance_rate</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border-2 border-primary/30">
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary font-mono mb-1">24</div>
                <div className="text-sm text-muted-foreground font-mono">avg_completion_weeks</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
                <CardHeader className="border-b border-primary/20 bg-primary/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-primary/50 text-primary font-mono">
                          case_{study.id}.log
                        </Badge>
                        <Badge variant="secondary" className="font-mono">
                          {study.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-mono text-foreground">
                        {study.client}
                      </CardTitle>
                    </div>
                    <div className="flex gap-4 text-sm font-mono">
                      <div className="text-center">
                        <div className="text-primary font-bold">{study.metrics.trained}</div>
                        <div className="text-muted-foreground">trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary font-bold">{study.metrics.duration}</div>
                        <div className="text-muted-foreground">duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary font-bold">{study.metrics.compliance}</div>
                        <div className="text-muted-foreground">standard</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-foreground mb-3 font-mono flex items-center gap-2">
                        <span className="text-primary">$</span> challenge.txt
                      </h4>
                      <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-foreground mb-3 font-mono flex items-center gap-2">
                        <span className="text-primary">$</span> solution.sh
                      </h4>
                      <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-foreground mb-3 font-mono flex items-center gap-2">
                        <span className="text-primary">$</span> results.log
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm font-mono">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
