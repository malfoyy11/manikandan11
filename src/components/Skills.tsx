
import { motion } from 'framer-motion';
import { Shield, Code, Network, Database, Terminal, Cpu, Lock, Bug } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "green",
      skills: [
        { name: "Penetration Testing", level: 90 },
        { name: "Ethical Hacking", level: 95 },
        { name: "Digital Forensics", level: 85 },
        { name: "Vulnerability Assessment", level: 88 }
      ]
    },
    {
      title: "Networking",
      icon: Network,
      color: "cyan",
      skills: [
        { name: "CCNA Certified", level: 92 },
        { name: "Network Security", level: 88 },
        { name: "Windows System Admin", level: 85 },
        { name: "TCP/IP Protocols", level: 90 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "green",
      skills: [
        { name: "Python", level: 90 },
        { name: "HTML/CSS/JS", level: 85 },
        { name: "Bash Scripting", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Operating Systems",
      icon: Terminal,
      color: "cyan",
      skills: [
        { name: "Windows Administration", level: 90 },
        { name: "Linux Distributions", level: 85 },
        { name: "System Hardening", level: 88 },
        { name: "Virtualization", level: 82 }
      ]
    }
  ];

  const tools = [
    { name: "Wireshark", category: "Network Analysis" },
    { name: "Metasploit", category: "Penetration Testing" },
    { name: "Nmap", category: "Network Scanning" },
    { name: "Burp Suite", category: "Web Security" },
    { name: "Volatility", category: "Memory Forensics" },
    { name: "Autopsy", category: "Digital Forensics" },
    { name: "John the Ripper", category: "Password Cracking" },
    { name: "Aircrack-ng", category: "Wireless Security" }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
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
            <span className="text-green-400 glitch-text">Skills</span>
            <span className="text-cyan-400 ml-2">&</span>
            <span className="text-green-400 ml-2">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Technical proficiencies and cybersecurity competencies</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900/50 border-green-500/30 hover:border-cyan-400/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      category.color === 'green' ? 'bg-green-900/30 border border-green-500/50' : 'bg-cyan-900/30 border border-cyan-500/50'
                    }`}>
                      <category.icon className={`w-5 h-5 ${
                        category.color === 'green' ? 'text-green-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <span className="text-cyan-400 font-mono">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-green-400 text-sm font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gray-900/30 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-center">
                <Bug className="w-6 h-6 text-green-400" />
                <span className="text-cyan-400 font-mono">Security Tools & Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-800/50 border border-green-500/20 rounded-lg p-3 text-center hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-green-400 font-mono text-sm font-semibold">{tool.name}</div>
                    <div className="text-gray-400 text-xs mt-1">{tool.category}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div className="mt-12" variants={itemVariants}>
          <h3 className="text-2xl font-mono text-cyan-400 mb-6 text-center">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "CCNA Certified", issuer: "Cisco", year: "2024" },
              { name: "Ethical Hacking", issuer: "Self-Study", year: "2023" },
              { name: "Digital Forensics", issuer: "Cybercrime Police Training", year: "2024" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 border border-green-500/30 rounded-lg p-4 text-center min-w-[200px]"
              >
                <Lock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-cyan-400 font-mono font-semibold">{cert.name}</div>
                <div className="text-gray-300 text-sm">{cert.issuer}</div>
                <div className="text-green-400 text-xs font-mono">{cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
