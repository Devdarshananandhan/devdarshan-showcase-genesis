
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              DevDarshan<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} DevDarshan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
