import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, ArrowUpRight } from 'lucide-react';

const StartupWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-change featured item
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      title: "Global Reach",
      description: "Connect with customers anywhere in the world",
      icon: <Globe className="text-blue-500" size={24} />
    },
    {
      title: "Lightning Fast",
      description: "Optimized for incredible performance",
      icon: <Zap className="text-yellow-500" size={24} />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security for all your data",
      icon: <Shield className="text-green-500" size={24} />
    },
    {
      title: "Smart Analytics",
      description: "AI-powered insights to grow your business",
      icon: <ArrowUpRight className="text-purple-500" size={24} />
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar with scroll animation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className={`font-bold text-xl ${scrollY > 50 ? 'text-blue-600' : 'text-white'}`}>Nova</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className={`${scrollY > 50 ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-300`}>
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 my-1.5 transition-all ${scrollY > 50 ? 'bg-gray-800' : 'bg-white'} ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 my-1.5 transition-all ${scrollY > 50 ? 'bg-gray-800' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 my-1.5 transition-all ${scrollY > 50 ? 'bg-gray-800' : 'bg-white'} ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 bg-white shadow-md' : 'max-h-0'}`}>
          <div className="container mx-auto px-6 py-2">
            {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block py-2 text-gray-800 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transforming Ideas Into 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Digital Reality</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                Launch your startup with our powerful platform. Grow faster, work smarter, and achieve more with Nova.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Get Started 
                  <ArrowRight className={`ml-2 transition-all duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} size={18} />
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl transform rotate-3 scale-95 opacity-50 absolute"></div>
                <div className="w-full h-64 md:h-96 bg-white rounded-xl shadow-2xl p-6 relative">
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">N</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">Nova Dashboard</h3>
                      <p className="text-gray-500 mt-2">Your startup's command center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to launch and grow your startup, all in one platform.</p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-100 rounded-xl p-8 h-full">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`mb-6 p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index ? 'bg-white shadow-lg' : 'hover:bg-white hover:shadow-md'}`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 flex items-center justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 w-full max-w-md shadow-xl">
                <div className="text-white mb-6">
                  <h3 className="font-bold text-xl">{features[activeFeature].title}</h3>
                  <p className="opacity-90 mt-2">Detailed view of selected feature</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-3">
                    <CheckCircle size={18} className="text-green-300 mr-2" />
                    <span className="text-white">Easy integration</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <CheckCircle size={18} className="text-green-300 mr-2" />
                    <span className="text-white">Real-time updates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-green-300 mr-2" />
                    <span className="text-white">Advanced customization</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
                  Explore Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to transform your business?</h2>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
            Start Your Free Trial
          </button>
          <p className="mt-4 text-gray-600">No credit card required. 14-day free trial.</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="font-bold text-xl text-white">Nova</span>
              </div>
              <p className="text-gray-400 max-w-xs">Empowering startups to reach their full potential with cutting-edge technology.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  {['Features', 'Pricing', 'Integrations', 'Changelog'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  {['About', 'Careers', 'Blog', 'Legal'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  {['Documentation', 'Help Center', 'Community', 'Contact'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2025 Nova. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map(platform => (
                  <a key={platform} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupWebsite;