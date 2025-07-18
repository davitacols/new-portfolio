import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      setForm({
        name: '',
        email: '',
        message: '',
      });
      alert('Thank you. I will get back to you as soon as possible.');
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-surface-dark border border-accent/10 rounded-lg text-secondary placeholder:text-secondary/50"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-surface-dark border border-accent/10 rounded-lg text-secondary placeholder:text-secondary/50"
            />
          </div>

          <div>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-surface-dark border border-accent/10 rounded-lg text-secondary placeholder:text-secondary/50"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-accent text-secondary font-light rounded-lg w-fit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;