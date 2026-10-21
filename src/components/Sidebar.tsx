"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Cpu,
  Mail,
  Award,
  Menu,
  X,
  Github,
  FileText,
  ChevronRight,
} from "lucide-react";
import { personalInfo, navItems } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Cpu,
  Award,
  Mail,
};

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intersection observer for active section detection
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
        setMobileMenuOpen(false);
      }
    },
    []
  );

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navContent = (
    <>
      {/* Profile section */}
      <div className="px-4 py-6 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-muted)] border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent-hover)] font-bold text-sm">
            {personalInfo.initials}
          </div>
          <div>
            <h2 className="font-semibold text-sm text-[var(--color-text-primary)]">
              {personalInfo.name}
            </h2>
            <p className="text-xs text-[var(--color-text-muted)]">
              {personalInfo.headline}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <nav aria-label="Main navigation" className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link w-full text-left ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  aria-current={
                    activeSection === item.id ? "true" : undefined
                  }
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {Icon && <Icon size={18} aria-hidden="true" />}
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <ChevronRight
                      size={14}
                      className="ml-auto opacity-60"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 border-t border-[var(--color-border)] space-y-2">
        <a
          href={personalInfo.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors w-full justify-center"
          aria-label="View resume PDF"
        >
          <FileText size={16} aria-hidden="true" />
          View Resume
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-text-secondary)] rounded-lg hover:bg-[var(--color-accent-muted)] hover:text-[var(--color-text-primary)] transition-colors w-full justify-center"
          aria-label={`GitHub profile: ${personalInfo.githubUsername}`}
        >
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-sidebar)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent-hover)] font-bold text-xs">
              {personalInfo.initials}
            </div>
            <span className="font-semibold text-sm">
              {personalInfo.name}
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[var(--color-accent-muted)] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay lg:hidden ${
          mobileMenuOpen ? "active" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border)] z-50 transform transition-transform duration-300 lg:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {navContent}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border)] flex-col z-30"
        aria-label="Desktop navigation"
      >
        {navContent}
      </aside>
    </>
  );
}
