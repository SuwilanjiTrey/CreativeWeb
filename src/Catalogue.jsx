import React, { useState, useEffect } from 'react';
import { Menu, Layers, Send, Star, Code, Palette, ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPageCatalog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Web Development",
      description: "Bespoke websites tailored to your unique business needs with cutting-edge technologies.",
      features: ["React & Next.js", "Full-stack Solutions", "API Integration", "Performance Optimization"],
      gradient: "from-blue-500 to-cyan-500",
      link: "/services/web-development"
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "UI/UX Design",
      description: "Intuitive and stunning user interfaces that captivate your audience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-purple-500 to-pink-500",
      link: "/services/ui-ux-design"
    },
    {
      icon: <Layers className="w-12 h-12 text-green-600" />,
      title: "Responsive Design",
      description: "Seamless experiences across all devices and screen sizes with modern responsive techniques.",
      features: ["Mobile-First", "Cross-Browser", "Touch Optimized", "Accessibility"],
      gradient: "from-green-500 to-teal-500",
      link: "/services/responsive-design"
    }
  ];

  const portfolioItems = [
    { 
      image: "/CreativeWeb/template/ecommerce.jpg", 
      title: "E-commerce Platform",
      tech: "React, Node.js, Stripe",
      description: "Modern e-commerce solution with seamless checkout"
    },
    { 
      image: "/CreativeWeb/template/startup.jpg", 
      title: "Corporate Website",
      tech: "Next.js, Tailwind CSS",
      description: "Professional corporate presence with dynamic content"
    },
    { 
      image: "/CreativeWeb/template/realestate.jpg", 
      title: "Real Estate Landing Page",
      tech: "React, Framer Motion",
      description: "Interactive property showcase with smooth animations"
    }
  ];

  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (!hasStarted) return;
      
      const increment = end / (duration / 50);
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          if (next >= end) {
            clearInterval(timer);
            return end;
          }
          return next;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [hasStarted, end, duration]);

    useEffect(() => {
      const timer = setTimeout(() => setHasStarted(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return <span>{Math.floor(count)}{suffix}</span>;
  };

  const FloatingElement = ({ children, delay = 0, className = "" }) => {
    return (
      <div 
        className={`animate-float ${className}`}
        style={{
          animation: `float 6s ease-in-out infinite`,
          animationDelay: `${delay}s`
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CreativeWeb
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#/home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Home</a>
            <a href="#/services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Services</a>
            <a href="https://suwilanjitrey.github.io/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">About me</a>
            <a href="#/Contact-me" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect absolute w-full shadow-lg animate-slideDown">
            <div className="flex flex-col items-center space-y-4 py-6">
              <a href="#/home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="https://suwilanjitrey.github.io/" className="text-gray-700 hover:text-blue-600 transition-colors">About me</a>
              <a href="#/Contact-me" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                Contact me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0} className="absolute top-20 left-10 text-blue-200 opacity-20">
            <Code className="w-20 h-20" />
          </FloatingElement>
          <FloatingElement delay={1} className="absolute top-40 right-20 text-purple-200 opacity-20">
            <Palette className="w-16 h-16" />
          </FloatingElement>
          <FloatingElement delay={2} className="absolute bottom-40 left-20 text-green-200 opacity-20">
            <Layers className="w-24 h-24" />
          </FloatingElement>
          <FloatingElement delay={0.5} className="absolute bottom-20 right-10 text-pink-200 opacity-20">
            <Sparkles className="w-18 h-18" />
          </FloatingElement>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Transforming Ideas into{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We craft stunning, functional websites that elevate your brand and engage your audience with cutting-edge design and technology.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#/services" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://Suwilanjitrey.github.io" 
                className="group text-gray-700 px-8 py-4 rounded-full text-lg hover:text-blue-600 transition-colors inline-flex items-center border-2 border-gray-300 hover:border-blue-600"
              >
                View Portfolio
                <Globe className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions designed to bring your vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate(service.link)}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:scale-105 font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Services
              <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the digital experiences we've crafted for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden hover-lift border border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-blue-300 mb-1">{item.tech}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                    <span>View Project</span>
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <span className="relative flex items-center">
                See More Projects
                <Star className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient relative overflow-hidden">
        <FloatingElement delay={0} className="absolute top-10 left-10 text-white opacity-10">
          <Send className="w-16 h-16" />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute bottom-10 right-10 text-white opacity-10">
          <Sparkles className="w-20 h-20" />
        </FloatingElement>
        
        <div className="max-w-lg mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Create Something Amazing</h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            Ready to bring your digital vision to life? Let's collaborate and create something extraordinary together.
          </p>
          <a 
            href="#/Contact-me" 
            className="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                CreativeWeb
              </div>
              <p className="text-gray-400">Transforming ideas into digital experiences</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/suwilanji-chellah-01a534239" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="#/services" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a 
                href="#/Contact-me" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 CreativeWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageCatalog;
