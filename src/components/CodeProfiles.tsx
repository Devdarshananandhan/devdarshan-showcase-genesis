
import React from "react";
import { Github, Code, ExternalLink, Award, TrendingUp } from "lucide-react";

export default function CodeProfiles() {
  const profiles = [
    {
      name: "GitHub",
      username: "devdarshan",
      icon: <Github className="h-8 w-8 text-primary" />,
      url: "https://github.com/devdarshan",
      stats: [
        { label: "Repositories", value: "50+" },
        { label: "Stars", value: "200+" },
        { label: "Contributions", value: "1000+" },
      ],
    },
    {
      name: "LeetCode",
      username: "devdarshan",
      icon: <Code className="h-8 w-8 text-primary" />,
      url: "https://leetcode.com/devdarshan",
      stats: [
        { label: "Problems Solved", value: "300+" },
        { label: "Contest Rating", value: "1800+" },
        { label: "Global Rank", value: "Top 5%" },
      ],
    },
    {
      name: "CodeChef",
      username: "devdarshan",
      icon: <Award className="h-8 w-8 text-primary" />,
      url: "https://codechef.com/users/devdarshan",
      stats: [
        { label: "Rating", value: "1900+" },
        { label: "Division", value: "Div 2" },
        { label: "Problems Solved", value: "200+" },
      ],
    },
    {
      name: "CodeForces",
      username: "devdarshan",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      url: "https://codeforces.com/profile/devdarshan",
      stats: [
        { label: "Rating", value: "1700+" },
        { label: "Rank", value: "Expert" },
        { label: "Contests", value: "30+" },
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
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="card-hover p-6 rounded-lg border border-border bg-card flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                {profile.icon}
                <div>
                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">@{profile.username}</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
