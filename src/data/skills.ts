import type { SkillCategory } from "@/types";

/** Capability groups synthesized from all four resume variants. */
export const skillCategories: SkillCategory[] = [
  {
    id: "systems",
    index: "01",
    label: "Backend Systems",
    summary:
      "Backend-first engineering for API-driven products, with clear service boundaries and concurrent workflows.",
    proof:
      "Used across authentication, product, routine, community, questionnaire, and ML-inference services.",
    skills: [
      "Golang", "Gin", "Goroutines", "Channels", "Worker pools", "Context",
      "REST", "gRPC", "Protocol Buffers", "SSE", "JWT / RBAC",
      "Microservices", "Clean architecture", "System design",
    ],
  },
  {
    id: "cloud",
    index: "02",
    label: "Cloud & Delivery",
    summary:
      "Infrastructure ownership from provisioning and containerization through automated delivery and operations.",
    proof:
      "Deployed product environments with Terraform, Docker, AWS, CI/CD, monitoring, and production troubleshooting.",
    skills: [
      "AWS EC2", "RDS", "S3", "VPC", "CloudFront", "Route 53", "IAM",
      "SES", "Secrets Manager", "Lambda", "Terraform", "Docker / Compose",
      "GitHub Actions", "GitLab CI/CD",
    ],
  },
  {
    id: "data",
    index: "03",
    label: "Data & Reliability",
    summary:
      "Pragmatic data choices and operational feedback loops for database-backed applications.",
    proof:
      "Worked with relational, document, cache, and search stores alongside metrics and structured logging.",
    skills: [
      "PostgreSQL", "MongoDB", "Redis", "MySQL", "Apache Solr",
      "Prometheus", "CloudWatch", "Structured logging", "Caching",
      "Production debugging",
    ],
  },
  {
    id: "product",
    index: "04",
    label: "Product & Applied AI",
    summary:
      "Supporting frontend and ML capability to carry backend systems into complete product experiences.",
    proof:
      "Integrated model inference, computer vision, OCR, dashboards, and real-time product flows.",
    skills: [
      "Python", "FastAPI", "scikit-learn", "pandas", "KNN", "Decision Trees",
      "AdaBoost", "OpenCV", "OCR", "React", "TypeScript", "JavaScript",
      "Redux-Saga",
    ],
  },
];

export const allTechnologies = Array.from(
  new Set(skillCategories.flatMap((category) => category.skills)),
);
