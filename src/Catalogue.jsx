import React, { useState } from 'react';
import { Menu, Layers, Send, Star, Code, PaletteIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPageCatalog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const ServicesRedir = () => {
    navigate('/services');
   };

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Web Development",
      description: "Bespoke websites tailored to your unique business needs."
    },
    {
      icon: <PaletteIcon className="w-12 h-12 text-purple-600" />,
      title: "UI/UX Design",
      description: "Intuitive and stunning user interfaces that captivate your audience."
    },
    {
      icon: <Layers className="w-12 h-12 text-green-600" />,
      title: "Responsive Design",
      description: "Seamless experiences across all devices and screen sizes."
    }
  ];

  const portfolioItems = [
    { image: "/CreativeWeb/template/ecommerce.jpg", title: "E-commerce Platform" },
    { image: "/CreativeWeb/template/startup.jpg", title: "Corporate Website" },
    { image: "/CreativeWeb/template/realestate.jpg", title: "Real Estate Landing Page" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">CreativeWeb</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#/home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#/services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="https://suwilanjitrey.github.io/" className="text-gray-700 hover:text-blue-600 transition">About me</a>
            <a href="#/Contact-me" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Contact Us</a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-8 h-8 text-gray-800" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-6">
              <a href="#/home" className="text-gray-700">Home</a>
              <a href="#/services" className="text-gray-700">Services</a>
              <a href="https://suwilanjitrey.github.io/" className="text-gray-700">About me</a>
              <a href="#/Contact-me" className="bg-blue-600 text-white px-4 py-2 rounded-full">Contact me</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 px-4 text-center bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Transforming Ideas into Digital Experiences
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We craft stunning, functional websites that elevate your brand and engage your audience.
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition inline-block shadow-lg"
          >
            Get Started
          </a>
        </div>
      </header>


{/* Portfolio Section */}
<section id="portfolio" className="pt-4 pb-16 px-4 bg-gray-900 relative">
  {/* Main content container */}
  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Catalog</h2>

        {/* Grid container with relative positioning for the glow effect */}
    <div className="relative">
      {/* The actual grid */}
      <div className="grid md:grid-cols-3 gap-8 relative z-0">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom glow effect */}
      

    <div className="flex items-center justify-center mt-12 relative">
      <button
        onClick={ServicesRedir}
        className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 z-20"
      >
        <span
          className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
        ></span>
        <div className="flex items-center">
          <span className="ml-1 text-white">See More</span>
        </div>
        <div className="ml-2 flex items-center gap-1 text-sm md:flex">
          <svg
            className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              fillRule="evenodd"
            ></path>
          </svg>
          <span
            className="inline-block tabular-nums tracking-wider font-display font-medium text-white"
          ></span>
        </div>
      </button>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-10"></div>
    </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Let's Create Something Amazing</h2>
          <p className="text-white mb-8">
            Ready to bring your digital vision to life? Reach out and let's discuss your project.
          </p>
          <a 
            href="#/Contact-me" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">CreativeWeb</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition">Dribbble</a>
            <a href="#" className="hover:text-blue-400 transition">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageCatalog;