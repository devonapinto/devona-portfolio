"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "9.22", label: "CGPA / 10, B.E. CSE" },
  { value: "6+", label: "months in production infra" },
  { value: "22", label: "years old" },
];

const skillGroups = [
  {
    title: "Cloud & Infra",
    items: ["AWS (CloudFront, S3, EKS, ALB, ACM)", "Kubernetes", "Helm", "Kong API Gateway", "Docker"],
  },
  {
    title: "CI/CD & Platform",
    items: ["GitHub Actions", "Ingress / Nginx", "JWT auth", "Client onboarding pipelines"],
  },
  {
    title: "Full Stack",
    items: ["React", "Node.js", "Spring Boot", "REST APIs", "Java"],
  },
  {
    title: "Languages & Data",
    items: ["Python", "Java", "C", "JavaScript", "MySQL / postgres SQL"],
  },
  {
    title: "ML / Applied AI",
    items: ["TensorFlow", "OpenCV", "scikit-learn", "YOLOv8", "Flask"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-display text-xs text-accent uppercase tracking-widest">
              about
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-6 text-balance">
              From academic foundation to orchestrating production-grade cloud
              systems
            </h2>
            <div className="space-y-4 text-fg-dim leading-relaxed">
              <p>
                I graduated in Computer Science &amp; Engineering from SMVITM,
                Udupi with a 9.3 CGPA. My first six months at Infosys were
                spent in training in Mysore, where I went deep on Java,
                Python, DSA, and database/SQL fundamentals — then moved into
                full-stack work with React, Node.js, Spring Boot, and REST
                APIs, building an iCinema project end to end.
              </p>
              <p>
                Now based in Mangalore, I work on the Infra &amp; DevOps team,
                where I own pieces of the platform that new clients land on.
                That means configuring CloudFront distributions and origin
                behaviors, setting up S3 buckets for frontend assets, wiring
                ACM certificates, and managing the EKS clusters — with traffic
                routed through an Nginx ingress controller, load balancer, and
                Kong, where I configure services, routes, plugins, and JWT
                token validation.
              </p>
              <p>
                Outside of infra, I build applied ML projects — from a
                glaucoma detection system to a plagiarism-risk dashboard that
                compares submitted code and flags high-risk matches.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold text-accent">
                    {s.value}
                  </div>
                  <div className="text-fg-dim text-xs mt-1 max-w-[140px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-line bg-bg-elev p-6"
          >
            <div className="font-display text-xs text-fg-dim mb-4">
              ~/skills --list
            </div>
            <div className="space-y-5">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <div className="font-display text-xs font-bold text-accent-2 uppercase tracking-wide mb-2">
                    {g.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md border border-line text-fg-dim font-display"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
