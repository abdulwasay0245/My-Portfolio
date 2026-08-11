"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function ExtraordinaryElements() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Smooth out the mouse movement (Outer Ring)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Smooth out the mouse movement (Inner Dot)
  const innerCursorX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const innerCursorY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Extraordinary Element: Custom Follower Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderWidth: isHovering ? "0px" : "1px",
        }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[10000] hidden md:block mix-blend-difference"
        style={{
          x: innerCursorX,
          y: innerCursorY,
          marginLeft: "12px",
          marginTop: "12px",
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
      />

      {/* 2. Extraordinary Element: Bordered Circles */}
      <div className="fixed top-[-20vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full border-[1px] border-border/60 pointer-events-none -z-20 animate-[spin_60s_linear_infinite]" 
           style={{ borderStyle: 'dashed' }}>
      </div>
      
      <div className="fixed bottom-[-15vw] left-[-15vw] w-[40vw] h-[40vw] rounded-full border-[1px] border-border/40 pointer-events-none -z-20 animate-[spin_40s_linear_infinite_reverse]">
          {/* Inner orbit element to make the rotation visible */}
          <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-border -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </>
  );
}
