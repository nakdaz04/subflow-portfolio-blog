import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with payment integration and inventory management",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Project Management Tool",
      description: "Collaborative workspace for teams with real-time updates and task tracking",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Firebase", "WebSocket", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Machine learning powered content creation platform with multiple models",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "/placeholder.svg",
      tags: ["React Native", "Node.js", "MongoDB", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management and scheduling",
      image: "/placeholder.svg",
      tags: ["Next.js", "Chart.js", "Redis", "OAuth"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Real-time monitoring system for IoT devices with predictive analytics",
      image: "/placeholder.svg",
      tags: ["React", "InfluxDB", "MQTT", "Grafana"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const categories = ["All", "Web Apps", "Mobile", "AI/ML", "IoT"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our latest projects and innovative solutions across various industries
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow ${
                project.featured ? "border-primary/50" : ""
              }`}
            >
              {project.featured && (
                <Badge className="absolute top-4 right-4 z-10 bg-gradient-primary">
                  Featured
                </Badge>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>

        {/* CTA section */}
        <div className="mt-24 text-center bg-gradient-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Next Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our expertise and innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Start a Project
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;