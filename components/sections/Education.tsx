"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Science & Engineering",
    org: "Shri Madhwa Vadiraja Institute of Technology and Management, Udupi",
    meta: "2021 – 2025 · CGPA 9.3 / 10",
  },
  {
    icon: Trophy,
    title: "Winner — Hack_Teck 2.0 (2023)",
    org: "Built a web-based solution for real-time health data monitoring during the hackathon.",
    meta: "Team award",
  },
  {
    icon: Award,
    title: "IEEE UREKA 2023 — Participant",
    org: "Contributed to collaborative ML and IoT projects as part of an IEEE innovation challenge.",
    meta: "Research challenge",
  },
  {
    icon: Trophy,
    title: "National-level Hackathon, Bangalore",
    org: "Competed against engineering teams from across the country.",
    meta: "Competition",
  },
];

export default function Education() {
  return (
    <section className="px-6 py-20 md:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="font-display text-xs text-accent uppercase tracking-widest">
            education & achievements
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 text-balance">
            Where the foundation came from.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl border border-line bg-bg-card p-6"
              >
                <Icon size={20} className="text-accent-2 mb-3" />
                <h3 className="font-display font-bold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-fg-dim text-sm leading-relaxed mb-2">
                  {item.org}
                </p>
                <span className="font-display text-xs text-fg-dim">
                  {item.meta}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
