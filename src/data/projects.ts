import type { Project } from "@/types";

/** A curated subset of the broader project history. */
export const projects: Project[] = [
  {
    id: "catepilla",
    name: "Catepilla Child Development Center",
    tagline: "Clinical operations & therapy platform",
    role: "Backend · Product · Cloud",
    description:
      "A healthcare platform connecting doctors, therapists, admins, parents, and children through one coordinated care workflow.",
    highlights: [
      "Built Golang authentication and role-based access for a multi-role clinical environment",
      "Delivered onboarding, assessments, therapy programs, appointments, sessions, progress tracking, and monthly reporting workflows",
      "Connected the React/TypeScript product to PostgreSQL-backed services and AWS infrastructure managed with Terraform and Docker",
    ],
    stack: ["Golang", "JWT / RBAC", "PostgreSQL", "React", "TypeScript", "AWS", "Terraform", "Docker", "CI/CD"],
    featured: true,
  },
  {
    id: "clenz-mobile",
    name: "Clenz Mobile",
    tagline: "AI-powered skincare mobile platform",
    role: "Systems · Applied AI · Cloud",
    description:
      "A mobile skincare product backed by services for routines, product discovery, community features, and real-time AI-assisted analysis.",
    highlights: [
      "Designed Go services for auth, product, routine, community, and ML-inference workflows",
      "Connected REST, gRPC, and SSE flows with PostgreSQL, MongoDB, Redis, and Solr",
      "Integrated scikit-learn, OpenCV, and OCR, then containerized and deployed the system on AWS with Terraform, GitHub Actions, and Prometheus",
    ],
    stack: ["Golang", "Gin", "REST / gRPC / SSE", "PostgreSQL", "MongoDB", "Redis", "Solr", "scikit-learn", "OpenCV", "AWS"],
    featured: true,
  },
  {
    id: "origine",
    name: "Origine Questionnaire",
    tagline: "Predictive health-tech platform",
    role: "Python · ML integration · Delivery",
    description:
      "A health questionnaire that turns submitted responses into real-time model inference and personalized product guidance.",
    highlights: [
      "Built the API and inference path with FastAPI, scikit-learn, and pandas",
      "Connected a TypeScript/Vite interface to PostgreSQL-backed workflows",
      "Deployed with Docker Compose, AWS EC2, S3, CloudFront, SES, and GitHub Actions",
    ],
    stack: ["Python", "FastAPI", "scikit-learn", "pandas", "TypeScript", "Vite", "PostgreSQL", "AWS", "Docker Compose"],
    link: "https://ai.originesecret.com",
    featured: true,
  },
  {
    id: "formtheta",
    name: "Formtheta",
    tagline: "SaaS survey & form builder",
    role: "Full stack · Multi-database design",
    description:
      "A form-building and analytics product demonstrating end-to-end ownership across APIs, product UI, persistence, and delivery.",
    highlights: [
      "Built Golang REST APIs and React/Redux-Saga product workflows",
      "Used PostgreSQL, MongoDB, and Redis for complementary data needs",
      "Containerized and delivered the platform on AWS through automated CI/CD",
    ],
    stack: ["Golang", "REST", "React", "Redux-Saga", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "CI/CD"],
    link: "https://formtheta.com",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const additionalProjects = projects.filter((project) => !project.featured);

export const projectPortfolio = {
  totalDelivered: 7,
  showcased: projects.length,
} as const;
