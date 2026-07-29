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
      "Collaborating directly with Founding Engineers to architect and deliver multiple production products — from AI-powered mobile apps to SaaS platforms — owning the full Golang backend and AWS infrastructure end-to-end.",
    contributions: [
      "Architected Golang (Gin) microservices for Clenz — auth, product, ML inference, community, and routine services — with SSE-based real-time face scan streaming",
      "Built an ML pipeline integrating scikit-learn (KNN, Decision Trees, AdaBoost) + OpenCV for skin concern detection, OCR product input, and duplicate finder",
      "Provisioned full AWS infrastructure (EC2, RDS, S3, IAM, Secrets Manager, CloudFront) with Terraform; CI/CD via GitHub Actions; observability with Prometheus",
      "Led full-stack delivery of Catepilla — React + TypeScript frontend with role-based views for doctors, therapists, parents, and admins; Golang microservices with JWT/RBAC",
      "Built the Formtheta SaaS platform with a React + Redux-Saga frontend and a Golang REST API backend using hybrid storage (PostgreSQL, MongoDB, Redis)",
      "Delivered the Origine health-tech platform with a FastAPI (Python) backend + scikit-learn models and AWS infrastructure (EC2, S3, CloudFront, SES)",
    ],
    stack: [
      "Golang (Gin)",
      "Python (FastAPI)",
      "React",
      "TypeScript",
      "AWS",
      "Terraform",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "gRPC",
      "SSE",
      "GitHub Actions",
      "Prometheus",
      "scikit-learn",
      "OpenCV",
    ],
  },
  {
    id: "nrg-phoenix-fullstack",
    role: "Full Stack Developer",
    company: "NRG Phoenix Technology",
    duration: "Jul 2023 — Jun 2024",
    mode: "On-Site",
    summary:
      "On-site full-stack development role delivering two production platforms — a centralised admin portal for gas services operations and a job/e-learning platform integrated with Moodle LMS.",
    contributions: [
      "Built the Agas National centralised admin portal (Laravel/PHP monolith with Blade templates) for managing bookings, service tracking, and employee operations in the gas services sector",
      "Implemented a responsive UI with jQuery + Bootstrap and integrated REST APIs across both platforms",
      "Built the Career Portal — a job application and e-learning platform integrated with Moodle LMS for course delivery and progress tracking",
      "Set up and maintained GitLab CI/CD pipelines for both platforms",
    ],
    stack: ["Laravel", "PHP", "Bootstrap", "jQuery", "REST APIs", "Moodle LMS", "GitLab CI/CD"],
  },
  {
    id: "nelsonin-intern",
    role: "Junior React Developer — Intern",
    company: "Nelsonin Research Pvt Ltd",
    duration: "Aug 2022 — Nov 2022",
    mode: "Remote",
    summary:
      "Remote internship focused on React frontend development. Completed the programme and earned a React Certification (Junior Front-End Developer) from Nelsonin Research.",
    contributions: [
      "Built React frontend components and interfaces as part of a remote internship programme",
      "Collaborated with the team using modern JavaScript, HTML, and CSS practices",
      "Earned the React Certification (Junior Front-End Developer) upon successful completion",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
  },
];
