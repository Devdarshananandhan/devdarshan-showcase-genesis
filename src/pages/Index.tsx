
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodeProfiles from "@/components/CodeProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseEffect from "@/components/MouseEffect";
import StarBackground from "@/components/StarBackground";
import { ThemeProvider } from "@/context/ThemeContext";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "DevDarshan | Full Stack Developer";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <MouseEffect />
        <StarBackground />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodeProfiles />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
