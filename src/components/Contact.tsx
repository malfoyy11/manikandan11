
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, User, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cybermani007@gmail.com",
      href: "mailto:cybermani@gmail.com",
      color: "green"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9361009093",
      href: "tel:+919876543210",
      color: "cyan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Namakkal, Tamil Nadu, India",
      href: "#",
      color: "green"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/malfoyy11",
      username: "malfoyy11",
      color: "text-green-400 hover:text-green-300"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/manikandan-cybersecurity",
      username: "@manikandan-cybersecurity",
      color: "text-cyan-400 hover:text-cyan-300"
    },
    {
      icon: MessageSquare,
      name: "Discord",
      url: "https://discord.com/users/manikandan11",
      username: "cybermai007@gmail.com",
      color: "text-green-400 hover:text-green-300"
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
            <span className="text-green-400 glitch-text">Get</span>
            <span className="text-cyan-400 ml-2">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Let's collaborate on securing the digital future</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border-green-500/30 hover:border-cyan-400/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-cyan-400 font-mono">
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-green-400 font-mono text-sm mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-green-500/30 focus:border-cyan-400 text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-green-400 font-mono text-sm mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-green-500/30 focus:border-cyan-400 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-green-400 font-mono text-sm mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-green-500/30 focus:border-cyan-400 text-white"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-400 font-mono text-sm mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-gray-800 border-green-500/30 focus:border-cyan-400 text-white resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-black font-mono py-3 cyber-button"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gray-900/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-cyan-400 font-mono">
                  <User className="w-6 h-6" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      contact.color === 'green' ? 'bg-green-900/30 border border-green-500/50' : 'bg-cyan-900/30 border border-cyan-500/50'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-5 h-5 ${
                        contact.color === 'green' ? 'text-green-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-mono">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-cyan-400 font-mono">
                  <MessageSquare className="w-6 h-6" />
                  <span>Connect with Me</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <social.icon className={`w-6 h-6 ${social.color} transition-colors duration-300`} />
                      <div>
                        <div className="text-white font-medium">{social.name}</div>
                        <div className="text-gray-400 text-sm font-mono">{social.username}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-green-400" />
                  <h3 className="text-cyan-400 font-mono font-semibold">Response Time</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I typically respond to messages within <span className="text-green-400 font-semibold">24 hours</span>. 
                  For urgent cybersecurity matters, please indicate the priority in your subject line.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
