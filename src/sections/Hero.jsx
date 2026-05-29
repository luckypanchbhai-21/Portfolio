import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-[0.08]" />
      <motion.div
        animate={{ x: [0, 35, -15, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-electric/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 10, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-coral/20 blur-3xl"
      />

      <div className="container-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-electric backdrop-blur">
            Freelance Video Editor
          </p>
          <h1 className="text-balance text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            Lucky edits videos that feel expensive, fast, and unforgettable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Cinematic reels, creator videos, product launches, and scroll-stopping
            social edits built with precise pacing, clean motion, and polished
            sound design.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects">
              View Projects <ArrowRight size={18} />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass overflow-hidden rounded-lg p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-panel">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80"
                alt="Video editing workspace"
                loading="eager"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-glow"
              >
                <Play fill="currentColor" size={26} />
              </motion.div>
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                <p className="text-sm font-bold">Color. Cut. Captivate.</p>
                  <p className="mt-1 text-xs text-white/60">
                  Premium edits for brands, creators, and campaigns.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
