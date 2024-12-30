import { motion } from 'framer-motion';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
    <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors duration-300">
      <div className="absolute top-0 right-0 -mt-4 mr-4 w-12 h-12 rounded-xl overflow-hidden border-4 border-gray-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <img
          src={image}
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6">
        <div className="relative">
          <svg
            className="absolute -top-4 -left-3 w-8 h-8 text-blue-500/20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative text-lg text-gray-300 leading-relaxed">
            {testimonial}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">
              {name}
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              {designation} at {company}
            </p>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;

