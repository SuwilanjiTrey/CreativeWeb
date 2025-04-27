import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Search, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const AnimatedEcommerceWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Mock product data
  const products = [
    { id: 1, name: "Premium Headphones", price: "$249.99", category: "Electronics", image: "/CreativeWeb/ecommerce/headsets.jpeg", rating: 4.8 },
    { id: 2, name: "Smart Watch", price: "$199.99", category: "Electronics", image: "/CreativeWeb/ecommerce/watch.jpeg", rating: 4.7 },
    { id: 3, name: "Designer Handbag", price: "$399.99", category: "Fashion", image: "/CreativeWeb/ecommerce/handbag.jpeg", rating: 4.9 },
    { id: 4, name: "Running Shoes", price: "$129.99", category: "Sports", image: "/CreativeWeb/ecommerce/shoes.jpeg", rating: 4.6 },
    { id: 5, name: "Wireless Earbuds", price: "$149.99", category: "Electronics", image: "/CreativeWeb/ecommerce/airpods.jpeg", rating: 4.5 },
    { id: 6, name: "Coffee Maker", price: "$89.99", category: "Home", image: "/CreativeWeb/ecommerce/coffee.jpeg", rating: 4.4 },
  ];

  // Load products with animation delay
  useEffect(() => {
    setTimeout(() => {
      setFeaturedProducts(products);
      setIsLoaded(true);
    }, 500);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const categories = ["All", "Electronics", "Fashion", "Sports", "Home"];

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFeaturedProducts(products);
    } else {
      setFeaturedProducts(products.filter(product => product.category === category));
    }
  };

  // Hero section animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const heroItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Product card animation variants
  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header with navigation */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ShopWave</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {["Home", "Shop", "Collections", "Sale", "About"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
          
          {/* Icons */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-6"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="h-5 w-5 text-gray-600 cursor-pointer" />
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </motion.div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                {["Home", "Shop", "Collections", "Sale", "About"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 py-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              variants={heroItemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Discover <span className="text-blue-600">Unique</span> Products
            </motion.h1>
            <motion.p 
              variants={heroItemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Shop our exclusive collection of high-quality products with an exceptional shopping experience.
            </motion.p>
            <motion.div variants={heroItemVariants} className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md flex items-center"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
          <motion.div 
            variants={heroItemVariants}
            className="md:w-1/2 relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-10"
            >
              <img 
                src={products.image}
                alt="Featured Product" 
                className="rounded-lg shadow-2xl" 
              />
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md"
              >
                <span className="block text-sm font-semibold text-gray-500">Limited Edition</span>
                <span className="block text-2xl font-bold text-blue-600">30% OFF</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl z-0"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Shop By Category
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => filterProducts(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-2"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium products
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {isLoaded && featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  custom={index}
                  variants={productVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-0 right-0 p-3"
                    >
                      <button className="bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <Heart className="h-5 w-5 text-gray-700" />
                      </button>
                    </motion.div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{product.rating}★</span>
                    </div>
                    <p className="text-gray-600 mb-1">{product.category}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={addToCart}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Loading animation */}
          {!isLoaded && (
            <div className="flex justify-center items-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
              />
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Choose Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Free Shipping", icon: "🚚", desc: "Free shipping on all orders over $50" },
              { title: "24/7 Support", icon: "💬", desc: "Our support team is always here to help" },
              { title: "Secure Payment", icon: "🔒", desc: "Your payment information is always secure" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="text-4xl mb-4 mx-auto"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Join Our Newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter and get 10% off your first purchase
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-5 py-3 rounded-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopWave</h3>
              <p className="text-gray-400 mb-4">Your premier destination for unique products and exceptional shopping experiences.</p>
              <div className="flex space-x-4">
                {["Twitter", "Facebook", "Instagram"].map(platform => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {[
              { title: "Shop", links: ["All Products", "New Arrivals", "Featured", "Discounts"] },
              { title: "Company", links: ["About Us", "Contact Us", "Careers", "Press"] },
              { title: "Support", links: ["FAQs", "Shipping", "Returns", "Privacy Policy"] }
            ].map(column => (
              <div key={column.title}>
                <h3 className="text-xl font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map(link => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 ShopWave. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnimatedEcommerceWebsite;