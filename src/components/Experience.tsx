
import { motion } from 'framer-motion';
import { Shield, Code, Terminal, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Cybercrime Police Station Intern",
      organization: "Pondicherry Police Department",
      duration: "2025",
      type: "Internship",
      description: "Gained hands-on experience in real-world cybercrime investigation and digital forensics.",
      achievements: [
        "Learned advanced cyber attack patterns and investigation techniques",
        "Understanding of cyber laws and legal frameworks",
        "Practical experience in digital forensic tools and methodologies",
        "Exposure to incident response procedures"
      ],
      icon: Shield,
      color: "green"
    },
    {
      title: "Independent Offensive Security Developer",
      organization: "Self-Employed",
      duration: "2021 - Present",
      type: "Development",
      description: "Built and tested various cybersecurity tools and ethical hacking utilities for educational purposes.",
      achievements: [
        "Developed VoldemortRAT for ethical security testing",
        "Created secure communication tools using Python",
        "Built encrypted systems and payload simulation tools",
        "Focused on ethical penetration testing methodologies"
      ],
      icon: Code,
      color: "cyan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-green-400 glitch-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Real-world cybersecurity experience and practical applications</p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-green-400 to-cyan-400 opacity-30"></div>
              )}

              <Card className="bg-gray-900/50 border-green-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      exp.color === 'green' ? 'bg-green-900/30 border border-green-500/50' : 'bg-cyan-900/30 border border-cyan-500/50'
                    }`}>
                      <exp.icon className={`w-6 h-6 ${
                        exp.color === 'green' ? 'text-green-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <CardTitle className="text-xl font-mono text-cyan-400">
                          {exp.title}
                        </CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                          exp.type === 'Internship' 
                            ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                            : 'bg-cyan-900/30 text-cyan-400 border border-cyan-500/30'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-300 font-medium">{exp.organization}</p>
                      <p className="text-gray-400 text-sm font-mono">{exp.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-green-400 font-mono text-sm font-semibold">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <Terminal className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Matrix */}
        <motion.div className="mt-16" variants={itemVariants}>
          <div className="bg-gray-900/30 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Professional Development Matrix
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { category: 'Technical Skills', items: ['Python Development', 'Digital Forensics', 'Network Security',' PC hardware and IOT'] },
                { category: 'Security Tools', items: ['Penetration Testing', 'RAT Development', 'Encryption Systems'] },
                { category: 'Legal Knowledge', items: ['Cyber Law', 'Investigation Procedures', 'Incident Response'] }
              ].map((category, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-cyan-400 font-mono text-sm font-semibold">{category.category}</h4>
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
