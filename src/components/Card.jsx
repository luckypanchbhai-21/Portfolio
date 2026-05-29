import { motion } from "framer-motion";

export default function Card({ children, className = "", ...props }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`glass rounded-lg ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
