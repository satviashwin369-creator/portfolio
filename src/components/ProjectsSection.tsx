"use client";

import { useState } from "react";
import {
  FolderGit2,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Layers,
  Eye,
  Shield,
  Play,
  CheckCircle2,
  Code2,
  Video,
  Search,
  Box,
  Cpu,
  Info,
} from "lucide-react";
import { projects } from "@/data/portfolio";

const pipelineStepDetails: Record<
  string,
  { icon: React.ElementType; desc: string; tool: string }
> = {
  Source: {
    icon: Code2,
    desc: "Webhook triggers upon commit push; project source fetched from Git repository.",
    tool: "Git Webhooks",
  },
  Build: {
    icon: Box,
    desc: "Docker multi-stage container builds for Next.js frontend, FastAPI backend, and worker services.",
    tool: "Docker Compose",
  },
  Test: {
    icon: CheckCircle2,
    desc: "Automated test suites executed to validate API endpoints, CRUD operations, and schema migrations.",
    tool: "Pytest & Jest",
  },
  "Security Scan": {
    icon: Shield,
    desc: "Vulnerability analysis checking dependencies, JWT expiration handlers, and container base images.",
    tool: "Trivy & Audit",
  },
  Deploy: {
    icon: Play,
    desc: "Orchestration of containerized services with PostgreSQL and Redis state synchronization.",
    tool: "FastAPI & Redis",
  },
  Verify: {
    icon: Search,
    desc: "Live health checks, uptime status tracking, and REST deployment verification metrics.",
    tool: "Health Endpoints",
  },
};

