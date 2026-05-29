import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import VideoModal from "../components/VideoModal.jsx";
import { projects } from "../content/projects.js";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-20 h-64 bg-electric/10 blur-3xl" />
      <div className="container-shell relative">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Dynamic edits built for attention, retention, and replay."
          text="Each project card is generated from content data, so updating the portfolio stays quick and tidy."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => setActiveProject(project)}
              className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-panel">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-glow transition group-hover:scale-110">
                    <Play fill="currentColor" size={17} />
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black">{project.title}</h3>
                    <ExternalLink
                      size={17}
                      className="mt-1 shrink-0 text-white/45 transition group-hover:text-electric"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {project.subtitle}
                  </p>
                </div>
              </Card>
            </motion.button>
          ))}
        </div>
      </div>

      <VideoModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
