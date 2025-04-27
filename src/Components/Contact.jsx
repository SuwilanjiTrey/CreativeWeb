import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Info Section */}
            <div className="bg-gray-700 bg-opacity-50 p-8 md:p-12">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-indigo-300">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  I'm open to freelance opportunities, collaborations, and interesting projects.
                  Feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="flex items-center group"
                  >
                    <div className="bg-indigo-600 p-3 rounded-lg mr-4 group-hover:bg-indigo-500 transition-colors">
                      <Mail size={24} />
                    </div>
                    <span className="text-lg group-hover:text-indigo-300 transition-colors">your.email@example.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="bg-indigo-600 p-3 rounded-lg mr-4 group-hover:bg-indigo-500 transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <span className="text-lg group-hover:text-indigo-300 transition-colors">linkedin.com/in/yourprofile</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">Office Hours</h3>
                <p className="text-gray-300 mb-2">Monday - Friday: 9AM - 6PM</p>
                <p className="text-gray-300">Saturday - Sunday: By appointment</p>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-indigo-300">Send Me a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-900 bg-opacity-40 rounded-lg p-6 text-center flex flex-col items-center justify-center h-full">
                  <CheckCircle size={64} className="text-green-400 mb-4" />
                  <p className="text-xl font-medium mb-2">Thank you!</p>
                  <p className="text-gray-300">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;