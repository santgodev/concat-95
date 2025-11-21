
import React from "react";
import { cn } from "@/lib/utils";

// Placeholder version of SparklesCore that displays a simple animation
// This is used until the actual @tsparticles dependencies can be installed
export const SparklesCorePlaceholder = (props: {
  id?: string;
  className?: string;
  background?: string;
  particleColor?: string;
}) => {
  const { id, className, background, particleColor } = props;
  
  // Create an array of particles with pre-computed random values
  const particles = React.useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.1,
      animationDuration: `${Math.random() * 4 + 3}s`,
      animationDelay: `${Math.random() * 2}s`,
      transform: `translateY(${Math.random() * 20 - 10}px)`,
    }));
  }, []);
  
  return (
    <div 
      id={id} 
      className={cn("opacity-100 relative overflow-hidden", className)}
      style={{ background: background || "transparent" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {particles.map((particle, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${i % 2 === 0 ? 'animate-pulse' : 'animate-bounce'}`}
              style={{
                backgroundColor: particleColor || "#ffffff",
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: `${particle.y}%`,
                left: `${particle.x}%`,
                opacity: particle.opacity,
                animationDuration: particle.animationDuration,
                animationDelay: particle.animationDelay,
                transform: particle.transform,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
