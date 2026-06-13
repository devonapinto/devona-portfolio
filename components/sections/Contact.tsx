"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28 dot-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-line bg-bg-card p-8 md:p-14 text-center"
        >
          <span className="font-display text-xs text-accent uppercase tracking-widest">
            get in touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 mb-4 text-balance">
            Let&apos;s build something
            <br /> reliable, end to end.
          </h2>
          <p className="text-fg-dim max-w-xl mx-auto mb-8">
            Open to conversations about infra, full-stack engineering, or
            applied ML projects. Reach out — I usually reply quickly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:devonapinto@gmail.com"
              className="inline-flex items-center gap-2 font-display text-sm font-bold px-5 py-3 rounded-md bg-accent text-bg hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              devonapinto@gmail.com
            </a>
            <a
              href="tel:+919480987200"
              className="inline-flex items-center gap-2 font-display text-sm px-5 py-3 rounded-md border border-line hover:border-accent hover:text-accent transition-colors"
            >
              <Phone size={16} />
              +91 94809 87200
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-fg-dim">
            <a
              href="https://github.com/devonapinto"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/devona-pinto-3a9200252/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <LinkedinIcon size={22} />
            </a>
          </div>
        </motion.div>

        <footer className="text-center mt-10 font-display text-xs text-fg-dim">
          © {new Date().getFullYear()} Devona Thelma Pinto · Bengaluru / Udupi, India
        </footer>
      </div>
    </section>
  );
}
