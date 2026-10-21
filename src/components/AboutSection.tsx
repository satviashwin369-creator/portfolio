"use client";

import { User, Code2, Lightbulb, Target } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6" aria-label="About me">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
              <User size={20} className="text-[var(--color-accent-hover)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main about text */}
          <div className="lg:col-span-2 space-y-4">
            {personalInfo.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--color-text-secondary)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interests sidebar */}
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                <Target size={16} className="text-[var(--color-accent-hover)]" aria-hidden="true" />
                Areas of Interest
              </h3>
              <ul className="space-y-2.5">
                {personalInfo.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                <Lightbulb size={16} className="text-[var(--color-warning)]" aria-hidden="true" />
                Approach
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                I believe in building software that solves real problems with
                clean architecture and maintainable code. I value learning
                fundamentals deeply before adopting new tools.
              </p>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                <Code2 size={16} className="text-[var(--color-cyan)]" aria-hidden="true" />
                Current Status
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Second-year B.Tech student at VJTI Mumbai, actively building
                projects and deepening CS fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
