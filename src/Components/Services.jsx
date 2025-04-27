import React, { useState } from 'react';
import { 
  Code, 
  PenTool, 
  Globe, 
  Database, 
  Mail, 
  Menu, 
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';


const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('webDesign');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const websiteTemplates = [
    {
      id: 'agency-template',
      name: 'Agency Landing Page',
      description: 'Modern, sleek design for digital agencies',
      thumbnail: '/CreativeWeb/template/Agency.jpg', 
    },
    {
      id: 'real-estate-template',
      name: 'real estate website',
      description: 'Clean, minimalist real estate agencies',
      thumbnail: '/CreativeWeb/houses/4.jpeg', 
    },
    {
      id: 'portfolio-template',
      name: 'Personal Portfolio',
      description: 'Clean, minimalist portfolio showcase',
      thumbnail: '/CreativeWeb/template/portfolio.jpg', 
    },
    {
      id: 'ecommerce-template',
      name: 'E-commerce Store',
      description: 'Responsive online store template',
      thumbnail: '/CreativeWeb/template/ecommerce.jpg', // Replace with your actual image path
    },
    {
      id: 'startup-template',
      name: 'Startup Landing Page',
      description: 'Vibrant design for tech startups',
      thumbnail: '/CreativeWeb/template/startup.jpg', // Replace with your actual image path
    },
    {
      id: 'soccer-template',
      name: 'soccer-template',
      description: 'Responsive soccer management template',
      thumbnail: '/CreativeWeb/template/soccersite.jpg', // Replace with your actual image path
    }
  ];

  // New Branding Templates
  const brandingTemplates = [
    {
      id: 'corporate-identity',
      name: 'Corporate Identity',
      description: 'Professional branding for established businesses',
      thumbnail: '/CreativeWeb/logos/2.png', // Replace with your actual image path
    },
    {
      id: 'startup-branding',
      name: 'Startup Branding',
      description: 'Modern branding for new businesses',
      thumbnail: '/CreativeWeb/logos/13.png', // Replace with your actual image path
    },
    {
      id: 'minimalist-logo',
      name: 'Minimalist Logo',
      description: 'Clean, simple logo designs',
      thumbnail: '/CreativeWeb/logos/4.png', // Replace with your actual image path
    },
    {
      id: 'brand-guidelines',
      name: 'Brand Guidelines',
      description: 'Comprehensive brand style guides',
      thumbnail: '/CreativeWeb/logos/14.png', // Replace with your actual image path
    }
  ];

  // New Web Services Templates
  const webServicesTemplates = [
    {
      id: 'email-automation',
      name: 'Email Automation',
      description: 'Automated email marketing solutions',
      thumbnail: '/CreativeWeb/gmail.jpg', // Replace with your actual image path
    },
    {
      id: 'crm-integration',
      name: 'CRM Integration',
      description: 'Customer relationship management solutions',
      thumbnail: '/CreativeWeb/crm.jpg', // Replace with your actual image path
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'Custom API solutions for business needs',
      thumbnail: '/CreativeWeb/api.jpg', // Replace with your actual image path
    },
    {
      id: 'cloud-database',
      name: 'Cloud Database',
      description: 'Scalable cloud database implementations',
      thumbnail: '/CreativeWeb/cloud.jpg', // Replace with your actual image path
    }
  ];


  const serviceCategories = {
    webDesign: {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Design & Development",
      services: [
        {
          title: "Custom Website Design",
          description: "Fully customized websites tailored to your brand's unique identity and business goals.",
          features: [
            "Responsive Design",
            "Modern UI/UX",
            "SEO Optimization",
            "Performance Tuning"
          ],
          templates: websiteTemplates
        },
        {
          title: "E-commerce Websites",
          description: "Robust online stores with seamless shopping experiences and secure payment integrations.",
          features: [
            "Product Catalog Management",
            "Payment Gateway Integration",
            "Inventory Tracking",
            "Customer Dashboard"
          ]
        }
      ]
    },
    branding: {
      icon: <PenTool className="w-12 h-12 text-purple-600" />,
      title: "Branding & Design",
      services: [
        {
          title: "Logo Design",
          description: "Distinctive and memorable brand identities that stand out in the marketplace.",
          features: [
            "Multiple Concept Iterations",
            "Vector File Formats",
            "Brand Style Guide",
            "Unlimited Revisions"
          ],
          templates: brandingTemplates
        },
        {
          title: "Corporate Branding",
          description: "Comprehensive branding solutions that create a cohesive visual identity.",
          features: [
            "Brand Strategy",
            "Visual Identity Design",
            "Marketing Collateral",
            "Brand Guidelines"
          ]
        }
      ]
    },
    webServices: {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Web Services & Integrations",
      services: [
        {
          title: "Email & Communication Services",
          description: "Professional email solutions and communication platform integrations.",
          features: [
            "Custom Email Domains",
            "Email Marketing Tools",
            "CRM Integration",
            "Communication Platform Setup"
          ],
          templates: webServicesTemplates
        },
        {
          title: "Database & Backend Solutions",
          description: "Robust backend infrastructures with secure and scalable database management.",
          features: [
            "Database Design",
            "Data Migration",
            "API Development",
            "Cloud Database Solutions"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Navigation */}
      <nav className="relative w-full z-50 bg-white shadow-md">
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
              <a href="#/Contact-me" className="bg-blue-600 text-white px-4 py-2 rounded-full">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Services Layout */}
      <div className="py-20 px-4 grid md:grid-cols-3 gap-8 ml-[-6px]">
        {/* Category Sidebar */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-xl p-6 w-80">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Service Categories</h2>
          {Object.keys(serviceCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 flex items-center justify-between transition ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="flex items-center">
                {serviceCategories[category].icon}
                <span className="ml-3 font-medium">
                  {serviceCategories[category].title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="col-span-2 space-y-8 ml-[-40px] md:w-1000 ml-[-30] ">
          {serviceCategories[activeCategory].services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 w-274 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-700">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-600"
                      >
                        <span className="mr-2 text-blue-600">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-end justify-end">
                  <a 
                    href="#/Contact-me" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Website Templates Section */}
              {service.templates && (
                <div className="mt-10">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Our {activeCategory === 'webDesign' ? 'Website Templates' : activeCategory === 'branding' ? 'Branding Examples' : 'Service Examples'}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.templates.map((template) => (
                      <Link 
                        to={`/templates/${template.id}`} 
                        key={template.id}
                        className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                      >
                        <div className="relative overflow-hidden">
                          <img 
                            src={template.thumbnail || "/api/placeholder/400/320"} 
                            alt={template.name} 
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform lazyload"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">
                            {template.name}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {template.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Consultation CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-white mb-6 max-w-2xl mx-auto">
          Every business is unique. Let's discuss how we can create a tailored digital strategy 
          that perfectly fits your specific needs and goals.
        </p>
        <a 
          href="#/Contact-me" 
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition"
        >
          Book a Consultation
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;