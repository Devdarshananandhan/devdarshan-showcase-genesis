
import React from "react";
import { Code2, Server, Database, Layout, FileJson, Shield, ChartSpline, Bot, MonitorSmartphone } from "lucide-react";

export default function Skills() {
  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "Mongoose"]
    },
    {
      title: "Mobile App Development",
      icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
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
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest/Testing"]
    },
    {
      title: "Machine Learning",
      icon: <Bot className="h-8 w-8 text-primary" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"]
    },
    {
      title: "Data Science",
      icon: <ChartSpline className="h-8 w-8 text-primary" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "PowerBI", "Tableau"]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Java"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Skills & Expertise</h2>
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
