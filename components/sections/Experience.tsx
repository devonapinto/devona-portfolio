"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "Apr 2026 — Present",
    role: "Systems Engineer · Infra & DevOps",
    org: "Infosys, Mangalore",
    status: "current",
    points: [
      "Own platform setup for new client onboarding end to end on AWS.",
      "Configure CloudFront distributions, cache behaviors and origins; manage S3 buckets for frontend asset delivery.",
      "Run EKS clusters with traffic through Nginx ingress controller and a load balancer, secured with ACM certificates.",
      "Set up Kong API Gateway — services, routes, plugins and JWT-based auth for backend traffic.",
      "Use GitHub Actions and Helm charts to manage deployments across environments.",
    ],
  },
  {
    period: "Sep 2025 — Mar 2026",
    role: "Systems Engineer Trainee",
    org: "Infosys, Mysore",
    status: "training",
    points: [
      "Completed foundational training in Java, Python, DSA, and Database/SQL.",
      "Learned the full-stack flow with React, Node.js, Spring Boot and REST APIs.",
      "Built an iCinema project using React (frontend) and Spring Boot (backend) with REST API integration.",
    ],
  },
  {
    period: "Nov 2024 — Apr 2025",
    role: "Web Development Intern",
    org: "Quantum Learning (Remote)",
    status: "internship",
    points: [
      "Built a responsive Movie Finder web app using HTML, CSS, JavaScript and third-party APIs.",
      "Deployed on Vercel with an automated deployment pipeline.",
    ],
  },
  {
    period: "Oct 2023 — Nov 2023",
    role: "Machine Learning Research Intern",
    org: "Manipal Institute of Technology (Onsite)",
    status: "internship",
    points: [
      "Built a predictive stock price model using Linear Regression and ARIMA on historical market data.",
      "Visualized insights with Matplotlib and improved accuracy through hyperparameter tuning.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28 border-b border-line bg-bg-elev/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-display text-xs text-accent uppercase tracking-widest">
            experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 text-balance">
            Journey through the stack.
          </h2>
          <p className="text-fg-dim mt-2 max-w-lg">
            Each role builds on the last — from internships and ML research,
            through full-stack training, to running production infra today.
          </p>
        </motion.div>

        <div className="relative pl-6 md:pl-10 border-l border-line space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full border-2 ${
                  item.status === "current"
                    ? "bg-accent border-accent"
                    : "bg-bg border-line"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-display font-bold text-lg">{item.role}</h3>
                <span className="font-display text-xs text-fg-dim shrink-0">
                  {item.period}
                </span>
              </div>
              <div className="text-accent-2 font-display text-sm mb-3">
                {item.org}
              </div>
              <ul className="space-y-1.5 text-fg-dim text-sm leading-relaxed">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
