
import React from "react";
import { Code2, Server, Database, Layout, FileJson, Shield } from "lucide-react";

export default function Skills() {
  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT", "OAuth"]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "Mongoose"]
    },
    {
      title: "Mobile Development",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      skills: ["Flutter", "Dart", "React Native", "Android", "iOS", "Firebase"]
    },
    {
      title: "Design & UI/UX",
      icon: <FileJson className="h-8 w-8 text-primary" />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping", "UI Components"]
    },
    {
      title: "DevOps & Tools",
      icon: <Shield className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Jest/Testing"]
    },
  ];
  
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-muted-foreground">
          I've worked with a wide range of technologies in the web and mobile development world.
          Here's a quick overview of my technical skillset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skillsCategories.map((category, index) => (
            <div 
              key={index}
              className="card-hover p-8 rounded-xl border border-border bg-card"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
