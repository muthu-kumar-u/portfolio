import type { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "nelsonin-llc-sde",
    role: "Software Development Engineer",
    company: "Nelsonin Research LLC",
    duration: "Jun 2024 — Present",
    mode: "Remote",
    current: true,
    summary:
      "Delivering backend and cloud systems for healthcare, AI, and SaaS products while collaborating directly with founding engineers.",
    contributions: [
      "Own the path from requirements and low-level design through Golang implementation, data workflows, cloud deployment, monitoring, and maintenance",
      "Design APIs, authentication/RBAC, concurrent workflows, service boundaries, and real-time REST/gRPC/SSE integrations",
      "Provision and operate AWS environments with Terraform, Docker, automated CI/CD, Prometheus, and structured logging",
      "Connect applied ML components to product workflows using scikit-learn, OpenCV, OCR, FastAPI, and supporting React/TypeScript interfaces",
    ],
    stack: ["Golang", "Python", "React", "TypeScript", "AWS", "Terraform", "Docker", "PostgreSQL", "MongoDB", "Redis", "Prometheus"],
  },
  {
    id: "nrg-phoenix-fullstack",
    role: "Full Stack Developer",
    company: "NRG Phoenix Technology",
    duration: "Jul 2023 — Jun 2024",
    mode: "On-site",
    summary:
      "Delivered database-backed business applications across the full software development lifecycle.",
    contributions: [
      "Built backend and frontend workflows, REST integrations, and responsive business interfaces",
      "Worked across implementation, testing, deployment, and maintenance",
      "Automated delivery through GitLab CI/CD",
    ],
    stack: ["Laravel", "PHP", "JavaScript", "Bootstrap", "REST APIs", "MySQL", "GitLab CI/CD"],
  },
  {
    id: "nelsonin-intern",
    role: "Junior React Developer — Intern",
    company: "Nelsonin Research Pvt Ltd",
    duration: "Aug 2022 — Nov 2022",
    mode: "Remote",
    summary:
      "Started my professional path contributing to React application development in a remote engineering team.",
    contributions: [
      "Built interface components with React, JavaScript, HTML, and CSS",
      "Learned team delivery practices through hands-on product work",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
  },
];
