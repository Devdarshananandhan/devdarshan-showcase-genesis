
import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      github: "https://github.com/devdarshan/ecommerce-platform",
      live: "https://ecommerce-platform-demo.com",
    },
    {
      title: "Task Management App",
      description: "A Flutter-based task management application with real-time synchronization, notifications, and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
      github: "https://github.com/devdarshan/task-manager",
      live: "https://task-manager-app.com",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media analytics with interactive charts, data visualization, and reporting tools.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Firebase"],
      github: "https://github.com/devdarshan/social-dashboard",
      live: "https://social-dashboard-demo.com",
    },
    {
      title: "Real Estate Finder",
      description: "A property listing platform with search filters, map integration, and virtual tour capabilities.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "MongoDB", "Google Maps API", "Cloudinary"],
      github: "https://github.com/devdarshan/realestate-finder",
      live: "https://realestate-finder-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-muted-foreground">
          Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card overflow-hidden flex flex-col"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/devdarshan"
            target="_blank"
            rel="noreferrer"
            className="custom-button inline-flex items-center gap-2"
          >
            <span>View More Projects</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
