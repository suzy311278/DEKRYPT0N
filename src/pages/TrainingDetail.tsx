import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, ArrowLeft, CheckCircle2, Target, BookOpen } from "lucide-react";

const TrainingDetail = () => {
  const { id } = useParams();

  // Training data - in a real app, this would come from an API or database
  const trainings: Record<string, any> = {
    "ics-risk-assessment": {
      id: "ics-risk-assessment",
      title: "ICS Risk Assessment Workshop",
      level: "Intermediate",
      duration: "3 Days",
      startDate: "Nov 19, 2025",
      schedule: "Nov 19-21 • 7-9:30 PM IST",
      enrolled: 1,
      total: 20,
      price: "$899",
      description: "Comprehensive 3-day workshop focused on ICS/OT risk assessment methodologies. Learn practical techniques using improved Excel templates and real-world case studies to identify and mitigate risks in industrial environments.",
      prerequisites: [
        "Basic understanding of ICS/SCADA systems",
        "Familiarity with cybersecurity concepts",
        "Experience in industrial environments (recommended)"
      ],
      objectives: [
        "Master risk assessment frameworks for ICS/OT environments",
        "Apply practical risk analysis methodologies",
        "Utilize industry-standard assessment tools and templates",
        "Identify and prioritize threats in industrial control systems",
        "Develop comprehensive risk mitigation strategies"
      ],
      curriculum: [
        { module: "Day 1: ICS Risk Fundamentals", topics: ["Risk assessment frameworks", "OT threat landscape", "Asset identification"] },
        { module: "Day 2: Practical Assessment", topics: ["Vulnerability analysis", "Impact assessment", "Excel-based tools"] },
        { module: "Day 3: Mitigation & Reporting", topics: ["Risk treatment plans", "Documentation", "Case studies"] }
      ],
      instructor: {
        name: "Senior Security Architect",
        credentials: "15+ years in OT security",
        experience: "Led risk assessments for 50+ critical infrastructure facilities"
      }
    },
    "iec-62443-bootcamp": {
      id: "iec-62443-bootcamp",
      title: "IEC/ISA 62443 Cybersecurity Bootcamp",
      level: "Intermediate",
      duration: "1 Day",
      startDate: "Nov 29, 2025",
      schedule: "Nov 29th • 10:00 AM - 3:00 PM IST",
      enrolled: 0,
      total: 20,
      price: "$399",
      description: "An intensive high-level overview of the IEC 62443 standard that equips professionals with the knowledge and skills necessary to secure ICS environments. This bootcamp is based on the globally recognized IEC 62443 standard.",
      prerequisites: [
        "Basic cybersecurity knowledge",
        "Understanding of industrial networks",
        "Interest in ICS/OT security"
      ],
      objectives: [
        "Understand IEC 62443 framework and structure",
        "Learn security level concepts and requirements",
        "Apply standard to real-world scenarios",
        "Implement zone and conduit design",
        "Prepare for IEC 62443 certification paths"
      ],
      curriculum: [
        { module: "Morning: Framework Overview", topics: ["IEC 62443 structure", "Security levels", "Roles & responsibilities"] },
        { module: "Afternoon: Practical Application", topics: ["Zone/conduit design", "Risk assessment", "Implementation strategies"] }
      ],
      instructor: {
        name: "IEC 62443 Certified Expert",
        credentials: "ISA/IEC 62443 Expert Certification",
        experience: "Implemented 62443 compliance in 30+ industrial facilities"
      }
    }
  };

  const training = trainings[id || ""] || trainings["ics-risk-assessment"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono">
            <ArrowLeft className="h-4 w-4" />
            <span>$ cd ..</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/50 text-primary font-mono">
                    {training.level}
                  </Badge>
                  <Badge variant="secondary" className="font-mono">
                    training_{training.id}.sh
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
                  <span className="text-primary">&gt;</span> {training.title}
                </h1>

                <p className="text-xl text-muted-foreground font-mono leading-relaxed">
                  {training.description}
                </p>
              </div>

              <Card className="bg-card/50 border-2 border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-mono text-foreground flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    learning_objectives.txt
                  </h3>
                  <ul className="space-y-3">
                    {training.objectives.map((objective: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 font-mono">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-2 border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-mono text-foreground flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    curriculum.log
                  </h3>
                  <div className="space-y-4">
                    {training.curriculum.map((item: any, idx: number) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-4">
                        <h4 className="font-bold text-foreground mb-2 font-mono">{item.module}</h4>
                        <ul className="space-y-1">
                          {item.topics.map((topic: string, topicIdx: number) => (
                            <li key={topicIdx} className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                              <span className="text-primary">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-2 border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-mono text-foreground">
                    $ cat prerequisites.txt
                  </h3>
                  <ul className="space-y-2">
                    {training.prerequisites.map((prereq: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 font-mono text-muted-foreground">
                        <span className="text-primary">•</span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-card/50 border-2 border-primary/30 sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 font-mono">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">start_date</div>
                        <div className="font-semibold text-foreground">{training.startDate}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">duration</div>
                        <div className="font-semibold text-foreground">{training.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">enrollment</div>
                        <div className="font-semibold text-foreground">
                          {training.enrolled}/{training.total} seats
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2 font-mono">{training.price}</div>
                    <Button className="w-full bg-primary hover:bg-primary/90 font-mono shadow-glow hover:shadow-intense transition-all duration-300">
                      $ ./enroll_now
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <h4 className="font-bold mb-2 font-mono text-foreground">instructor.info</h4>
                    <div className="space-y-1 text-sm font-mono">
                      <div className="text-foreground">{training.instructor.name}</div>
                      <div className="text-muted-foreground">{training.instructor.credentials}</div>
                      <div className="text-muted-foreground text-xs mt-2">{training.instructor.experience}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20 space-y-2">
                    <h4 className="font-bold font-mono text-foreground mb-3">$ cat schedule.txt</h4>
                    <div className="text-sm text-muted-foreground font-mono">
                      {training.schedule}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingDetail;
