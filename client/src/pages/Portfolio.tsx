import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Azure Migration for 500+ Users",
      category: "Cloud Migration",
      description: "Successfully migrated a large enterprise infrastructure to Microsoft Azure with zero data loss and minimal downtime.",
      tags: ["Azure", "Migration", "Active Directory", "Hybrid Cloud"],
      image: "/images/service-azure-migration.jpg", // Reusing relevant generated image
      link: "https://www.upwork.com/freelancers/~01d72498331fb8e9ed"
    },
    {
      title: "Cloud Architecture Optimization",
      category: "Cost Optimization",
      description: "Redesigned cloud infrastructure to improve performance while reducing monthly operational costs by 40%.",
      tags: ["AWS", "Cost Optimization", "Architecture", "Performance"],
      image: "/images/hero-cloud-architecture.jpg", // Reusing relevant generated image
      link: "https://www.upwork.com/freelancers/~01d72498331fb8e9ed"
    },
    {
      title: "Scalable Cloud Infrastructure",
      category: "DevOps",
      description: "Implemented a fully automated, scalable infrastructure using AWS Storage Gateway and DataSync for high-volume data processing.",
      tags: ["AWS", "DataSync", "Storage Gateway", "Automation"],
      image: "/images/service-devops-automation.jpg", // Reusing relevant generated image
      link: "https://www.upwork.com/freelancers/~01d72498331fb8e9ed"
    },
    {
      title: "Secure Network Implementation",
      category: "Security",
      description: "Deployed a fortified network architecture with advanced firewall rules, VPN access, and intrusion detection systems.",
      tags: ["Security", "Networking", "VPN", "Firewall"],
      image: "/images/service-security.jpg", // Reusing relevant generated image
      link: "https://www.upwork.com/freelancers/~01d72498331fb8e9ed"
    }
  ];

  const testimonials = [
    {
      text: "Michael delivered exceptional work on my website’s Google Search Console update and manual indexing. He quickly fixed all sitemap issues...",
      client: "Client from Dec 2025",
      rating: 5
    },
    {
      text: "Michael went above and beyond to rescue and optimise my business website when I needed urgent help. He is extremely professional, fast, and honest.",
      client: "Client from Nov 2025",
      rating: 5
    },
    {
      text: "Good in explaining things. Planning and implementation procedures for AWS were excellent.",
      client: "Client from Jul 2025",
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="bg-muted/30 py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Project Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              A selection of successful projects delivering value, security, and scalability to clients worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 z-20" variant="secondary">
                  {project.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-background">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project Details <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground">Trusted by clients with a 100% Job Success Score on Upwork</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-6">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.client}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
