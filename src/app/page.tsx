import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar navigation */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 lg:ml-64">
        {/* Spacer for mobile header */}
        <div className="h-14 lg:hidden" aria-hidden="true" />

        <HeroSection />

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-[var(--color-border)]" />
        </div>

        <AboutSection />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-[var(--color-border)]" />
        </div>

        <EducationSection />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-[var(--color-border)]" />
        </div>

        <ProjectsSection />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-[var(--color-border)]" />
        </div>

        <SkillsSection />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-[var(--color-border)]" />
        </div>

        <AchievementsSection />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-[var(--color-border)]" />
        </div>

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}
