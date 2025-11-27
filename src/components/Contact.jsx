import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_zn5z4jz',
        'template_ylajguf',
        {
          from_name: form.name,
          to_name: 'David Ansa',
          from_email: form.email,
          to_email: 'davitacols@gmail.com',
          message: form.message,
        },
        '3MszYmPZT1AOTvAIT'
      );
      
      setLoading(false);
      setStatus('success');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      setStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3d3d3d]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#3d3d3d]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider">Contact</p>
              <h2 className="text-5xl md:text-6xl font-light text-[#e1e1e1] leading-tight">
                Let's create<br />something<br />amazing
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-[#3d3d3d] to-transparent" />
              <p className="text-[#e1e1e1]/70 text-lg leading-relaxed max-w-md">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-[#3d3d3d] text-xs uppercase tracking-wider">Email</h3>
                <a 
                  href="mailto:davitacols@gmail.com"
                  className="text-[#e1e1e1] text-xl hover:text-white transition-colors flex items-center gap-3 group"
                >
                  <FaEnvelope className="w-5 h-5 text-[#3d3d3d] group-hover:text-[#4d4d4d] transition-colors" />
                  davitacols@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-[#3d3d3d] text-xs uppercase tracking-wider">Follow</h3>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/davitacols"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e1e1e1]/70 hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/davitacols"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e1e1e1]/70 hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#3d3d3d]/40 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[#e1e1e1]/70 text-sm">Available for new projects</span>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[#3d3d3d] text-xs uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-0 py-4 bg-transparent border-b border-[#3d3d3d]/40 text-[#e1e1e1] placeholder:text-[#e1e1e1]/30 focus:border-[#3d3d3d] focus:outline-none transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[#3d3d3d] text-xs uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-0 py-4 bg-transparent border-b border-[#3d3d3d]/40 text-[#e1e1e1] placeholder:text-[#e1e1e1]/30 focus:border-[#3d3d3d] focus:outline-none transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-[#3d3d3d] text-xs uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-0 py-4 bg-transparent border-b border-[#3d3d3d]/40 text-[#e1e1e1] placeholder:text-[#e1e1e1]/30 focus:border-[#3d3d3d] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  ✗ Something went wrong. Please try again.
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#3d3d3d] text-[#e1e1e1] hover:bg-[#4d4d4d] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <span className="relative z-10">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
                <motion.div
                  className="relative z-10"
                  animate={loading ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4d4d4d] to-[#5d5d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;