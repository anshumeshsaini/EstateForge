import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl font-bold text-purple-800 mb-4 hover:scale-105 transition-transform duration-300 ease-in-out">Contact Us</h1>
          <p className="mt-4 text-lg text-purple-600 hover:text-purple-700 transition-colors duration-300">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Contact Information */}
          <motion.div 
            className="bg-purple-50 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-500"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">Get in Touch</h2>
            
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
            >
              <motion.div 
                className="flex items-start transform hover:-translate-y-1 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-700 hover:text-purple-900 transition-colors duration-300">Our Office</h3>
                  <p className="mt-1 text-purple-600 hover:text-purple-700 transition-colors duration-300">123 Business Avenue, Silicon Valley, CA 94025</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start transform hover:-translate-y-1 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-700 hover:text-purple-900 transition-colors duration-300">Email</h3>
                  <p className="mt-1 text-purple-600 hover:text-purple-700 transition-colors duration-300">contact@realtyalchemy.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start transform hover:-translate-y-1 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-700 hover:text-purple-900 transition-colors duration-300">Phone</h3>
                  <p className="mt-1 text-purple-600 hover:text-purple-700 transition-colors duration-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-purple-50 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-500"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-medium text-purple-700 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-purple-700 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-700 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-purple-700 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
