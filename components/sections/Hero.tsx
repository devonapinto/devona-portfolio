"use client";

import { motion } from "framer-motion";
import InfraPipeline from "@/components/InfraPipeline";
import { ArrowRight, Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-16 px-6 grid-bg border-b border-line overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 font-display text-xs text-fg-dim">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-2" />
              </span>
              status: deployed &amp; on-call
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Mangalore, India</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-fg tracking-tight">
            DEVONA THELMA PINTO
          </h2>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] text-balance">
            I ship the
            <br />
            <span className="text-accent">infrastructure</span> that
            <br />
            ships the product.
          </h1>

          <p className="text-fg-dim text-base md:text-lg max-w-xl leading-relaxed">
            I&apos;m{" "}
            <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2 hover:brightness-110 transition-all select-none">
              Devona Pinto
            </span>
            <span className="inline-flex items-center gap-1.5 font-display text-[10px] bg-accent-2/10 text-accent-2 px-2 py-0.5 rounded-full border border-accent-2/20 ml-2 align-middle select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
              sys.on_call
            </span>{" "}
            — a Systems Engineer at Infosys, Mangalore,
            working on the Infra &amp; DevOps team. I design and run the
            platform clients land on: CloudFront distributions, S3 origins,
            EKS clusters behind Kong, and the CI/CD pipelines that push code
            from a laptop to production.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-display text-sm font-bold px-5 py-3 rounded-md bg-accent text-bg hover:opacity-90 transition-opacity"
            >
              See what I&apos;ve built
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display text-sm px-5 py-3 rounded-md border border-line hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>

            <div className="flex items-center gap-3 ml-auto text-fg-dim">
              <a
                href="https://github.com/devonapinto"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-accent transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/devona-pinto-3a9200252/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:devonapinto@gmail.com"
                aria-label="Email"
                className="hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-14 rounded-xl border border-line bg-bg-elev/60 p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-4 font-display text-xs text-fg-dim">
            <span>request_flow.svg — what a single page-load goes through</span>
            <span className="hidden sm:inline">CloudFront → ALB → EKS → Kong → service</span>
          </div>
          <InfraPipeline />
        </motion.div>
      </div>
    </section>
  );
}
