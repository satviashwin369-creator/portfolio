"use client";

import {
  MapPin,
  ArrowRight,
  FileText,
  Mail,
  Github,
  Terminal,
  Layers,
  Eye,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-[0.03] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--color-cyan)] rounded-full opacity-[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 space-y-6 animate-fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-muted)] border border-[rgba(99,102,241,0.2)] text-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-[var(--color-text-secondary)]">
                Open to opportunities
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                <span className="text-[var(--color-text-primary)]">
                  {personalInfo.firstName}
                </span>{" "}
                <span className="gradient-text">{personalInfo.lastName}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] font-light">
                {personalInfo.headline}
              </p>
            </div>

            {/* Location & Institution */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} aria-hidden="true" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" aria-hidden="true" />
              <span>{personalInfo.institutionShort}</span>
            </div>

            {/* Tagline */}
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
                aria-label="Explore my projects"
              >
                Explore Projects
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium text-sm hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] transition-all"
                aria-label="View resume PDF"
              >
                <FileText size={16} aria-hidden="true" />
                View Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium text-sm hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all"
                aria-label="Go to contact section"
              >
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </button>
            </div>

            {/* GitHub link */}
            <div className="pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] transition-colors"
                aria-label={`GitHub profile: ${personalInfo.githubUsername}`}
              >
                <Github size={16} aria-hidden="true" />
                {personalInfo.githubUsername}
              </a>
            </div>
          </div>

          {/* Right — Portrait placeholder & Focus areas */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up animation-delay-300">
            {/* Portrait placeholder */}
            <div className="relative mx-auto w-48 h-48 lg:w-56 lg:h-56">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text">
                    {personalInfo.initials}
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] mt-2">
                    Photo coming soon
                  </p>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)] rounded-tr-lg opacity-60" aria-hidden="true" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-cyan)] rounded-bl-lg opacity-60" aria-hidden="true" />
            </div>

            {/* Focus areas */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider text-center">
                Current Focus
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Terminal, label: "Full-Stack", color: "var(--color-accent)" },
                  { icon: Layers, label: "DevOps", color: "var(--color-cyan)" },
                  { icon: Eye, label: "CV / ML", color: "var(--color-success)" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card p-3 text-center"
                  >
                    <item.icon
                      size={18}
                      className="mx-auto mb-1.5"
                      style={{ color: item.color }}
                      aria-hidden="true"
                    />
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Overview of Technical Focus & Featured Projects */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] animate-fade-in-up animation-delay-400">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-hover)]">
                Engineering Highlights
              </p>
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                Technical Focus & Featured Work
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                Next.js & FastAPI
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                Docker & Redis
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                YOLO & DeepSORT
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Featured Project 1 Card */}
            <div
              onClick={() => scrollToSection("projects")}
              className="glass-card p-4 cursor-pointer hover:border-[var(--color-accent)] transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent-hover)]">
                    DevOps & Cloud Native
                  </span>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-hover)] transition-colors">
                    StackForge Platform
                  </h3>
                </div>
                <span className="text-xs text-[var(--color-accent-hover)] group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mb-3">
                Full-stack developer platform featuring interactive deployment pipelines (Source → Deploy) and Dockerized microservices.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tech-tag text-[10px] py-0.5 px-2">Next.js</span>
                <span className="tech-tag text-[10px] py-0.5 px-2">FastAPI</span>
                <span className="tech-tag text-[10px] py-0.5 px-2">PostgreSQL</span>
                <span className="tech-tag text-[10px] py-0.5 px-2">Docker</span>
              </div>
            </div>

            {/* Featured Project 2 Card */}
            <div
              onClick={() => scrollToSection("projects")}
              className="glass-card p-4 cursor-pointer hover:border-[var(--color-cyan)] transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-cyan)]">
                    Computer Vision & Deep Learning
                  </span>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-cyan)] transition-colors">
                    Real-Time Object Detection & Tracking
                  </h3>
                </div>
                <span className="text-xs text-[var(--color-cyan)] group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mb-3">
                Live video multi-object tracking retaining continuous identities across frames using YOLO and DeepSORT/SORT.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tech-tag text-[10px] py-0.5 px-2" style={{ background: "rgba(34, 211, 238, 0.15)", color: "var(--color-cyan)", borderColor: "rgba(34, 211, 238, 0.3)" }}>Python</span>
                <span className="tech-tag text-[10px] py-0.5 px-2" style={{ background: "rgba(34, 211, 238, 0.15)", color: "var(--color-cyan)", borderColor: "rgba(34, 211, 238, 0.3)" }}>OpenCV</span>
                <span className="tech-tag text-[10px] py-0.5 px-2" style={{ background: "rgba(34, 211, 238, 0.15)", color: "var(--color-cyan)", borderColor: "rgba(34, 211, 238, 0.3)" }}>YOLO</span>
                <span className="tech-tag text-[10px] py-0.5 px-2" style={{ background: "rgba(34, 211, 238, 0.15)", color: "var(--color-cyan)", borderColor: "rgba(34, 211, 238, 0.3)" }}>DeepSORT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
