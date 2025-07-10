
import { motion } from 'framer-motion';
import { Shield, Code, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      institution: "Mahendra Engineering College, Namakkal",
      degree: "B.E. Cybersecurity",
      status: "Pursuing",
      icon: Shield
    },
    {
      institution: "Holy Cross Matriculation School",
      degree: "Higher Secondary Education",
      location: "Vakkampatty, Dindigul",
      status: "Completed",
      icon: BookOpen
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
    hidden: { y: 50, opacity: 0 },
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
            <span className="text-green-400 glitch-text">About</span>
            <span className="text-cyan-400 ml-2">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <h3 className="text-2xl font-mono text-cyan-400 mb-4">Mission Statement</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a passionate cybersecurity enthusiast with a mission-driven approach to protecting digital infrastructure. 
                My goal is to become a <span className="text-green-400 font-semibold">Cyber Commando</span>, 
                defending our nation's digital frontlines through ethical hacking and advanced security practices.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                With hands-on experience in digital forensics, penetration testing, and offensive security tools, 
                I combine academic knowledge with real-world application. My internship at the Cybercrime Police Station 
                in Pondicherry has given me unique insights into cybercrime patterns and digital investigation techniques.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Ethical Hacking', 'Digital Forensics', 'Penetration Testing', 'Cyber Law', 'Python Development'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 border border-green-500/30 rounded-full text-green-400 text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats and Visual */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years Experience', value: '2+', icon: Code },
                  { label: 'Projects Completed', value: '5+', icon: Award },
                  { label: 'Certifications', value: 'CCNA', icon: Shield },
                  { label: 'Specialization', value: 'Ethical Hacking', icon: Shield }
                ].map(({ label, value, icon: Icon }) => (
                  <Card key={label} className="bg-gray-900/50 border-green-500/30 hover:border-cyan-400/50 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <Icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-cyan-400 font-mono">{value}</div>
                      <div className="text-gray-400 text-sm">{label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cyber Dashboard Visualization */}
              <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-green-400 font-mono mb-4">Security Dashboard</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Network Security', level: 95 },
                    { label: 'Penetration Testing', level: 90 },
                    { label: 'Digital Forensics', level: 85 },
                    { label: 'Python Development', level: 88 }
                  ].map(({ label, level }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{label}</span>
                        <span className="text-cyan-400">{level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 border border-green-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <edu.icon className="w-8 h-8 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-cyan-400 font-mono text-lg">{edu.degree}</h4>
                    <p className="text-gray-300 font-medium">{edu.institution}</p>
                    {edu.location && <p className="text-gray-400 text-sm">{edu.location}</p>}
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono mt-2 ${
                      edu.status === 'Pursuing' 
                        ? 'bg-green-900/30 text-green-400 border border-green-500/30' 
                        : 'bg-cyan-900/30 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
