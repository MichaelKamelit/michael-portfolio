import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Cloud, Server, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-primary bg-primary/5">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Production-Ready <span className="text-primary">Cloud Infrastructure</span> & DevOps Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                I help startups and enterprises design, migrate, and optimize secure AWS & Azure environments. 
                20+ years of experience delivering reliable systems, not just code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer">
                    Hire Me on Upwork
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>100% Job Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Top Rated Freelancer</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border bg-muted/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay" />
              <img 
                src="/images/hero-cloud-architecture.jpg" 
                alt="Cloud Architecture Visualization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-blue-400/5 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Job Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground font-medium">Avg. Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground font-medium">Uptime Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Specialized services designed to build, scale, and secure your digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Cloud className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Architecture</h3>
                <p className="text-muted-foreground mb-6">
                  Design and implementation of scalable, fault-tolerant architectures on AWS and Azure.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Migration Strategy
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Cost Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    High Availability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">DevOps & Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Streamline your development lifecycle with robust CI/CD pipelines and infrastructure as code.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Docker & Kubernetes
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Terraform / Ansible
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
                <p className="text-muted-foreground mb-6">
                  Protect your assets with enterprise-grade security configurations and compliance audits.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Security Hardening
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Identity Management
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Disaster Recovery
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/service-azure-migration.jpg" 
                  alt="Azure Migration Project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4">Featured Case Study</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Azure Migration for 500+ Users</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Successfully migrated a large enterprise infrastructure to Microsoft Azure. The project involved moving critical legacy systems with zero data loss and ensuring minimal downtime for over 500 active users.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">Migration</Badge>
                <Badge variant="secondary">Active Directory</Badge>
              </div>
              <Button asChild>
                <Link href="/portfolio">View More Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Let's discuss how we can optimize your cloud environment for performance, security, and cost-efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
                  <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer">
                    Hire Me on Upwork
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            
            {/* Abstract background shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
