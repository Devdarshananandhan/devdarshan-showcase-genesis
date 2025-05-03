
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Generate stars
    const starCount = Math.floor(window.innerWidth * window.innerHeight / 3000);
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01
      });
    }

    // Animation
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Star color based on theme
      const starColor = theme === 'dark' ? 'rgba(255, 255, 255,' : 'rgba(78, 78, 180,';
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${starColor}${star.opacity})`;
        ctx.fill();
        
        // Move stars downward
        star.y += star.speed;
        
        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Add occasional twinkling effect
      if (Math.random() > 0.97) {
        const twinkleStar = stars[Math.floor(Math.random() * stars.length)];
        if (twinkleStar) {
          twinkleStar.opacity = Math.min(1, twinkleStar.opacity + 0.3);
          setTimeout(() => {
            if (twinkleStar) twinkleStar.opacity = Math.max(0.2, twinkleStar.opacity - 0.3);
          }, 100);
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-10] pointer-events-none"
      aria-hidden="true"
    />
  );
}
