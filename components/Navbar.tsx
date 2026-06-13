"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#infra", label: "infra" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-extrabold tracking-tight text-sm md:text-base text-fg"
        >
          devona<span className="text-accent">.</span>pinto
          <span className="text-fg-dim">/console</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-display text-xs text-fg-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Devona_Pinto_Resume.pdf"
          download
          className="hidden md:inline-flex items-center font-display text-xs px-4 py-2 border border-line rounded-md text-fg hover:border-accent hover:text-accent transition-colors"
        >
          resume.pdf
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-fg"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-bg px-6 py-4">
          <ul className="flex flex-col gap-4 font-display text-sm text-fg-dim">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Devona_Pinto_Resume.pdf"
                download
                className="text-accent"
              >
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
