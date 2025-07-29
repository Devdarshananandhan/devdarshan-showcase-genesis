
import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "DevBook",
      description: "A Flutter Application for Developers to connect with each other.",
      technologies: ["Flutter", "Dart", "Firebase", "State Management"],
      github: "https://github.com/Devdarshananandhan/Devbook",
    },
    {
      title: "NoteVault",
      description: "A Flutter Application for College users to save notes with login credentials and has private folder access in it.",
      technologies: ["Flutter", "Supabase", "Dart", "State Management"],
      github: "https://github.com/Devdarshananandhan/NoteVault",
    },
    {
      title: "Movie Review System",
      description: "A simple movie review system using Python and Flask with Exploratory Data Analysis using Pandas.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Pandas", "Scikit-learn", "Machine Learning"],
      github: "https://github.com/Devdarshananandhan/Movie-review-system",
    },
    {
      title: "WashWay",
      description: "A Flutter Application for college users to book a washer and dryer.",
      technologies: ["Flutter", "Dart", "Firebase", "GoogleMapsAPi", "State Management"],
      github: "https://github.com/Devdarshananandhan/washway",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card overflow-hidden flex flex-col"
            >
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
