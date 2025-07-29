import React from "react";
import { Github, Code, ExternalLink, Award, TrendingUp } from "lucide-react";

export default function CodeProfiles() {
  const profiles = [
    {
      name: "GitHub",
      username: "devdarshananandhan",
      icon: <Github className="h-8 w-8 text-primary" />,
      url: "https://github.com/Devdarshananandhan",
      stats: [
        { label: "Repositories", value: "20+" },
        { label: "Stars", value: "200+" },
        { label: "Contributions", value: "100+" },
      ],
    },
    {
      name: "LeetCode",
      username: "Devdarshan",
      icon: <Code className="h-8 w-8 text-primary" />,
      url: "https://leetcode.com/u/Devdarshan/",
      stats: [
        { label: "Problems Solved", value: "300+" },
        { label: "Contest Rating", value: "1600+" },
        { label: "Global Rank", value: "Top 40%" },
      ],
    },
    {
      name: "CodeChef",
      username: "devdarshan1285",
      icon: <Award className="h-8 w-8 text-primary" />,
      url: "https://www.codechef.com/users/devdarshan1285",
      stats: [
        { label: "Rating", value: "1500+" },
        { label: "Division", value: "Div 2" },
        { label: "Problems Solved", value: "200+" },
      ],
    },
    {
      name: "SkillRack",
      username: "DEVDARSHAN A",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      url: "https://www.skillrack.com/faces/resume.xhtml?id=483819&key=39953035cbc3ae2ce073b6a53cfb55d8ae33fd59",
      stats: [
        { label: "Bronze", value: "125" },
        { label: "Rank", value: "50000" },
        { label: "Problems Solved", value: "570+" },
      ],
    },
  ];
  return (
    <section id="profiles" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Coding Profiles</h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-muted-foreground">
          Check out my activities on various coding platforms where I regularly solve algorithmic problems and contribute to open-source projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="card-hover p-6 rounded-lg border border-border bg-card flex flex-col relative"
            >
              {/* Make entire card clickable */}
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Visit ${profile.name} profile`}
              >
                <span className="sr-only">Visit {profile.name} profile</span>
              </a>
              
              <div className="flex items-center gap-4 mb-6">
                {profile.icon}
                <div>
                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">@{profile.username}</p>
                </div>
                {/* External link with its own z-index to make it independently clickable */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto p-2 hover:bg-secondary rounded-full transition-colors z-20 relative"
                  aria-label={`Open ${profile.name} profile in a new tab`}
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground"/>
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}