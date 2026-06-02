import { ArrowLeft, Send } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import { contact } from "../content/contact.js";

const projectTypes = [
  "Instagram Reel",
  "YouTube Video",
  "Brand Film",
  "Music Video",
  "Event Edit",
  "Other",
];

const contactMethods = ["WhatsApp", "Phone call", "Email"];

export default function Booking() {
  return (
    <main className="min-h-screen bg-ink pt-28 text-white">
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-[0.06]" />
      <div className="container-shell relative z-10 pb-20">
        <Button href="/" variant="secondary" className="mb-10">
          <ArrowLeft size={18} />
          Back to home
        </Button>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-electric backdrop-blur">
              Book an edit
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Tell me what you need. I will review your brief and reply fast.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
              Share your video goal, footage links, deadline, and contact details
              so I can review your request and send you an acceptance or rejection
              update.
            </p>

            <Card className="mt-8 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/45">
                Direct contact
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <p>Booking requests: {contact.bookingEmail}</p>
                <p>Email: {contact.email}</p>
                <p>Editors Hub: {contact.secondaryEmail}</p>
                <p>WhatsApp: {contact.whatsappNumber}</p>
              </div>
            </Card>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            action={`mailto:${contact.bookingEmail}`}
            method="post"
            encType="text/plain"
            className="glass rounded-lg p-5 sm:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/75">
                Your name
                <input
                  required
                  name="Name"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-electric"
                  placeholder="Your full name"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Email
                <input
                  required
                  name="Email"
                  type="email"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-electric"
                  placeholder="Your email address"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Phone / WhatsApp number
                <input
                  required
                  name="Phone or WhatsApp"
                  type="tel"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-electric"
                  placeholder="+91 ..."
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Project type
                <select
                  required
                  name="Project type"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition focus:border-electric"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-ink">
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Preferred contact
                <select
                  required
                  name="Preferred contact"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition focus:border-electric"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select contact method
                  </option>
                  {contactMethods.map((method) => (
                    <option key={method} value={method} className="bg-ink">
                      {method}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Deadline
                <input
                  name="Deadline"
                  type="date"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition focus:border-electric"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Budget
                <input
                  name="Budget"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-electric"
                  placeholder="Your budget range"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Footage / reference link
                <input
                  name="Footage link"
                  className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-electric"
                  placeholder="Google Drive / YouTube / Instagram"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-white/75">
              What do you need?
              <textarea
                required
                name="Project details"
                rows="6"
                className="resize-y rounded-md border border-white/10 bg-white/[0.06] p-4 text-white outline-none transition placeholder:text-white/35 focus:border-electric"
                placeholder="Tell me about video length, style, platform, captions, music, revisions, and any important details."
              />
            </label>

            <label className="mt-5 flex gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/70">
              <input
                required
                name="Call and message consent"
                value="Visitor agreed to receive an edit request update by call, WhatsApp, or email."
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-electric"
              />
              <span>
                I agree to receive a call, WhatsApp message, or email about my edit
                request, including whether it is accepted or rejected.
              </span>
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-white/50">
                Submitting will send the details to the booking email for review.
              </p>
              <Button type="submit">
                Send request
                <Send size={18} />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
