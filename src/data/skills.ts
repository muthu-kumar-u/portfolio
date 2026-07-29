import type { SkillCategory } from "@/types";

/**
 * NOTE ON PROFICIENCY NUMBERS
 * The "Languages" tab values below (Golang 95, Python 82, JavaScript 85,
 * TypeScript 82, PHP 70, Node.js 78) come directly from the design reference.
 * The resume does not include numeric self-ratings for every category, so the
 * remaining tabs (Backend, Frontend, Cloud & Infra, Databases, ML / Applied)
 * use reasonable placeholder values, ordered by how central each skill is in
 * the resume/projects. Treat these as a starting point — adjust freely in
 * this file to match your own self-assessment.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Golang", level: 95, color: "cyan" },
      { name: "Python", level: 82, color: "purple" },
      { name: "JavaScript", level: 85, color: "yellow" },
      { name: "TypeScript", level: 82, color: "cyan" },
      { name: "PHP", level: 70, color: "purple" },
      { name: "Node.js", level: 78, color: "green" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "REST APIs", level: 92, color: "cyan" },
      { name: "Microservices", level: 88, color: "purple" },
      { name: "gRPC", level: 80, color: "cyan" },
      { name: "JWT & Auth", level: 85, color: "green" },
      { name: "SSE", level: 78, color: "purple" },
      { name: "Middleware Design", level: 84, color: "yellow" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", level: 90, color: "cyan" },
      { name: "TypeScript", level: 82, color: "purple" },
      { name: "Tailwind CSS", level: 88, color: "cyan" },
      { name: "Redux-Saga", level: 75, color: "purple" },
      { name: "HTML / CSS", level: 88, color: "yellow" },
      { name: "Bootstrap", level: 74, color: "green" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: 90, color: "cyan" },
      { name: "Terraform", level: 85, color: "purple" },
      { name: "Docker", level: 88, color: "cyan" },
      { name: "GitHub Actions", level: 84, color: "green" },
      { name: "AWS Lambda / EKS", level: 72, color: "purple" },
      { name: "CloudWatch / Prometheus", level: 78, color: "yellow" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90, color: "cyan" },
      { name: "Redis", level: 85, color: "purple" },
      { name: "MongoDB", level: 80, color: "cyan" },
      { name: "MySQL", level: 75, color: "green" },
      { name: "Apache Solr", level: 70, color: "purple" },
    ],
  },
  {
    id: "ml",
    label: "ML / Applied",
    skills: [
      { name: "scikit-learn", level: 78, color: "cyan" },
      { name: "OpenCV", level: 75, color: "purple" },
      { name: "pandas", level: 72, color: "green" },
    ],
  },
];

export const allTechnologies: string[] = [
  "Golang",
  "Python",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Node.js",
  "React",
  "Tailwind CSS",
  "Redux-Saga",
  "FastAPI",
  "Gin",
  "Laravel",
  "gRPC",
  "REST",
  "SSE",
  "JWT",
  "Microservices",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "GitLab CI/CD",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Apache Solr",
  "scikit-learn",
  "OpenCV",
  "pandas",
  "Prometheus",
  "CloudWatch",
];
