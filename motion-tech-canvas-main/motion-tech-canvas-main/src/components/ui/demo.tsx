import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Concept 95",
    description: "Leading the future of cybersecurity with innovative protection solutions.",
    href: "/",
    cta: "Discover More",
    background: <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]">
      <img src="/img/pexels-luis-gomes-166706-546819.webp" alt="Concept 95" className="h-full w-full object-cover brightness-[0.6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Advanced Threat Detection",
    description: "State-of-the-art AI systems for real-time threat monitoring and prevention.",
    href: "/",
    cta: "Learn More",
    background: <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]">
      <img src="/img/pexels-johndetochka-9140593.webp" alt="Advanced Threat Detection" className="h-full w-full object-cover brightness-[0.6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Global Security Network",
    description: "Enterprise-grade security infrastructure with worldwide coverage.",
    href: "/",
    cta: "Explore",
    background: <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]">
      <img src="/img/pexels-cookiecutter-19166565.webp" alt="Global Security Network" className="h-full w-full object-cover brightness-[0.6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Security Assessment",
    description: "Comprehensive security audits and vulnerability assessments for your business.",
    href: "/",
    cta: "Schedule Now",
    background: <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]">
      <img src="/img/6538623.webp" alt="Security Assessment" className="h-full w-full object-cover brightness-[0.6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "24/7 Security Monitoring",
    description: "Round-the-clock threat detection and incident response services.",
    href: "/",
    cta: "Get Protected",
    background: <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]">
      <img src="/img/html-css-collage-concept-with-hacker.webp" alt="24/7 Security Monitoring" className="h-full w-full object-cover brightness-[0.6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export { features };

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
