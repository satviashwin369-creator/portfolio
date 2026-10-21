# Ashwin Satvi — Personal Portfolio

A modern, interactive personal portfolio website built as an HCI (Human-Computer Interaction) mini-project. This website presents my professional profile, academic background, projects, and technical skills with a focus on usability, accessibility, and interaction design.

## 🚀 Features

- **Dashboard-style layout** with fixed sidebar navigation (desktop) and hamburger menu (mobile)
- **Dark theme** with indigo/cyan accents and glassmorphism cards
- **Responsive design** — adapts seamlessly from mobile to desktop
- **Interactive project cards** with expandable details and deployment pipeline visualizations
- **Keyboard accessible** — full keyboard navigation support with visible focus indicators
- **Smooth scrolling** with active section indicators
- **Copy-to-clipboard** for email address
- **Reduced motion** support for accessibility
- **SEO optimized** with proper meta tags, semantic HTML, and heading hierarchy

## 📋 Sections

1. **Home** — Hero section with introduction, CTAs, and focus areas
2. **About** — Background, interests, and approach
3. **Education** — Academic timeline with coursework
4. **Projects** — Featured projects with tech stacks and interactive details
5. **Skills** — Categorized technical skills
6. **Contact** — Email, GitHub, and quick connect

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/satviashwin369-creator/ashwin-satvi-portfolio.git
cd ashwin-satvi-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is configured for Vercel deployment:

1. Push the repository to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Deploy with default settings (Next.js is auto-detected)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, design system, animations
│   ├── layout.tsx         # Root layout with fonts & SEO metadata
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── Sidebar.tsx        # Navigation sidebar (desktop + mobile)
│   ├── HeroSection.tsx    # Landing/introduction section
│   ├── AboutSection.tsx   # About me section
│   ├── EducationSection.tsx # Academic timeline
│   ├── ProjectsSection.tsx  # Projects with expandable cards
│   ├── SkillsSection.tsx    # Technical skills grid
│   ├── ContactSection.tsx   # Contact information
│   └── Footer.tsx           # Site footer
└── data/
    └── portfolio.ts       # Central data source (resume content)
public/
└── Ashwin_Satvi_CV.pdf   # Resume PDF (add manually)
```

## 🎓 HCI Principles Demonstrated

| Principle | Implementation |
|-----------|---------------|
| Visibility of system status | Active navigation indicators, button hover states |
| Consistency | Unified design tokens, consistent card styles |
| Affordances | Clearly styled buttons, links, and interactive elements |
| User control | Close mobile menu with X or Escape, expandable project details |
| Error prevention | No broken links, disabled states for unavailable actions |
| Recognition over recall | Labeled navigation with icons, familiar UI patterns |
| Accessibility | Semantic HTML, ARIA labels, keyboard support, contrast |
| Minimalist design | Clean layout, focused content, no clutter |
| Responsive usability | Mobile-first responsive design |
| Feedback | Hover states, copy confirmation, smooth transitions |

## 👤 Author

**Ashwin Satvi**  
B.Tech Computer Engineering, VJTI Mumbai  
[GitHub](https://github.com/satviashwin369-creator) · [Email](mailto:satviashwin369@gmail.com)

## 📄 License

This project is for academic purposes (HCI Mini Project).
