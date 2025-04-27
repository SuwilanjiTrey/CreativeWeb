import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink, ChevronDown } from 'lucide-react';

const PortfolioWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [isRevealed, setIsRevealed] = useState({});
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  // Handle scroll and reveal animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine which section is in view
      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setCurrentSection(section);
          }
        }
      }
      
      // Reveal elements when they come into view
      document.querySelectorAll('.reveal-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        const id = item.id;
        if (rect.top <= window.innerHeight * 0.85 && !isRevealed[id]) {
          setIsRevealed(prev => ({ ...prev, [id]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRevealed]);

  // Project data
  const projects = [
    {
      title: "Modern E-Commerce Platform",
      description: "A full-featured online store with seamless checkout experience and inventory management.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Financial Dashboard",
      description: "Interactive analytics platform for tracking investments and financial performance metrics.",
      category: "UI/UX Design",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "AI-Powered CRM System",
      description: "Customer relationship management tool with predictive analytics and automation features.",
      category: "Software Development",
      technologies: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Fitness Mobile Application",
      description: "Personalized workout planner with progress tracking and social features.",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "/api/placeholder/600/400"
    }
  ];
  
  // Skills data
  const skills = [
    { name: "Web Development", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Mobile Development", level: 85 },
    { name: "Backend Architecture", level: 88 },
    { name: "Database Management", level: 80 },
    { name: "Cloud Services", level: 82 }
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setCurrentSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 10 ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold relative">
            <span className={`transition-colors duration-300 ${scrollY > 10 ? 'text-blue-600' : 'text-white'}`}>
              Atlas
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-300 relative ${
                  currentSection === item 
                    ? scrollY > 10 ? 'text-blue-600' : 'text-blue-400' 
                    : scrollY > 10 ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ${
                  currentSection === item ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={scrollY > 10 ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrollY > 10 ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="container mx-auto px-6 py-3">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-3 capitalize ${
                  currentSection === item ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section 
        ref={sectionRefs.home}
        className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-5"
              style={{
                width: Math.random() * 400 + 100 + 'px',
                height: Math.random() * 400 + 100 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <div className="overflow-hidden">
                <h2 className="text-blue-300 mb-2 animate-slideInRight">Hello, I'm</h2>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                  Alex Morgan
                </h1>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-2xl md:text-3xl text-blue-100 mb-6 animate-slideInRight" style={{ animationDelay: '0.4s' }}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                    Creative Developer & Designer
                  </span>
                </h3>
              </div>
              <div className="overflow-hidden">
                <p className="text-blue-200 max-w-lg mb-8 leading-relaxed animate-slideInRight" style={{ animationDelay: '0.6s' }}>
                  I create beautiful, functional digital experiences with a focus on user interaction and modern aesthetics. Let's bring your vision to life.
                </p>
              </div>
              <div className="overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slideInRight" style={{ animationDelay: '0.8s' }}>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    View My Work
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 border-2 border-blue-400 text-blue-200 font-medium rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="Alex Morgan" 
                    className="rounded-full object-cover w-full h-full opacity-80"
                  />
                </div>
                
                {/* Decorative circles */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400 animate-bounce" style={{ animationDuration: '2s' }}></div>
                <div className="absolute -left-4 top-1/4 w-6 h-6 rounded-full bg-purple-400 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-400 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={30} className="text-blue-300" />
        </div>
      </section>
      
      {/* About Section */}
      <section 
        ref={sectionRefs.about}
        className="py-20 bg-white"
        id="about-section"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              id="about-title" 
              className={`text-3xl md:text-4xl font-bold mb-4 reveal-item ${isRevealed['about-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              About Me
            </h2>
            <div 
              id="about-bar" 
              className={`w-24 h-1 bg-blue-500 mx-auto reveal-item ${isRevealed['about-bar'] ? 'animate-growWidth' : 'w-0'}`}
            ></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div 
              id="about-image" 
              className={`md:w-2/5 mb-8 md:mb-0 reveal-item ${isRevealed['about-image'] ? 'animate-fadeInLeft' : 'opacity-0'}`}
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/api/placeholder/600/600" 
                  alt="About Me" 
                  className="rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-lg z-0"></div>
              </div>
            </div>
            
            <div 
              id="about-content" 
              className={`md:w-3/5 md:pl-12 reveal-item ${isRevealed['about-content'] ? 'animate-fadeInRight' : 'opacity-0'}`}
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate digital creator with over 8 years of experience in designing and developing exceptional digital experiences. My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in tech began with a degree in Computer Science, but my passion for design led me to explore the intersection of aesthetics and functionality. Today, I specialize in creating engaging, user-centered applications that drive business growth and user satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="text-gray-600">Alex Morgan</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-gray-600">alex@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-gray-600">Freelance & Full-time</p>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center group">
                Download Resume
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        ref={sectionRefs.projects}
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              id="projects-title" 
              className={`text-3xl md:text-4xl font-bold mb-4 reveal-item ${isRevealed['projects-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              My Projects
            </h2>
            <div 
              id="projects-bar" 
              className={`w-24 h-1 bg-blue-500 mx-auto reveal-item ${isRevealed['projects-bar'] ? 'animate-growWidth' : 'w-0'}`}
            ></div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div 
              id="projects-nav" 
              className={`md:w-1/3 mb-8 md:mb-0 reveal-item ${isRevealed['projects-nav'] ? 'animate-fadeInLeft' : 'opacity-0'}`}
            >
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-6">Featured Work</h3>
                
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeProject === index 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <h4 className="font-medium mb-1">{project.title}</h4>
                    <p className={`text-sm ${activeProject === index ? 'text-blue-100' : 'text-gray-500'}`}>
                      {project.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              id="project-detail" 
              className={`md:w-2/3 md:pl-8 reveal-item ${isRevealed['project-detail'] ? 'animate-fadeInRight' : 'opacity-0'}`}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-2xl font-semibold text-white">{projects[activeProject].title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{projects[activeProject].description}</p>
                  
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center group">
                      View Project
                      <ExternalLink className="ml-2" size={16} />
                    </button>
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        ref={sectionRefs.skills}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              id="skills-title" 
              className={`text-3xl md:text-4xl font-bold mb-4 reveal-item ${isRevealed['skills-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              My Skills
            </h2>
            <div 
              id="skills-bar" 
              className={`w-24 h-1 bg-blue-500 mx-auto reveal-item ${isRevealed['skills-bar'] ? 'animate-growWidth' : 'w-0'}`}
            ></div>
          </div>
          
          <div 
            id="skills-content" 
            className={`max-w-3xl mx-auto reveal-item ${isRevealed['skills-content'] ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ 
                      width: isRevealed['skills-content'] ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            id="skills-icons" 
            className={`mt-12 max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 text-center reveal-item ${isRevealed['skills-icons'] ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            {['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'UI/UX', 'Figma', 'MongoDB', 'GraphQL', 'TypeScript', 'AWS', 'Docker', 'Git'].map((tech, index) => (
              <div 
                key={index} 
                className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <p className="text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact}
        className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              id="contact-title" 
              className={`text-3xl md:text-4xl font-bold mb-4 reveal-item ${isRevealed['contact-title'] ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              Get In Touch
            </h2>
            <div 
              id="contact-bar" 
              className={`w-24 h-1 bg-blue-300 mx-auto reveal-item ${isRevealed['contact-bar'] ? 'animate-growWidth' : 'w-0'}`}
            ></div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div 
              id="contact-info" 
              className={`md:w-2/5 mb-8 md:mb-0 reveal-item ${isRevealed['contact-info'] ? 'animate-fadeInLeft' : 'opacity-0'}`}
            >
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="mb-6 flex items-start">
                  <Mail size={20} className="mr-4 mt-1 text-blue-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-200">alex@example.com</p>
                  </div>
                </div>
                
                <div className="mb-6 flex items-start">
                  <Phone size={20} className="mr-4 mt-1 text-blue-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-200">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="mb-8 flex items-start">
                  <MapPin size={20} className="mr-4 mt-1 text-blue-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-blue-200">San Francisco, California</p>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin size={20} />, label: "LinkedIn" },
                    { icon: <Github size={20} />, label: "GitHub" },
                    { icon: <Twitter size={20} />, label: "Twitter" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              id="contact-form" 
              className={`md:w-3/5 md:pl-8 reveal-item ${isRevealed['contact-form'] ? 'animate-fadeInRight' : 'opacity-0'}`}
            >
              <div className="bg-white rounded-xl p-6 text-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  
                  className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-blue-400">Atlas</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Creating exceptional digital experiences through innovative design and development.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
              <div className="mb-6 md:mb-0">
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item)}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 capitalize"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <Twitter size={16} className="mr-2" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <Mail size={16} className="mr-2" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          scrollY > 300 ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s forwards;
        }
        
        .animate-growWidth {
          animation: growWidth 1s forwards;
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInRight {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes growWidth {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;