import { motion } from 'framer-motion';
import FeedbackCard from './FeedbackCard';

const testimonials = [
  {
    testimonial: "Working with this developer was an absolute pleasure. Their expertise in AI and machine learning brought our project to life in ways we hadn't imagined possible.",
    name: "Sarah Chen",
    designation: "CTO",
    company: "TechVision AI",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    testimonial: "Exceptional problem-solving skills and a deep understanding of complex systems. They delivered our data analytics platform ahead of schedule.",
    name: "Michael Rodriguez",
    designation: "Product Manager",
    company: "DataFlow Systems",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    testimonial: "Their innovative approach to implementing ML models in our fashion tech platform significantly improved our user engagement metrics.",
    name: "Emma Thompson",
    designation: "CEO",
    company: "StyleTech",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const Feedbacks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What People Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-400"
          >
            Discover what clients and collaborators have to say about their experiences working with me on various projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={index}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;

