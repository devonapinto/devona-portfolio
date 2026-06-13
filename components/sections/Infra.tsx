"use client";

import { motion } from "framer-motion";
import { Boxes, KeyRound, Network, Workflow } from "lucide-react";

const stages = [
  {
    icon: Network,
    title: "Edge & delivery",
    desc: "CloudFront distributions with tuned cache behaviors, S3 buckets as frontend origins, and ACM-managed TLS certificates for every client domain.",
  },
  {
    icon: Boxes,
    title: "Cluster & routing",
    desc: "Backend workloads run on EKS. Traffic enters through an Nginx ingress controller behind a load balancer before it ever reaches a pod.",
  },
  {
    icon: KeyRound,
    title: "Gateway & auth",
    desc: "Kong sits in front of services — I configure routes, plugins, and JWT validation so each client's APIs are authenticated and rate-limited correctly.",
  },
  {
    icon: Workflow,
    title: "Pipelines & packaging",
    desc: "GitHub Actions and Helm charts handle build, package and deploy, so onboarding a new client is a repeatable workflow, not a one-off.",
  },
];

export default function Infra() {
  return (
    <section id="infra" className="px-6 py-20 md:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="font-display text-xs text-accent uppercase tracking-widest">
            day to day
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-balance">
            Onboarding a new client means standing up this whole path.
          </h2>
          <p className="text-fg-dim">
            From CloudFront down to the service a request finally hits, this
            is the platform I configure, monitor and operate at Infosys.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl border border-line bg-bg-card p-6 hover:border-accent/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-fg-dim text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-xl border border-line bg-bg-elev p-6"
        >
          <div className="font-display text-xs text-fg-dim mb-3">
            toolbelt
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "AWS CloudFront",
              "S3",
              "ACM",
              "EKS",
              "Nginx Ingress",
              "ALB",
              "Kong Gateway",
              "JWT",
              "Helm",
              "GitHub Actions",
              "Docker",
              "Kubernetes",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-display px-3 py-1.5 rounded-md border border-line text-accent-2"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
