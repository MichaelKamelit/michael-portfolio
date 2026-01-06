import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Shield, Code, Database, Network } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cloud Architecture & Migration",
      description: "Design and migrate scalable infrastructures on Azure & AWS.",
      icon: <Cloud className="h-10 w-10 text-primary" />,
      details: [
        "Server & VM migrations with minimal downtime",
        "High availability & disaster recovery planning",
        "Cost optimization strategies (25-40% savings)",
        "Hybrid cloud implementations"
      ],
      image: "/images/service-azure-migration.jpg"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development workflows with CI/CD pipelines.",
      icon: <Code className="h-10 w-10 text-primary" />,
      details: [
        "CI/CD pipelines (GitHub Actions, Azure DevOps, Jenkins)",
        "Infrastructure as Code (Terraform, Ansible)",
        "Containerization (Docker, Kubernetes)",
        "Automated testing & deployment"
      ],
      image: "/images/service-devops-automation.jpg"
    },
    {
      title: "Security & Compliance",
      description: "Harden your infrastructure against threats and ensure compliance.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      details: [
        "Security hardening & vulnerability assessments",
        "Identity & Access Management (IAM)",
        "Firewall & VPN configuration",
        "Compliance auditing (GDPR, HIPAA ready setups)"
      ],
      image: "/images/service-security.jpg"
    },
    {
      title: "System Administration",
      description: "Ongoing support and management for your IT infrastructure.",
      icon: <Server className="h-10 w-10 text-primary" />,
      details: [
        "Linux & Windows Server administration",
        "Performance monitoring & tuning",
        "Patch management & updates",
        "24/7 incident response"
      ],
      image: null
    },
    {
      title: "Database Management",
      description: "Optimize and secure your data storage solutions.",
      icon: <Database className="h-10 w-10 text-primary" />,
      details: [
        "Database migration & replication",
        "Performance tuning & query optimization",
        "Backup & recovery strategies",
        "NoSQL & SQL implementation"
      ],
      image: null
    },
    {
      title: "Networking Solutions",
      description: "Robust networking for secure and fast connectivity.",
      icon: <Network className="h-10 w-10 text-primary" />,
      details: [
        "VPN setup & management",
        "Load balancing & traffic management",
        "DNS configuration",
        "Network security implementation"
      ],
      image: null
    }
  ];

  return (
    <Layout>
      <div className="bg-muted/30 py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Expert Cloud & DevOps Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions to build, secure, and optimize your digital infrastructure.
              From startups to enterprises, I deliver production-ready systems.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              )}
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Infrastructure?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a complete cloud migration or a quick security audit, I'm here to help.
            Let's discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer">
                Hire Me on Upwork
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
