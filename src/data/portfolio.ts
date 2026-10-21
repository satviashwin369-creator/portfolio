// Portfolio data — single source of truth
// All content derived from Ashwin Satvi's resume

export const personalInfo = {
  name: "Ashwin Satvi",
  firstName: "Ashwin",
  lastName: "Satvi",
  initials: "AS",
  location: "Mumbai, India",
  email: "satviashwin369@gmail.com",
  github: "https://github.com/satviashwin369-creator",
  githubUsername: "satviashwin369-creator",
  headline: "Computer Engineering Student",
  tagline: "Building practical software systems at the intersection of full-stack development, DevOps, and computer vision.",
  institution: "Veermata Jijabai Technological Institute (VJTI)",
  institutionShort: "VJTI Mumbai",
  degree: "B.Tech in Computer Engineering",
  studyPeriod: "Sep 2024 – Present",
  resumePath: "/Ashwin_Satvi_CV.pdf",
  about: [
    "I'm a Computer Engineering student at VJTI Mumbai with a strong interest in building practical, well-engineered software systems.",
    "My work spans full-stack web development, cloud-native DevOps platforms, and real-time computer vision applications. I enjoy the process of taking an idea from design through implementation to deployment.",
    "I'm particularly drawn to systems that require thoughtful architecture — whether that's designing deployment pipelines with containerized services, or building real-time detection systems that maintain object identities across video frames.",
    "Currently deepening my understanding of data structures, algorithms, operating systems, and machine learning while building projects that apply these fundamentals to real problems."
  ],
  interests: [
    "Full-Stack Development",
    "Cloud Native & DevOps",
    "Computer Vision",
    "Machine Learning",
    "Systems Architecture"
  ]
};

export const education = [
  {
    id: "vjti",
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    degree: "B.Tech in Computer Engineering",
    location: "Mumbai, Maharashtra",
    period: "Sep 2024 – Present",
    isCurrent: true,
    description: "Pursuing undergraduate degree with focus on computer science fundamentals, software engineering, and applied machine learning."
  },
  {
    id: "mkjc",
    institution: "M.K. Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    location: "Palghar, Maharashtra",
    period: "Jul 2021 – Mar 2023",
    isCurrent: false,
    description: "Completed higher secondary education with focus on science and mathematics."
  },
  {
    id: "bmt",
    institution: "BMT English Medium High School",
    degree: "Secondary School Certificate (SSC)",
    location: "Palghar, Maharashtra",
    period: "Jun 2020 – Apr 2021",
    isCurrent: false,
    description: "Completed secondary education."
  }
];

export const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Design and Analysis of Algorithms",
  "Operating Systems",
  "Database Management Systems",
  "Machine Learning",
  "Web Development",
  "Computer Architecture",
  "Discrete Mathematics",
  "Linear Algebra",
  "Probability and Statistics",
  "Python Development"
];

export const projects = [
  {
    id: "stackforge",
    title: "StackForge",
    subtitle: "Cloud Native DevOps Platform",
    period: "Aug 2026 – Present",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker", "Docker Compose"],
    overview: "A full-stack internal developer platform for managing projects, deployments, and pipelines with containerized microservices.",
    features: [
      "Full-stack developer platform for managing projects, deployments, and pipelines",
      "JWT-based authentication and PostgreSQL-backed user management",
      "Full REST API for project and deployment CRUD operations",
      "Interactive deployment workflow: Source → Build → Test → Security Scan → Deploy → Verify",
      "Containerized services: frontend, backend, PostgreSQL, Redis, and worker"
    ],
    pipelineSteps: ["Source", "Build", "Test", "Security Scan", "Deploy", "Verify"],
    githubUrl: "https://github.com/satviashwin369-creator/StackForge",
    demoUrl: null as string | null,
    color: "indigo" as const
  },
  {
    id: "object-detection",
    title: "Real-Time Object Detection & Tracking",
    subtitle: "Computer Vision System",
    period: "Feb 2026 – Present",
    tech: ["Python", "OpenCV", "YOLO", "DeepSORT/SORT"],
    overview: "A real-time computer vision system for multi-object detection and tracking from live video streams.",
    features: [
      "Real-time multi-object detection and tracking from live video streams",
      "Object identity maintenance across video frames using DeepSORT/SORT",
      "Applications in surveillance and traffic monitoring",
      "Optimized inference through efficient frame processing and model tuning"
    ],
    pipelineSteps: null,
    githubUrl: null as string | null,
    demoUrl: null as string | null,
    color: "cyan" as const
  }
];

export const skills = [
  {
    category: "Programming",
    icon: "Code2",
    items: ["Python", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy"]
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MySQL", "PostgreSQL", "Redis"]
  },
  {
    category: "DevOps & Systems",
    icon: "Container",
    items: ["Docker", "Docker Compose", "Linux"]
  },
  {
    category: "Machine Learning",
    icon: "Brain",
    items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    category: "CS Fundamentals",
    icon: "BookOpen",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming"]
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "VS Code", "Kaggle", "Google Colab"]
  }
];

export const achievements = {
  title: "Milestones & Extracurriculars",
  subtitle: "Academic and technical activities",
  notice: "This section is reserved for verified achievements, technical publications, competitive programming rankings, and extracurricular leadership. As milestones are earned and verified, they will be documented here.",
  items: [
    {
      category: "Academic & Campus",
      title: "B.Tech Computer Engineering at VJTI Mumbai",
      status: "In Progress (2024 – Present)",
      description: "Active coursework in core CS fundamentals, algorithms, systems programming, and machine learning."
    },
    {
      category: "Open Source & Engineering",
      title: "Cloud-Native & Computer Vision Projects",
      status: "Active Development",
      description: "Engineering containerized developer tools (StackForge) and real-time visual tracking systems."
    }
  ]
};

export const navItems = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "projects", label: "Projects", icon: "FolderGit2" },
  { id: "skills", label: "Skills", icon: "Cpu" },
  { id: "activities", label: "Activities", icon: "Award" },
  { id: "contact", label: "Contact", icon: "Mail" }
];
