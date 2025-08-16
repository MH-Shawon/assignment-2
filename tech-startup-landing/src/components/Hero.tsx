import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Revolutionizing Tech Solutions
            </span>
          </motion.div>

          {/* Main heading with animated text */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              Build The Future
            </span>
            <br />
            <motion.span
              className="gradient-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              With Innovation
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Empowering businesses with cutting-edge technology solutions
            <br />
            that drive growth and transform industries
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              className="px-8 py-4 button-gradient text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className={`px-8 py-4 rounded-lg font-semibold text-lg border-2 ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Features icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <motion.div
              className="flex items-center gap-2"
              animate={floatingAnimation}
            >
              <Zap className="w-6 h-6 text-yellow-500" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Lightning Fast
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 0.5 }
              }}
            >
              <Shield className="w-6 h-6 text-green-500" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Secure & Reliable
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 1 }
              }}
            >
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                AI-Powered
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-white' : 'border-gray-900'
        }`}>
          <motion.div
            className={`w-1 h-2 rounded-full mt-2 ${
              darkMode ? 'bg-white' : 'bg-gray-900'
            }`}
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;