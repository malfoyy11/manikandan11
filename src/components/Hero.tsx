import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Cybersecurity Enthusiast',
    'Ethical Hacker',
    'Future Cyber Commando',
    'Penetration Tester'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-green-400 to-cyan-400 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="https://i.postimg.cc/cL25vdF4/me.jpg" 
                alt="Manikandan S - Cybersecurity Professional"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-mono mb-4"
          variants={itemVariants}
        >
          <span className="text-green-400 glitch-text">Manikandan</span>
          <span className="text-cyan-400 ml-4">S</span>
        </motion.h1>

        {/* Typing effect title */}
        <motion.h2
          className="text-xl md:text-2xl font-mono mb-6 h-8"
          variants={itemVariants}
        >
          <span className="text-white">{displayText}</span>
          <span className="text-green-400 animate-pulse">|</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Passionate cybersecurity student pursuing B.E. in Cybersecurity at Mahendra Engineering College. 
          Experienced intern at Cybercrime Police Station, Pondicherry. Specializing in ethical hacking, 
          digital forensics, and offensive security tools.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Button 
            className="bg-green-600 hover:bg-green-700 text-black font-mono px-8 py-3 cyber-button"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono px-8 py-3 cyber-button"
            size="lg"
          >
            <Code className="w-5 h-5 mr-2" />
            View Projects
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: 'https://github.com/manikandan', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/manikandan', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:manikandan@example.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-green-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300 cyber-button"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Floating stats */}
        <motion.div
          className="absolute top-20 right-10 hidden lg:block"
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
            <div className="text-green-400 font-mono text-sm">
              <div>Status: <span className="text-cyan-400">Active</span></div>
              <div>Security Level: <span className="text-green-400">High</span></div>
              <div>Projects: <span className="text-cyan-400">5+</span></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
