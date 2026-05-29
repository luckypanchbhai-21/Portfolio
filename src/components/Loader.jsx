import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 grid place-items-center bg-ink"
    >
      <div className="relative h-20 w-20">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-white/10 border-t-electric"
        />
        <div className="absolute inset-3 grid place-items-center rounded-full bg-white/[0.06] text-sm font-black">
          L
        </div>
      </div>
    </motion.div>
  );
}
