import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    subject: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

  // Your WhatsApp number (replace with your actual number)
  const WHATSAPP_NUMBER = '+260971168716'; // Replace with your WhatsApp number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = () => {
    const { name, email, message, phone, subject } = formData;
    
    // Create WhatsApp message
    const whatsappMessage = `*New Project Inquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message}\n\n` +
      `---\n_Sent from CreativeWeb Contact Form_`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setFormStatus({
      submitted: true,
      success: true,
      message: "Redirecting to WhatsApp... Your message has been prepared!",
      loading: false
    });
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', phone: '', subject: '' });
      setFormStatus({ submitted: false, success: false, message: '', loading: false });
    }, 3000);
  };

  // EmailJS function (dormant for now)
  const sendEmailJS = async (templateParams) => {
    try {
      // Uncomment and configure when ready to use EmailJS
      /*
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
      );
      
      if (response.status === 200) {
        console.log('Email sent successfully!');
        return { success: true, message: 'Email sent successfully!' };
      }
      */
      
      // For now, just log the parameters
      console.log('EmailJS would send:', templateParams);
      return { success: true, message: 'Email function is ready (currently dormant)' };
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      return { success: false, message: 'Failed to send email' };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.',
        loading: false
      });
      return;
    }

    setFormStatus(prev => ({ ...prev, loading: true }));

    // Prepare EmailJS parameters
    const emailTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_name: 'CreativeWeb Team',
      reply_to: formData.email,
    };

    try {
      // Call EmailJS function (dormant)
      const emailResult = await sendEmailJS(emailTemplateParams);
      
      // Send to WhatsApp (active)
      sendToWhatsApp();
      
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again.',
        loading: false
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-pulse-scale {
          animation: pulse 2s infinite;
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you and bring your vision to life!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Quick Contact Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                  <p className="text-gray-400">Quick response guaranteed</p>
                </div>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Send Message</span>
                <Send size={16} className="ml-2" />
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-gray-400">Professional inquiries</p>
                </div>
              </div>
              <a 
                href="mailto:suwilanjichellah0228@gmail.com"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <span>suwilanjichellah0228@gmail.com</span>
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
                  <p className="text-gray-400">Professional network</p>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/in/suwilanji-chellah-01a534239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Connect with me</span>
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Availability</h3>
                  <p className="text-gray-400">Ready to start your project</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">Monday - Friday: 9AM - 6PM</p>
                <p className="text-gray-300">Saturday - Sunday: By appointment</p>
                <p className="text-green-400 font-medium">Currently accepting new projects</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-6 text-white">Send Me a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-xl p-8 text-center border border-green-500/30">
                  <CheckCircle size={64} className="text-green-400 mb-4 mx-auto animate-pulse-scale" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                  <p className="text-gray-300 mb-4">{formStatus.message}</p>
                  <p className="text-sm text-gray-400">Redirecting you to WhatsApp...</p>
                </div>
              ) : formStatus.submitted && !formStatus.success ? (
                <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-xl p-6 text-center border border-red-500/30 mb-6">
                  <AlertCircle size={48} className="text-red-400 mb-3 mx-auto" />
                  <p className="text-red-300">{formStatus.message}</p>
                </div>
              ) : null}

              {!formStatus.submitted && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                        placeholder="+260 123 456 789"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                        placeholder="Project type or inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={formStatus.loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    {formStatus.loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle size={20} />
                        <span>Send via WhatsApp</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you'll be redirected to WhatsApp where your message will be pre-formatted and ready to send.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Why Choose CreativeWeb?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Quick Response</h4>
                <p className="text-gray-400 text-center">Get a response within 24 hours via WhatsApp or email</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Quality Guaranteed</h4>
                <p className="text-gray-400 text-center">Professional work with attention to detail and modern standards</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-4">
                  <Phone size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Direct Communication</h4>
                <p className="text-gray-400 text-center">Work directly with me throughout your project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
