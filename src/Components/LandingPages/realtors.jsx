import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Home, Map, Phone, Mail, Menu, X } from 'lucide-react';

const LuxuryRealEstate = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProperty, setActiveProperty] = useState(0);

  // Properties data
  const properties = [
    {
      id: 1,
      title: "Modern Waterfront Villa",
      price: "$2,450,000",
      beds: 5,
      baths: 4,
      sqft: 3850,
      location: "Miami Beach, FL",
      imageIndex: 1,
      image: '/CreativeWeb/houses/1.jpeg'
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      price: "$3,200,000",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      location: "Downtown, NY",
      imageIndex: 2,
      image: '/CreativeWeb/houses/2.jpeg'
    },
    {
      id: 3,
      title: "Elegant Country Estate",
      price: "$4,750,000",
      beds: 6,
      baths: 5,
      sqft: 5500,
      location: "Aspen, CO",
      imageIndex: 3,
      image: '/CreativeWeb/houses/3.jpeg'
    }
    ,
    {
      id: 4,
      title: "Elegant  Estate",
      price: "$4,750,000",
      beds: 6,
      baths: 5,
      sqft: 5500,
      location: "Aspen, CO",
      imageIndex: 3,
      image: '/CreativeWeb/houses/4.jpeg'
    }
  ];

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate featured properties
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProperty((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [properties.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-indigo-600">Luxury</span>
            <span className={scrolled ? 'text-gray-800' : 'text-white'}>Homes</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`transition-colors ${scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300'}`}>Home</a>
            <a href="#properties" className={`transition-colors ${scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300'}`}>Properties</a>
            <a href="#services" className={`transition-colors ${scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300'}`}>Services</a>
            <a href="#about" className={`transition-colors ${scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300'}`}>About</a>
            <a href="#contact" className={`transition-colors ${scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300'}`}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 
              <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : 
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-slideDown">
            <div className="flex flex-col px-4 py-6 space-y-4">
              <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#properties" className="text-gray-800 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Properties</a>
              <a href="#services" className="text-gray-800 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url('/CreativeWeb/houses/bg.jpeg')` }}
        ></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 animate-fadeIn">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fadeIn animation-delay-300">
            Discover exceptional properties in the most prestigious locations worldwide
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row animate-slideUp">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
              <div className="relative">
                <input type="text" placeholder="City, Neighborhood, or ZIP" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <Map className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Price Range</label>
              <div className="relative">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none">
                  <option>Any Price</option>
                  <option>$500,000 - $1,000,000</option>
                  <option>$1,000,000 - $2,000,000</option>
                  <option>$2,000,000 - $5,000,000</option>
                  <option>$5,000,000+</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="flex items-end">
              <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center justify-center">
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="#properties" className="inline-block animate-bounce">
              <ChevronDown size={36} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our handpicked selection of exceptional properties that define luxury living</p>
          </div>
          
          {/* Featured Property Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeProperty * 100}%)` }}>
              {properties.map((property, index) => (
                <div key={property.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                      <p className="text-indigo-600 text-xl font-bold mb-4">{property.price}</p>
                      <p className="text-gray-600 mb-6">{property.location}</p>
                      
                      <div className="flex mb-8">
                        <div className="mr-6">
                          <span className="text-gray-900 font-medium block">{property.beds}</span>
                          <span className="text-gray-500 text-sm">Bedrooms</span>
                        </div>
                        <div className="mr-6">
                          <span className="text-gray-900 font-medium block">{property.baths}</span>
                          <span className="text-gray-500 text-sm">Bathrooms</span>
                        </div>
                        <div>
                          <span className="text-gray-900 font-medium block">{property.sqft.toLocaleString()}</span>
                          <span className="text-gray-500 text-sm">Sq Ft</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                          View Details
                        </button>
                        <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2 px-6 rounded-md transition-colors">
                          Schedule Tour
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {properties.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveProperty(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === activeProperty ? 'bg-indigo-600' : 'bg-gray-300'}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-8 rounded-md transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive real estate solutions tailored to your unique needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Home Sales",
                description: "Expert guidance for buying or selling high-end properties in prestigious locations",
                icon: <Home size={24} />
              },
              {
                title: "Property Management",
                description: "Comprehensive management services to maximize your investment returns",
                icon: <Home size={24} />
              },
              {
                title: "Investment Consulting",
                description: "Strategic advice for building a profitable real estate investment portfolio",
                icon: <Home size={24} />
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transform transition-transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-indigo-100">Hear from our satisfied clients about their experience</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 text-center">
              <div className="mb-8">
                <svg className="mx-auto h-12 w-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
              </div>
              <p className="text-xl italic mb-8">Working with Luxury Homes was an absolute pleasure. Their team understood exactly what we were looking for and found us our dream home in record time. The entire process was smooth and professional.</p>
              <div>
                <h4 className="font-bold text-lg">Elizabeth Mitchell</h4>
                <p className="text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-12 max-w-lg">We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-indigo-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-indigo-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@luxuryhomes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-indigo-600">
                    <Map size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">123 Park Avenue, New York, NY 10017</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                <form>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ELITE<span className="text-blue-400">REALTY</span></h3>
            <p className="text-gray-400 mb-4">Providing premium real estate services since 2005. Your trusted partner in finding the perfect property.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Home</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Properties</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Agents</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate Avenue</li>
              <li>New York, NY 10001</li>
              <li>info@eliterealty.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Get the latest property listings and market updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md text-gray-800 outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EliteRealty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryRealEstate;