"use client";

import { Award, BookOpen, GitFork, Sparkles, AlertCircle } from "lucide-react";
import { achievements } from "@/data/portfolio";

export default function AchievementsSection() {
  return (
    <section id="activities" className="py-20 px-6" aria-label="Activities and Milestones">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
              <Award
                size={20}
                className="text-[var(--color-accent-hover)]"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{achievements.title}</h2>
            </div>
          </div>
        </div>

        {/* Informational notice adhering to academic integrity */}
        <div className="mb-8 p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-start gap-3">
          <AlertCircle
            size={18}
            className="text-[var(--color-accent-hover)] mt-0.5 flex-shrink-0"
            aria-hidden="true"
          />
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            {achievements.notice}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.items.map((item, idx) => (
            <div key={idx} className="glass-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-cyan)]">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent-hover)] border border-[rgba(99,102,241,0.2)]">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Placeholders for upcoming milestones */}
          <div className="border border-dashed border-[var(--color-border)] rounded-xl p-6 flex flex-col justify-center items-center text-center bg-transparent">
            <Sparkles size={24} className="text-[var(--color-text-muted)] mb-3" aria-hidden="true" />
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
              Future Publications & Certifications
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] max-w-sm">
              Reserved space for research papers, hackathon honors, and verified technical certifications.
            </p>
          </div>

          <div className="border border-dashed border-[var(--color-border)] rounded-xl p-6 flex flex-col justify-center items-center text-center bg-transparent">
            <BookOpen size={24} className="text-[var(--color-text-muted)] mb-3" aria-hidden="true" />
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
              Technical Writing & Blog
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] max-w-sm">
              Articles covering DevOps pipelines, containerized architectures, and computer vision workflows will be linked here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
