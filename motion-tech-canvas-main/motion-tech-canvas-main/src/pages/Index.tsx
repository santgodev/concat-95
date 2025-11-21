import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BentoDemo } from "@/components/ui/demo";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowLeft, ArrowRight, Shield, Lock, Users, Zap, Code, Server, Brain } from "lucide-react";
import { TestimonialDemo } from "@/components/ui/testimonial-demo";
import { ScrollSparkles } from "@/components/ui/scroll-sparkles";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "@/components/ui/header";
import { LandingHero } from "@/components/ui/landing-hero";

const placeholderImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=2940&auto=format&fit=crop"
];

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Protection",
    description: "Next-generation enterprise security solutions"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Encryption",
    description: "Military-grade data protection"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Security",
    description: "Collaborative security management"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Defense",
    description: "Instant threat detection and response"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Code Analysis",
    description: "In-depth vulnerability assessment"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Secure Infrastructure",
    description: "Protected network architecture"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Predictive AI",
    description: "AI-powered threat prevention"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Regulatory Compliance",
    description: "Automated regulation management"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Smart Backup",
    description: "Advanced data backup and recovery"
  }
];

export { features };

const testimonials = [
  {
    name: "John Smith",
    role: "CISO, Fortune 500",
    content: "Concept 95 has revolutionized our security infrastructure. Their solutions are cutting-edge and reliable.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Sarah Johnson",
    role: "Security Director",
    content: "The advanced threat detection capabilities have saved us from multiple potential breaches.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Michael Chen",
    role: "IT Security Manager",
    content: "Best-in-class security solutions with exceptional support and monitoring.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const Index = () => {
  // Slider para features
  const [activeFeature, setActiveFeature] = useState(0);
  // Slider para bento
  const [activeBento, setActiveBento] = useState(0);

  const handlePrevFeature = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };
  const handleNextFeature = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  // Detectar si es móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <HelmetProvider>
      <Helmet>
        <title>Concept - Enterprise Cybersecurity Solutions</title>
        <meta name="description" content="Leading provider of enterprise cybersecurity solutions. Advanced protection, encryption, and AI-powered security for your business." />
        <meta name="keywords" content="cybersecurity, enterprise security, data protection, AI security, network security" />
        <meta property="og:title" content="Concept - Enterprise Cybersecurity Solutions" />
        <meta property="og:description" content="Leading provider of enterprise cybersecurity solutions. Advanced protection, encryption, and AI-powered security for your business." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://concept.com" />
      </Helmet>

      <main className="min-h-screen bg-fixed bg-gradient-to-br from-black via-gray-950 to-neutral-900 text-white flex flex-col">
        <Header />
        <ParticlesBackground particleCount={30} particleColor="rgba(139, 92, 246, 0.5)" />
        <SparklesCore id="tsparticles" particleDensity={30} />
        {/* <ScrollSparkles /> */}
        
        {/* Hero Section */}
        <LandingHero />

        {/* Features Section */}
        <section className="py-20 px-4" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto">
            <h2 
              id="features-heading"
              className="text-3xl font-bold text-center mb-12 opacity-0 translate-y-5 animate-fade-in-down"
            >
              Key Security Features
            </h2>
            {/* Mobile: slider con botones */}
            <div className="block md:hidden">
              <div className="flex justify-center items-center gap-4 mb-6">
                <button onClick={handlePrevFeature} className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex-1">
                  <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all hover:scale-105 opacity-0 translate-y-5 animate-fade-in-card" role="listitem">
                    <div className="text-purple-400 mb-4" aria-hidden="true">{features[activeFeature].icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{features[activeFeature].title}</h3>
                    <p className="text-gray-400">{features[activeFeature].description}</p>
                  </div>
                </div>
                <button onClick={handleNextFeature} className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-center gap-1 mt-2">
                {features.map((_, idx) => (
                  <span key={idx} className={`w-2 h-2 rounded-full ${idx === activeFeature ? 'bg-purple-500' : 'bg-gray-700'}`}></span>
                ))}
              </div>
            </div>
            {/* Desktop: grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all hover:scale-105 opacity-0 translate-y-5 animate-fade-in-card"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                  role="listitem"
                >
                  <div className="text-purple-400 mb-4" aria-hidden="true">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Bento Grid Section */}
        {/* <section className="py-20 px-4 bg-gray-900/30">
          <BentoDemo />
        </section> */}

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900/30" aria-labelledby="stats-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="stats-heading" className="sr-only">Our Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" role="list">
              <div className="p-6" role="listitem">
                <div className="text-4xl font-bold text-purple-400 mb-2" aria-label="500 plus Enterprise Clients">500+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div className="p-6" role="listitem">
                <div className="text-4xl font-bold text-purple-400 mb-2" aria-label="99.9 percent Uptime Guarantee">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="p-6" role="listitem">
                <div className="text-4xl font-bold text-purple-400 mb-2" aria-label="24/7 Security Monitoring">24/7</div>
                <div className="text-gray-400">Security Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
            <TestimonialDemo />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of enterprises trusting Concept for their cybersecurity needs
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" aria-label="Schedule Security Assessment">
              Schedule Security Assessment
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 px-4 mt-auto" role="contentinfo">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Concept. All rights reserved.</p>
            <p className="mt-2 text-sm">Securing the Future of Technology</p>
          </div>
        </footer>
      </main>
    </HelmetProvider>
  );
};

export default Index;
