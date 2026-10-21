"use client";

import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { education, coursework } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-6" aria-label="Education">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
              <GraduationCap
                size={20}
                className="text-[var(--color-accent-hover)]"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="glass-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-[var(--color-text-primary)]">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-[var(--color-accent-hover)]">
                          {edu.degree}
                        </p>
                      </div>
                      {edu.isCurrent && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)] mt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} aria-hidden="true" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} aria-hidden="true" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div>
            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                <BookOpen
                  size={16}
                  className="text-[var(--color-accent-hover)]"
                  aria-hidden="true"
                />
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span key={course} className="tech-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
