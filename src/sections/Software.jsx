import { motion } from "framer-motion";
import Card from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { software } from "../content/software.js";

function SoftwareLogo({ item }) {
  if (item.resolve) {
    return (
      <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-[#101827] shadow-glow">
        <div className="absolute h-8 w-8 rounded-full bg-electric/90 blur-[1px]" />
        <div className="absolute -translate-x-3 translate-y-2 h-7 w-7 rounded-full bg-lime/90 blur-[1px]" />
        <div className="absolute translate-x-3 translate-y-2 h-7 w-7 rounded-full bg-coral/90 blur-[1px]" />
        <span className="relative text-sm font-black tracking-wide text-white">
          {item.logo}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`grid h-16 w-16 place-items-center rounded-2xl border border-white/15 ${item.surface} shadow-glow`}
    >
      <span className={`text-2xl font-black tracking-wide ${item.text}`}>
        {item.logo}
      </span>
    </div>
  );
}

export default function Software() {
  return (
    <section id="software" className="py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Software"
          title="Industry-standard tools behind every polished edit."
          text="A professional post-production workflow for editing, motion graphics, color, and final delivery."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {software.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="relative h-full overflow-hidden p-6">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                />
                <div className="flex items-center gap-5">
                  <SoftwareLogo item={item} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                      {item.role}
                    </p>
                    <h3 className="mt-2 text-xl font-black leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
