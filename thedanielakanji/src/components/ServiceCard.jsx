import { motion } from "framer-motion";

export default function ServiceCard({ title, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      style={{ backgroundColor: "#F5F5F5", color: "#000000" }}
    >
      <h3 className="font-semibold text-lg mb-3" style={{ color: "#FF9A4A" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-700">
        {text}
      </p>
    </motion.div>
  );
}
