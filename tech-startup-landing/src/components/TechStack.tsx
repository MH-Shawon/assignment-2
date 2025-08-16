import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface TechStackProps {
  darkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "React", category: "Frontend", color: "from-cyan-400 to-blue-500", level: 95 },
    { name: "TypeScript", category: "Language", color: "from-blue-400 to-blue-600", level: 90 },
    { name: "Node.js", category: "Backend", color: "from-green-400 to-green-600", level: 88 },
    { name: "Python", category: "AI/ML", color: "from-yellow-400 to-yellow-600", level: 92 },
    { name: "AWS", category: "Cloud", color: "from-orange-400 to-orange-600", level: 85 },
    { name: "Docker", category: "DevOps", color: "from-blue-400 to-cyan-600", level: 87 },
    { name: "GraphQL", category: "API", color: "from-pink-400 to-purple-600", level: 83 },
    { name: "MongoDB", category: "Database", color: "from-green-400 to-emerald-600", level: 86 },
    { name: "Kubernetes", category: "Orchestration", color: "from-blue-500 to-indigo-600", level: 80 },
    { name: "TensorFlow", category: "AI/ML", color: "from-orange-400 to-red-600", level: 78 },
    { name: "Next.js", category: "Framework", color: "from-gray-600 to-black", level: 91 },
    { name: "Redis", category: "Cache", color: "from-red-400 to-red-600", level: 84 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -90,
      z: -100
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="tech-stack" 
      ref={ref}
      className={`py-20 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, ${
              darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'
            } 35px, ${
              darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'
            } 70px)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
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
              Our Tech Stack
            </span>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Powered by
            <span className="gradient-text"> Modern Technology</span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We use the latest and most reliable technologies to build scalable solutions
          </p>
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ perspective: '1000px' }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.2 }
              }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`relative p-6 rounded-xl border backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-700 hover:bg-gray-800' 
                  : 'bg-white/80 border-gray-200 hover:shadow-xl'
              } transition-all duration-300`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                
                {/* Tech Name */}
                <h3 className={`text-lg font-bold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.name}
                </h3>
                
                {/* Category */}
                <p className={`text-sm mb-3 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {tech.category}
                </p>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className={`h-2 rounded-full overflow-hidden ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      className={`h-full bg-gradient-to-r ${tech.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1,
                        delay: 0.5 + index * 0.05,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                  <motion.span
                    className={`absolute -top-6 right-0 text-xs font-semibold ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1 + index * 0.05 }}
                  >
                    {tech.level}%
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Want to know more about our technical capabilities?
          </p>
          <motion.button
            className="px-8 py-4 button-gradient text-white rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Stack Details
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;