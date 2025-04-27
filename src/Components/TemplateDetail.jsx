import React from 'react';
import { useParams, Link } from 'react-router-dom';

const templates = {
  'agency-template': {
    name: 'Agency Landing Page',
    description: 'Modern, sleek design for digital agencies',
    fullImage: '/CreativeWeb/template/Agency.jpg',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Performance Optimized',
      'Easy Customization'
    ],
    demoLink: '#/testing' // Replace with actual demo link
  },
'real-estate-template': {
    name: 'Real Estate Landing Page',
    description: 'Modern, sleek design for real estate agencies',
    fullImage: '/CreativeWeb/houses/4.jpeg',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Performance Optimized',
      'Easy Customization'
    ],
    demoLink: '#/realtor' // Replace with actual demo link
  },
'soccer-template': {
    name: 'Football manager/Fan Page',
    description: 'Modern, sleek design for soccer agencies',
    fullImage: '/CreativeWeb/template/soccersite.jpg',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Performance Optimized',
      'Easy Customization'
    ],
    demoLink: '#/soccer' // Replace with actual demo link
  },
'ecommerce-template': {
    name: 'E-Commerce Page',
    description: 'Modern, sleek design for ecommerce platforms',
    fullImage: '/CreativeWeb/template/ecommerce.jpg',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Performance Optimized',
      'Easy Customization'
    ],
    demoLink: '#/e-commerce' // Replace with actual demo link
  },
'startup-template': {
    name: 'Startup Landing Page',
    description: 'Modern, sleek design for startup agencies',
    fullImage: '/CreativeWeb/template/startup.jpg',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Performance Optimized',
      'Easy Customization'
    ],
    demoLink: '#/startup' // Replace with actual demo link
  },
'portfolio-template': {
    name: 'Portfolio Landing Page',
    description: 'Modern, sleek design for portfolio websites',
    fullImage: '/CreativeWeb/template/portfolio.jpg',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Performance Optimized',
      'Easy Customization'
    ],
    demoLink: '#/portfolio' // Replace with actual demo link
  },
  // Add more template details as needed
};

const TemplateDetail = () => {
  const { templateId } = useParams();
  const template = templates[templateId];

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src={template.fullImage} 
            alt={template.name} 
            className="w-full h-[500px] object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {template.name}
            </h1>
            <p className="text-gray-600 mb-6">{template.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {template.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-600"
                    >
                      <span className="mr-2 text-blue-600">●</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <a 
                  href={template.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-center"
                >
                  View Live Demo
                </a>
                <Link 
                  to="/services"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition text-center"
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;