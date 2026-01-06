import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Cloud, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl text-primary">
              <Cloud className="h-6 w-6" />
              <span>Michael M.</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4">
              <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer">
                Hire Me on Upwork
              </a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item.path)
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer">
                    Hire Me on Upwork
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/">
                <a className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
                  <Cloud className="h-6 w-6" />
                  <span>Michael M.</span>
                </a>
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Helping startups and enterprises design, migrate, and optimize secure cloud infrastructures.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cloud Architecture</li>
                <li>Azure & AWS Migration</li>
                <li>DevOps & Automation</li>
                <li>Security & Compliance</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/michaelzaka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.upwork.com/freelancers/~01d72498331fb8e9ed" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="font-bold text-sm border border-current rounded px-1">Up</span>
                  <span className="sr-only">Upwork</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Michael M. All rights reserved.</p>
            <p>Cairo, Egypt (GMT+2)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
