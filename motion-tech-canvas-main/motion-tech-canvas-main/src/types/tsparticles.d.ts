
declare module '@tsparticles/react' {
  import { ReactNode } from 'react';
  
  interface ParticlesProps {
    id?: string;
    className?: string;
    options?: any;
    particlesLoaded?: (container?: any) => Promise<void>;
    [key: string]: any;
  }
  
  export default function Particles(props: ParticlesProps): ReactNode;
  
  export function initParticlesEngine(callback: (engine: any) => Promise<void>): Promise<void>;
}

declare module '@tsparticles/engine' {
  export interface Container {
    [key: string]: any;
  }
  
  export type SingleOrMultiple<T> = T | T[];
}

declare module '@tsparticles/slim' {
  export function loadSlim(engine: any): Promise<void>;
}

declare module 'framer-motion' {
  import { ReactNode } from 'react';
  
  interface MotionProps {
    animate?: any;
    className?: string;
    [key: string]: any;
  }
  
  export function useAnimation(): {
    start: (props: any) => void;
    [key: string]: any;
  };
  
  export const motion: {
    div: (props: MotionProps) => ReactNode;
    [key: string]: any;
  };
}
