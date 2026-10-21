"use client";

import {
  Cpu,
  Code2,
  Layout,
  Server,
  Database,
  Container,
  Brain,
  BookOpen,
  Wrench,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Container,
  Brain,
  BookOpen,
  Wrench,
};

const categoryColors: Record<string, string> = {
  Programming: "var(--color-accent)",
  Frontend: "var(--color-cyan)",
  Backend: "var(--color-success)",
  Databases: "var(--color-warning)",
  "DevOps & Systems": "#a78bfa",
  "Machine Learning": "#f472b6",
  "CS Fundamentals": "#fb923c",
  Tools: "#94a3b8",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6" aria-label="Technical skills">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
              <Cpu
                size={20}
                className="text-[var(--color-accent-hover)]"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            const color = categoryColors[skill.category] || "var(--color-accent)";

            return (
              <div key={skill.category} className="skill-category">
                <div className="flex items-center gap-2.5 mb-4">
                  {Icon && (
                    <Icon
                      size={18}
                      style={{ color }}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
