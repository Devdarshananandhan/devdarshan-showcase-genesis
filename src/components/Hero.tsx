
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Developer", "Flutter Developer", "UI/UX Designer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 120;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex >= currentRole.length) {
          setIsDeleting(true);
          // Pause at the end of typing
          setTimeout(() => {}, 1500);
        }
      } else {
        // Deleting
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex <= 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    };
    
    const typeTimer = setTimeout(type, typeSpeed);
    return () => clearTimeout(typeTimer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
            <p className="text-lg md:text-xl mb-2 text-primary font-medium opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
              DevDarshan
            </h1>
            <div className="h-8 md:h-10 mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <span className="typing-text text-lg md:text-xl">
                {typedText}
              </span>
            </div>
            <p className="text-base md:text-lg mb-8 mx-auto md:mx-0 text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
              Transforming ideas into exceptional digital experiences with code and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
              <a href="#projects" className="custom-button">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 border border-border rounded-lg font-medium 
                         transition-colors hover:bg-secondary hover:border-primary"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <Avatar className="w-64 h-64 border-4 border-primary shadow-xl">
              <AvatarImage src="/placeholder.svg" alt="DevDarshan" />
              <AvatarFallback className="text-4xl">DD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-sm gap-2">
          <span className="opacity-70">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