function DeploymentPipeline({ steps }: { steps: string[] }) {
  const [activeStep, setActiveStep] = useState<string>("Deploy");

  return (
    <div className="mt-4 p-4 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider flex items-center gap-1.5">
          <Info size={13} aria-hidden="true" />
          Interactive Deployment Pipeline (Click steps to inspect)
        </p>
        <span className="text-[10px] text-[var(--color-accent-hover)] font-mono">
          Stage: {activeStep}
        </span>
      </div>

      {/* Steps bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3">
        {steps.map((step) => {
          const detail = pipelineStepDetails[step];
          const Icon = detail?.icon || Layers;
          const isSelected = activeStep === step;

          return (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-medium transition-all text-left ${
                isSelected
                  ? "bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent)]/20 border-transparent"
                  : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
              }`}
              aria-label={`Inspect ${step} stage`}
              aria-pressed={isSelected}
            >
              <Icon size={13} aria-hidden="true" />
              <span>{step}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Inspector */}
      {pipelineStepDetails[activeStep] && (
        <div className="p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-start gap-3 animate-fade-in">
          <div className="p-2 rounded-md bg-[var(--color-accent-muted)] text-[var(--color-accent-hover)] mt-0.5">
            {(() => {
              const Icon = pipelineStepDetails[activeStep].icon;
              return <Icon size={16} aria-hidden="true" />;
            })()}
          </div>
          <div className="flex-1 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-[var(--color-text-primary)]">
                Stage: {activeStep}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-bg-primary)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                {pipelineStepDetails[activeStep].tool}
              </span>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {pipelineStepDetails[activeStep].desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const cvStages = [
  {
    id: "stream",
    icon: Video,
    title: "Video Stream",
    color: "var(--color-cyan)",
    desc: "Captures live frames sequentially from camera or video feed with frame skip optimization.",
  },
  {
    id: "detect",
    icon: Eye,
    title: "YOLO Detection",
    color: "var(--color-accent-hover)",
    desc: "Extracts bounding coordinates, class probabilities, and confidence scores across each frame.",
  },
  {
    id: "sort",
    icon: Layers,
    title: "DeepSORT / SORT",
    color: "var(--color-success)",
    desc: "Kalman filter models bounding box motion while deep appearance descriptors associate track identities.",
  },
  {
    id: "identity",
    icon: CheckCircle2,
    title: "ID Maintenance",
    color: "var(--color-warning)",
    desc: "Preserves persistent entity IDs through occlusions, trajectory overlap, and temporary camera blind spots.",
  },
];

function CVVisualization() {
  const [selectedStage, setSelectedStage] = useState(cvStages[1].id);

  return (
    <div className="mt-4 p-4 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider flex items-center gap-1.5">
          <Cpu size={13} aria-hidden="true" />
          Computer Vision Pipeline Flow (Click to inspect stage)
        </p>
        <span className="text-[10px] text-[var(--color-cyan)] font-mono">
          Architecture
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {cvStages.map((stage) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`p-2.5 rounded-lg text-xs font-medium transition-all text-left flex flex-col justify-between ${
                isSelected
                  ? "bg-[rgba(34,211,238,0.15)] border-[var(--color-cyan)] text-[var(--color-text-primary)] border shadow-sm"
                  : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
              }`}
              aria-label={`Inspect ${stage.title}`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <stage.icon size={14} style={{ color: stage.color }} aria-hidden="true" />
                <span className="font-semibold">{stage.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected stage details */}
      {(() => {
        const current = cvStages.find((s) => s.id === selectedStage);
        if (!current) return null;
        return (
          <div className="p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-start gap-3 animate-fade-in">
            <div
              className="p-2 rounded-md mt-0.5"
              style={{
                background: "rgba(34, 211, 238, 0.12)",
                color: current.color,
              }}
            >
              <current.icon size={16} aria-hidden="true" />
            </div>
            <div className="flex-1 text-xs">
              <span className="font-semibold text-[var(--color-text-primary)] block mb-1">
                {current.title}
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {current.desc}
              </p>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>("stackforge");

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-6" aria-label="Projects">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
              <FolderGit2
                size={20}
                className="text-[var(--color-accent-hover)]"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Projects & Engineering Work</h2>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                Featured software engineering and applied computer vision systems
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            const colorClass =
              project.color === "indigo"
                ? "var(--color-accent)"
                : "var(--color-cyan)";

            return (
              <article
                key={project.id}
                className="glass-card overflow-hidden"
                aria-label={`${project.title} project`}
              >
                {/* Project accent top bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(to right, ${colorClass}, transparent)`,
                  }}
                  aria-hidden="true"
                />

                <div className="p-6">
                  {/* Title & Quick Actions Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: colorClass }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                        <Calendar size={13} aria-hidden="true" />
                        {project.period}
                      </span>

                      {/* Direct Repository button on card header for verified repos */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-all"
                          aria-label={`Open ${project.title} repository on GitHub`}
                        >
                          <Github size={13} aria-hidden="true" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand/collapse button */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-hover)] hover:text-[var(--color-accent)] transition-colors"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${project.id}`}
                    >
                      {isExpanded ? "Collapse Details" : "Inspect Architecture & Features"}
                      {isExpanded ? (
                        <ChevronUp size={15} aria-hidden="true" />
                      ) : (
                        <ChevronDown size={15} aria-hidden="true" />
                      )}
                    </button>

                    {/* Unverified repository status note */}
                    {!project.githubUrl && (
                      <span className="text-xs text-[var(--color-text-muted)] italic">
                        Repository: In private development
                      </span>
                    )}
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div
                      id={`project-details-${project.id}`}
                      className="mt-5 pt-5 border-t border-[var(--color-border)] animate-fade-in"
                    >
                      <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                        Key Engineering Features
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-[var(--color-success)] mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Interactive Visualizations */}
                      {project.pipelineSteps && (
                        <DeploymentPipeline steps={project.pipelineSteps} />
                      )}
                      {project.id === "object-detection" && <CVVisualization />}

                      {/* Bottom action links */}
                      <div className="flex flex-wrap items-center gap-3 mt-5 pt-2">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] transition-all"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github size={15} aria-hidden="true" />
                            View GitHub Repository
                            <ExternalLink size={12} className="opacity-70" aria-hidden="true" />
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                            <Github size={13} aria-hidden="true" />
                            <span>Repository URL will be linked upon public release</span>
                          </div>
                        )}

                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors"
                          >
                            <ExternalLink size={14} aria-hidden="true" />
                            Live Demo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
