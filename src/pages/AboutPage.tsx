import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl font-bold text-purple-800 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out animate-pulse">
            About Realty Alchemy
          </h1>
          <motion.div 
            className="bg-purple-50 shadow-xl rounded-lg overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                <motion.div 
                  className="space-y-6 transform hover:-translate-y-1 transition-transform duration-300"
                  variants={fadeInUp}
                >
                  <h2 className="text-2xl font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-300">
                    Our Mission
                  </h2>
                  <p className="text-purple-600 hover:text-purple-800 transition-colors duration-300 leading-relaxed">
                    At Realty Alchemy, we transform the real estate experience through innovative technology 
                    and exceptional service. We believe in making property transactions seamless, transparent, 
                    and accessible to everyone.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-300 mt-8">
                    Our Vision
                  </h2>
                  <p className="text-purple-600 hover:text-purple-800 transition-colors duration-300 leading-relaxed">
                    To be the leading digital platform that revolutionizes how people buy, sell, and manage 
                    real estate, creating value for all stakeholders in the property ecosystem.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-6"
                  variants={fadeInUp}
                >
                  <h2 className="text-2xl font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-300">
                    Why Choose Us
                  </h2>
                  <motion.ul 
                    className="space-y-4"
                    variants={staggerChildren}
                  >
                    {[
                      'Cutting-edge property technology',
                      'Transparent and secure transactions',
                      'Expert market insights',
                      'Personalized service',
                      'Comprehensive property solutions'
                    ].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:translate-x-2"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg 
                          className="h-5 w-5 text-purple-500 mr-2 animate-bounce" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

              </motion.div>

              <motion.div 
                className="mt-12 border-t border-purple-200 pt-8"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-300 mb-4">
                  Our Values
                </h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={staggerChildren}
                >
                  {[
                    {
                      title: 'Innovation',
                      description: 'Continuously pushing boundaries in real estate technology',
                      icon: '🚀'
                    },
                    {
                      title: 'Integrity',
                      description: 'Maintaining highest standards of honesty and transparency',
                      icon: '🎯'
                    },
                    {
                      title: 'Excellence',
                      description: 'Delivering exceptional service in every interaction',
                      icon: '✨'
                    }
                  ].map((value, index) => (
                    <motion.div 
                      key={index} 
                      className="group bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-4xl mb-4 block animate-bounce">{value.icon}</span>
                      <h3 className="text-xl font-semibold text-purple-700 group-hover:text-purple-900 transition-colors duration-300 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-purple-600 group-hover:text-purple-800 transition-colors duration-300">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
