import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, BookOpen, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    "Cloud Engineering", "Microsoft Azure", "Azure DevOps", "Amazon Web Services (AWS)",
    "Server Virtualization", "System Administration", "IT Management", "Cybersecurity",
    "Terraform", "Cloud Migration", "Docker & Containers", "CI/CD Pipelines"
  ];

  const certifications = [
    "ISC2 Candidate (Verified)",
    "Microsoft Certified Professional",
    "CompTIA Network+",
    "Cisco Certified Network Associate (CCNA)",
    "CompTIA A+"
  ];

  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Michael M.
            </h1>
            <h2 className="text-2xl text-primary font-medium mb-6">
              Cloud Solution Architect & DevOps Engineer
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                With over 20 years of hands-on experience in IT and cloud engineering, I help startups and growing businesses design, migrate, and optimize cloud infrastructures that are secure, scalable, and cost-efficient.
              </p>
              <p className="mb-4">
                I don't just set up servers; I build reliable, production-ready systems. My approach focuses on long-term maintainability, security best practices, and eliminating unnecessary cloud costs.
              </p>
              <p>
                Based in Cairo, Egypt, I work with clients globally, providing clear communication, honest technical advice, and fast troubleshooting for critical issues.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button size="lg" asChild>
                <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer">
                  Hire Me on Upwork
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/portfolio">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative z-10 shadow-2xl">
              {/* Placeholder for profile image - using a generic tech abstract if no profile pic available */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-9xl font-bold text-primary/20">M</span>
              </div>
              {/* If we had a real profile picture, it would go here. For now, using a clean abstract representation */}
              <img 
                src="/images/hero-cloud-architecture.jpg" 
                alt="Cloud Architecture" 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 bg-card p-6 rounded-xl shadow-xl z-20 border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">100%</div>
                  <div className="text-sm text-muted-foreground">Job Success Score</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">$10K+</div>
                  <div className="text-sm text-muted-foreground">Total Earnings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-lg">Harvard University</h4>
                  <p className="text-muted-foreground">Foundation degree, CS50: Introduction to Computer Science</p>
                  <p className="text-sm text-muted-foreground mt-1">2018 - 2019</p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-lg">Ain Shams University</h4>
                  <p className="text-muted-foreground">Bachelor's Degree</p>
                  <p className="text-sm text-muted-foreground mt-1">2001 - 2006</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
