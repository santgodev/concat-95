"use client"

import { useEffect, useState } from "react";
import { SparklesCore } from "./sparkles";

export const ScrollSparkles = () => {
  const [showSparkles, setShowSparkles] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Mostrar las partículas inmediatamente
      setShowSparkles(true);
      setOpacity(1);
      
      // Limpiar los timeouts anteriores si existen
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      
      // Iniciar el desvanecimiento después de 2000ms
      fadeTimeout = setTimeout(() => {
        setOpacity(0);
      }, 2000);
      
      // Ocultar completamente después de que termine el desvanecimiento
      hideTimeout = setTimeout(() => {
        setShowSparkles(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);

  if (!showSparkles) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ transition: 'opacity 1s ease-out', opacity }}>
      <SparklesCore 
        id="scroll-sparkles"
        className="opacity-100"
        particleDensity={100}
        minSize={3}
        maxSize={6}
        speed={0.3}
        particleColor="#e9d5ff"
      />
    </div>
  );
}; 