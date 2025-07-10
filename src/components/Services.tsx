
import { motion } from 'framer-motion';
import { Shield, Monitor, Wrench, Search, Lock, Bug, Network, FileSearch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Cybersecurity Consulting",
      icon: Shield,
      color: "green",
      description: "Comprehensive security assessments and strategic cybersecurity planning for organizations.",
      services: [
        "Security Risk Assessment",
        "Penetration Testing",
        "Vulnerability Analysis",
        "Security Policy Development"
      ],
      pricing: "Starting from ₹15,000"
    },
    {
      title: "Web Application Security",
      icon: Monitor,
      color: "cyan",
      description: "In-depth security testing of web applications to identify and mitigate potential vulnerabilities.",
      services: [
        "OWASP Top 10 Testing",
        "SQL Injection Testing",
        "XSS Vulnerability Assessment",
        "Authentication Security Review"
      ],
      pricing: "Starting from ₹10,000"
    },
    {
      title: "Network Penetration Testing",
      icon: Network,
      color: "green",
      description: "Comprehensive network security testing to identify weaknesses in network infrastructure.",
      services: [
        "Internal Network Testing",
        "External Network Assessment",
        "Wireless Security Testing",
        "Social Engineering Testing"
      ],
      pricing: "Starting from ₹20,000"
    },
    {
      title: "Digital Forensics",
      icon: FileSearch,
      color: "cyan",
      description: "Professional digital investigation services for incident response and evidence collection.",
      services: [
        "Incident Response",
        "Malware Analysis",
        "Data Recovery",
        "Evidence Documentation"
      ],
      pricing: "Contact for Quote"
    },
    {
      title: "PC Repair & Optimization",
      icon: Wrench,
      color: "green",
      description: "Complete computer repair and system optimization services for individuals and businesses.",
      services: [
        "OS Reinstallation",
        "System Optimization",
        "Malware Removal",
        "Hardware Troubleshooting"
      ],
      pricing: "Starting from ₹2,000"
    },
    {
      title: "Security Training",
      icon: Bug,
      color: "cyan",
      description: "Cybersecurity awareness training and ethical hacking workshops for teams and individuals.",
      services: [
        "Security Awareness Training",
        "Ethical Hacking Workshops",
        "Incident Response Training",
        "Security Best Practices"
      ],
      pricing: "Starting from ₹5,000"
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
            <span className="text-green-400 glitch-text">Services</span>
            <span className="text-cyan-400 ml-2">&</span>
            <span className="text-green-400 ml-2">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Professional cybersecurity services and technical solutions</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-green-500/30 hover:border-cyan-400/50 transition-all duration-500 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      service.color === 'green' ? 'bg-green-900/30 border border-green-500/50' : 'bg-cyan-900/30 border border-cyan-500/50'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-6 h-6 ${
                        service.color === 'green' ? 'text-green-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <CardTitle className="text-cyan-400 font-mono text-lg">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Service Features */}
                  <div>
                    <h4 className="text-green-400 font-mono text-sm font-semibold mb-3">Included Services:</h4>
                    <ul className="space-y-2">
                      {service.services.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center space-x-2 text-gray-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="pt-4 border-t border-green-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-mono text-lg font-semibold">{service.pricing}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-mono"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div className="mt-20" variants={itemVariants}>
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">My Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", description: "Initial assessment and requirement gathering" },
              { step: "02", title: "Analysis", description: "Comprehensive security analysis and planning" },
              { step: "03", title: "Implementation", description: "Execute security testing and solutions" },
              { step: "04", title: "Reporting", description: "Detailed reports with actionable recommendations" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400"></div>
                )}
                
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-mono font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-green-400 font-mono font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-green-500/30 rounded-lg p-8">
            <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-mono text-cyan-400 mb-4">Ready to Secure Your Digital Assets?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your cybersecurity needs and create a tailored solution to protect your organization 
              from evolving cyber threats.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-black font-mono px-8 py-3 cyber-button">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
