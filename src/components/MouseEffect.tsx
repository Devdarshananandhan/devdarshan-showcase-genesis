
import React, { useEffect, useState } from "react";

export default function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    // Track hover state on interactive elements
    const handleMouseOverInteractive = () => setHovered(true);
    const handleMouseOutInteractive = () => setHovered(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effect on buttons, links, and interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .card-hover, input, .skill-card, .project-card'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOverInteractive);
      el.addEventListener("mouseleave", handleMouseOutInteractive);
    });
    
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOverInteractive);
        el.removeEventListener("mouseleave", handleMouseOutInteractive);
      });
    };
  }, []);

  if (typeof window === "undefined") return null;
  
  const cursorSize = clicked ? 12 : hovered ? 24 : 16;

  return (
    <>
      <div
        className={`cursor-custom bg-primary transition-all duration-300 ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : hovered ? "scale-150" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
      />

      {/* Add animated shapes in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        <div className="shape w-[500px] h-[500px] left-[10%] top-[20%]" />
        <div className="shape w-[300px] h-[300px] right-[5%] bottom-[20%]" />
        <div className="shape w-[400px] h-[400px] left-[30%] bottom-[10%]" />
      </div>
      <div className="background-grid" />
      <div className="background-gradient" />
    </>
  );
}
