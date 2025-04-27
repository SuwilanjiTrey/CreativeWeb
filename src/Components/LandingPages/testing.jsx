import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Craft Your Dream Website</h1>
          <p className="text-xl md:text-2xl mb-8">We build stunning, high-performance websites tailored to your vision.</p>
          <a href="#quote" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Custom Web Design</h3>
            <p className="text-gray-400">Tailored designs that reflect your brand’s unique identity.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-400">Robust online stores designed to drive sales and growth.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">SEO & Performance</h3>
            <p className="text-gray-400">Optimized for speed and search engine visibility.</p>
          </div>
        </div>
      </div>

      {/* Quote CTA */}
      <div id="quote" className="bg-blue-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Get a free, no-obligation quote today and let’s bring your vision to life.</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition duration-300">
            Request a Quote
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Your Email" className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <textarea placeholder="Your Message" rows="5" className="bg-gray-700 text-white p-4 rounded-lg mt-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-full mt-6 hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;