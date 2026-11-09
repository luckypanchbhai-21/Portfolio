import { motion } from "framer-motion";
import Card from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const trustSignals = [
  "Creators",
  "Brands",
  "Founders",
  "Agencies",
  "Startups",
  "Campaigns",
];

const testimonials = [
  {
    quote:
      "Lucky made our content feel premium from the first cut. The pacing, transitions, and sound design elevated everything we were posting.",
    client: "Founder",
    brand: "Lifestyle Brand",
  },
  {
    quote:
      "Fast turnaround, sharp storytelling, and edits that actually matched the energy of our product launch. It felt polished and intentional.",
    client: "Marketing Lead",
    brand: "Startup Studio",
  },
  {
    quote:
      "The difference was immediate. Our reels looked cleaner, more cinematic, and far more engaging across platforms.",
    client: "Creative Director",
    brand: "Content Team",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Client trust"
          title="Clean edits. Stronger retention. Better-looking content."
          text="From creator content to campaign work, each edit is built to feel premium, clear, and easy to watch."
        />

        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {trustSignals.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-white/70"
            >
              {label}
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.brand}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-1 text-electric">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="text-lg leading-8 text-white/80">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-black text-white">{item.client}</p>
                  <p className="text-sm text-white/55">{item.brand}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
