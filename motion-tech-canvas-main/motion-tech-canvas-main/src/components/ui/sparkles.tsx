"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import type { ISourceOptions } from "tsparticles-engine";

export type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export function SparklesCore({
  id,
  className,
  background,
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#FFFFFF",
  particleDensity = 100,
}: SparklesCoreProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 2500,
        },
      },
      color: {
        value: "#6366f1",
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.8, max: 1.5 },
        animation: {
          enable: true,
          speed: 0.4,
          sync: false,
          startValue: "min",
          destroy: "max",
        },
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "destroy",
        },
        trail: {
          enable: true,
          length: 3,
          fill: { color: "transparent" },
        },
      },
      opacity: {
        value: { min: 0.4, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.2,
          sync: false,
        },
      },
      life: {
        duration: {
          sync: false,
          value: 30,
        },
        count: 1,
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    detectRetina: true,
    style: {
      filter: "none",
    },
  };

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      options={options}
    />
  );
}
