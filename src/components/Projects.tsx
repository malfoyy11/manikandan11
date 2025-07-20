import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Shield, MessageSquare, Lock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Bluetooth Chat App",
      year: "2025",
      description: "Secure offline messaging application using Bluetooth technology for encrypted peer-to-peer communication without internet dependency.",
      technologies: ["Python", "Bluetooth", "Encryption", "GUI"],
      features: [
        "End-to-end encryption",
        "Offline communication",
        "Cross-platform compatibility",
        "User-friendly interface"
      ],
      icon: MessageSquare,
      color: "green",
      status: "Completed",
      github: "https://github.com/malfoyy11/bluetooth-chat"
    },
    {
      title: "VoldemortRAT",
      year: "2024",
      description: "Educational Remote Access Tool developed for ethical hacking simulation and cybersecurity learning purposes with advanced stealth capabilities.",
      technologies: ["Python", "Network Programming", "Encryption", "Steganography"],
      features: [
        "Ethical testing framework",
        "Advanced persistence techniques",
        "Encrypted communication channels",
        "Educational documentation"
      ],
      icon: Shield,
      color: "cyan",
      status: "Completed",
      github: "https://github.com/malfoyy11/voldermort-shell"
    },
    {
      title: "Emocrypt",
      year: "2024",
      description: "Powerful encryption tool that transforms your private messages into a single emoji or sticker using strong cryptographic techniques.",
      technologies: ["AES (Symmetric)", "RSA (Asymmetric)", "Cryptography", "Security Analysis"],
      features: [
        "Message input",
        "Key input",
        "Encrypted string",
        "Mapped emoji or sticker"
      ],
      icon: Lock,
      color: "green",
      status: "Completed",
      github: "https://github.com/malfoyy11/emocrypt",
      demo: "https://emocrypt demo.com"
    },
    {
      title: "Cybersecurity Portfolio",
      year: "2024",
      description: "Modern portfolio website built with futuristic dark theme, featuring glowing neon effects and terminal-inspired design elements.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Interactive animations",
        "Dark cyberpunk theme",
        "Performance optimized"
      ],
      icon: Globe,
      color: "cyan",
      status: "Active",
      github: "https://github.com/malfoyy11/portfolio",
      demo: "https://manikandan-portfolio.com"
    },
    {
      title: "Network Security Scanner",
      year: "2023",
      description: "Comprehensive network vulnerability scanner with automated reporting and threat detection capabilities for ethical penetration testing.",
      technologies: ["Python", "Nmap", "Network Analysis", "Reporting"],
      features: [
        "Automated vulnerability detection",
        "Comprehensive reporting",
        "Multiple scan types",
        "Export capabilities"
      ],
      icon: Code,
      color: "green",
      status: "In Development",
      github: "https://github.com/malfoyy11/network-scanner"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'Active': return 'text-cyan-400 bg-cyan-900/30 border-cyan-500/30';
      case 'In Development': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
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
            <span className="text-green-400 glitch-text">Featured</span>
            <span className="text-cyan-400 ml-2">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Cybersecurity tools and applications built for ethical purposes</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-green-500/30 hover:border-cyan-400/50 transition-all duration-500 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        project.color === 'green' ? 'bg-green-900/30 border border-green-500/50' : 'bg-cyan-900/30 border border-cyan-500/50'
                      }`}>
                        <project.icon className={`w-6 h-6 ${
                          project.color === 'green' ? 'text-green-400' : 'text-cyan-400'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-cyan-400 font-mono text-lg">{project.title}</CardTitle>
                        <p className="text-gray-400 text-sm font-mono">{project.year}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-mono border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="text-green-400 font-mono text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-800 border border-green-500/20 rounded text-green-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-mono text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-mono flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-mono flex-1"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
