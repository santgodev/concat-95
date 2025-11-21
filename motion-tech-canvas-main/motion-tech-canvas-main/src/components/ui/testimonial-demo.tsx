import { useState, useRef } from "react";
import { Testimonial } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Amazun",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    testimonial: "This library has completely transformed how we build our UI components. The attention to detail and smooth animations make our application stand out. Highly recommended!"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Goggle",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    testimonial: "The components are well documented and easy to customize. The code quality is top-notch and the support is excellent. I'm very happy with my purchase."
  },
  {
    name: "Emily Chen",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    testimonial: "The accessibility features and design system consistency are impressive. It's saved us countless hours in development time."
  },
  {
    name: "Michael Rodriguez",
    role: "Frontend Developer",
    company: "Netflix",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    testimonial: "La mejor decisión que tomamos para nuestro proyecto. Los componentes son increíblemente flexibles y el soporte es excepcional."
  },
  {
    name: "Sofia Martínez",
    role: "Product Designer",
    company: "Apple",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    testimonial: "Una herramienta imprescindible para cualquier diseñador moderno. La calidad y atención al detalle son excepcionales."
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    company: "Microsoft",
    rating: 4,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    testimonial: "Excelente para equipos grandes. La consistencia en el diseño y la facilidad de mantenimiento son sobresalientes."
  }
];

export function TestimonialDemo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  return (
    <div className="relative group">
      <Button
        variant="outline"
        size="icon"
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/50 border-gray-800 hover:bg-gray-900 hover:border-indigo-500 transition-opacity z-10 ${
          showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-[350px] snap-center">
            <Testimonial {...testimonial} />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/50 border-gray-800 hover:bg-gray-900 hover:border-indigo-500 transition-opacity z-10 ${
          showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
} 