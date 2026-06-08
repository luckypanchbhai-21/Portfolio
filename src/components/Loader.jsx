/** @format */

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 grid place-items-center bg-ink select-none">
      {/* Wrapper to stack spinner and text vertically */}
      <div className="flex flex-col items-center gap-6">
        {/* Spinner Graphic */}
        <div className="relative h-20 w-20">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-white/10 border-t-electric"
          />
          <div className="absolute inset-3 grid place-items-center rounded-full bg-white/[0.06] text-sm font-black text-white">
            L
          </div>
        </div>

        {/* Branding Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center font-sans tracking-wide text-white/60 text-xs uppercase">
          Powered by{" "}
          <span className="block text-sm font-bold tracking-widest text-white mt-1">
            MP GROUP
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
