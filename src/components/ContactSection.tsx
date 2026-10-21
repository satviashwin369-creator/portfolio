"use client";

import { useState, useCallback } from "react";
import { Mail, Github, Send, MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select and copy
      const textArea = document.createElement("textarea");
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <section id="contact" className="py-20 px-6" aria-label="Contact">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
              <Mail
                size={20}
                className="text-[var(--color-accent-hover)]"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-2xl font-bold">Get In Touch</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m always open to discussing new projects, collaboration
              opportunities, or interesting technical problems. Feel free to
              reach out!
            </p>

            {/* Email card */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[var(--color-accent-muted)]">
                  <Mail
                    size={18}
                    className="text-[var(--color-accent-hover)]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-hover)] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  <Send size={14} aria-hidden="true" />
                  Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-all"
                  aria-label={copied ? "Email copied" : "Copy email address"}
                >
                  {copied ? (
                    <>
                      <Check size={14} aria-hidden="true" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub card */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[var(--color-bg-card)]">
                  <Github
                    size={18}
                    className="text-[var(--color-text-primary)]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                    GitHub
                  </p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-hover)] transition-colors"
                  >
                    {personalInfo.githubUsername}
                  </a>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-all"
                aria-label={`Visit GitHub profile: ${personalInfo.githubUsername}`}
              >
                <ExternalLink size={14} aria-hidden="true" />
                View Profile
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <MapPin size={14} aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick reach card */}
          <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/20 flex items-center justify-center mb-4">
              <Send size={24} className="text-[var(--color-accent-hover)]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-xs">
              Whether it&apos;s a project idea, a technical question, or just a
              conversation about engineering — I&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20Ashwin!`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
              aria-label="Send email to Ashwin"
            >
              <Mail size={18} aria-hidden="true" />
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
