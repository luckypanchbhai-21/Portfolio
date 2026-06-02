import { ArrowRight } from "lucide-react";
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
          <div className="mx-auto max-w-md text-center">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-white/15 to-coral p-[2px] shadow-glow">
                <div className="h-full w-full rounded-full bg-ink" />
              </div>
              <div className="absolute inset-4 overflow-hidden rounded-full border border-white/15 bg-panel shadow-2xl shadow-black/40">
                <img
                  src="/profile-photo.jpeg"
                  alt="Lucky Panchbhai portrait"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-white/5" />
              </div>
            </div>

            <div className="glass relative z-10 mx-auto -mt-10 max-w-sm rounded-lg p-5">
              <p className="text-lg font-black">Lucky Panchbhai</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Freelance video editor for brands, creators, and campaigns.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Reels", "YouTube", "Brand Films"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-electric"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
