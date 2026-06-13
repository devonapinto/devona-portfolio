"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

const projects = [
  {
    title: "Code Plagiarism Risk Dashboard",
    desc: "Compares submitted code across users and flags high-risk matches, surfacing which submissions copy which — with a visual risk score per user and side-by-side code comparison.",
    tags: ["Python", "Code Similarity", "Flask", "Risk Scoring"],
    featured: true,
  },
  {
    title: "iCinema",
    desc: "Full-stack movie platform built during Infosys training — React frontend talking to a Spring Boot backend over REST APIs, covering auth, listings and bookings end to end.",
    tags: ["React", "Spring Boot", "REST API", "Java"],
    featured: true,
  },
  {
    title: "Glaucoma Detection System",
    desc: "Image-processing pipeline that calculates the Cup-to-Disc ratio from fundus images using K-Means clustering and morphological ops, deployed via Flask for real-time predictions at 87% accuracy.",
    tags: ["Python", "OpenCV", "TensorFlow", "YOLOv8", "Flask"],
    link: "#",
  },
  {
    title: "Stock Price Prediction",
    desc: "Predicts next-day closing prices from live Yahoo Finance data, engineering SMA, EMA and RSI features and applying Linear Regression — ~92% accuracy, visualized with Matplotlib.",
    tags: ["Python", "scikit-learn", "Pandas", "yfinance"],
    link: "#",
  },
  {
    title: "Tomato & Bell Pepper Disease Detection",
    desc: "Mobile crop-disease classifier using a lightweight MobileNet model on-device, with a Flask backend feeding a Flutter frontend for real-time detection in the field.",
    tags: ["Flutter", "MobileNet", "TensorFlow Lite", "Flask"],
    link: "#",
  },
  {
    title: "Movie Finder",
    desc: "Responsive movie search and details app built with vanilla JS and a third-party movie API, deployed on Vercel with an automated pipeline.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://movie-finder-nine-delta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:py-28 border-b border-line bg-bg-elev/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="font-display text-xs text-accent uppercase tracking-widest">
            projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-balance">
            Builds that span infra, full stack and applied ML.
          </h2>
          <p className="text-fg-dim">
            A mix of platform tooling, full-stack apps, and machine learning
            systems built for healthcare, finance and agriculture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className={`rounded-xl border bg-bg-card p-6 flex flex-col hover:border-accent/60 transition-colors ${
                p.featured ? "border-accent/40 sm:col-span-2" : "border-line"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display font-bold text-lg">{p.title}</h3>
                {p.link && p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="text-fg-dim hover:text-accent transition-colors shrink-0"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                {(!p.link || p.link === "#") && (
                  <span className="text-fg-dim shrink-0"><GithubIcon size={18} /></span>
                )}
              </div>
              <p className="text-fg-dim text-sm leading-relaxed mb-4 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-display px-2.5 py-1 rounded-md border border-line text-fg-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
