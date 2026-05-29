import { Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { contact } from "../content/contact.js";

const cards = [
  {
    label: "Instagram",
    value: "@lucky",
    href: contact.instagram,
    icon: Instagram,
  },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Start a chat",
    href: contact.whatsapp,
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to make the next video feel premium?"
          text="Send the brief, links, and deadline. Lucky can shape the footage into something sharp, modern, and platform-ready."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
              >
                <Card className="h-full p-6">
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition group-hover:bg-electric">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-3 break-words text-xl font-black">{item.value}</p>
                </Card>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={`mailto:${contact.email}`}>Book an edit</Button>
        </div>
      </div>
    </section>
  );
}
