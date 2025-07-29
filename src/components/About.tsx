
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
        <h2 className="section-title">About Me</h2>

          
          <div className="space-y-6 mt-8">
            <p className="text-lg">
              Hello! I'm DevDarshan, a passionate full-stack developer with expertise in
              modern web and mobile development technologies. My journey in coding
              started with a curiosity to build things that solve real-world
              problems and make a positive impact.
            </p>
            
            <p className="text-lg">
              I specialize in developing high-quality applications using the MERN stack
              (MongoDB, Express, React, Node.js) and Flutter for cross-platform
              Mobile App development. I'm also proficient in UI/UX design using Figma,
              enabling me to create seamless, user-friendly experiences.
            </p>
            
            <p className="text-lg">
              Beyond coding, I'm enthusiastic about solving algorithmic problems,
              which is reflected in my active participation on platforms like
              LeetCode, CodeChef, and CodeForces. This constant practice keeps
              my problem-solving skills sharp and helps me write efficient,
              optimized code.
            </p>
            
            <p className="text-lg">
              I'm constantly learning and exploring new technologies to stay at
              the forefront of development practices. My goal is to create
              elegant solutions that not only meet technical requirements but
              also provide exceptional user experiences.
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="card-hover p-6 rounded-lg border border-border bg-card">
                <h4 className="font-bold text-lg">Bachelor of Technology in Artificial Intelligence and Data Science</h4>
                <p className="text-primary mb-2">2023 - 2027</p>
                <p className="text-muted-foreground">
                  Sri Eshwar College of Engineering, with focus on algorithms, data structures,
                  and software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
