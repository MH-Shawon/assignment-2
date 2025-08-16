import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, Cloud, Lock, Rocket, Code, Users,
  BarChart3, Globe, Layers, Zap, Shield, Sparkles
} from 'lucide-react';

interface FeaturesProps {
  darkMode: boolean;
}

const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain insights",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your valuable data",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Deployment",
      description: "Go from concept to production in record time with our streamlined process",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored solutions built specifically for your unique requirements",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert technical team",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="features" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Our Features
            </span>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Everything You Need to
            <span className="gradient-text"> Succeed</span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl border ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' 
                  : 'bg-white border-gray-200 hover:shadow-xl'
              } transition-all duration-300`}>
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className={`${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
                
                {/* Learn more link */}
                <motion.div
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "99.9%", label: "Uptime", icon: <Zap className="w-6 h-6" /> },
            { number: "10M+", label: "Users Served", icon: <Users className="w-6 h-6" /> },
            { number: "500+", label: "Projects", icon: <Layers className="w-6 h-6" /> },
            { number: "24/7", label: "Support", icon: <Shield className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex mb-2 text-blue-600 dark:text-blue-400">
                {stat.icon}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className={`text-3xl font-bold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {stat.number}
              </motion.div>
              <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;