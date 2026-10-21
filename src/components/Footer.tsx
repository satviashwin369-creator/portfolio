"use client";

import { useState, useEffect } from "react";
import { Github, Mail, ArrowUp } from "lucide-react";
import { personalInfo, navItems } from "@/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-sidebar)]"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent-hover)] font-bold text-xs">
                {personalInfo.initials}
              </div>
              <span className="font-semibold text-sm text-[var(--color-text-primary)]">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-xs">
              {personalInfo.headline} at {personalInfo.institutionShort}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Sections
            </h3>
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-hover)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-hover)] transition-colors"
                aria-label={`GitHub: ${personalInfo.githubUsername}`}
              >
                <Github size={14} aria-hidden="true" />
                {personalInfo.githubUsername}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-hover)] transition-colors"
                aria-label={`Email: ${personalInfo.email}`}
              >
                <Mail size={14} aria-hidden="true" />
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {year} {personalInfo.name}. Built with
            Next.js, TypeScript & Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
