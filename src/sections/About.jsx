import { motion } from "framer-motion";
import Card from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { about } from "../content/about.js";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About Lucky"
          title="A sharp editing workflow for stories that need to move."
          text={about.intro}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <Card className="p-6 sm:p-8">
            <h3 className="text-2xl font-black">Editing strengths</h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {about.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-electric/50 hover:bg-electric/10"
                >
                  <p className="font-bold">{skill}</p>
                </motion.div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6">
            <Card className="p-6">
              <div className="grid grid-cols-3 gap-3">
                {about.stats.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-2xl font-black text-electric sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-white/55">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-black">Timeline</h3>
              <div className="mt-5 space-y-5">
                {about.timeline.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <span className="mt-1 h-fit rounded-full bg-lime/15 px-3 py-1 text-xs font-black text-lime">
                      {item.year}
                    </span>
                    <p className="text-sm leading-6 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
