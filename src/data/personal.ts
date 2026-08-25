import type { NavLink, Stat } from "@/types";

export const personal = {
  firstName: "Muthu",
  lastName: "Kumar",
  fullName: "Muthukumar",
  title: "Software Development Engineer",
  tagline: "Backend systems · Cloud platforms · Applied AI",
  location: "Tamil Nadu, India",
  locationBadge: "Tamil Nadu, India · Open to remote SDE roles",
  availability: "Open to opportunities",
  email: "muthu.in.code@gmail.com",
  phone: "+91 9361787750",
  heroRoles: [
    "Backend systems",
    "Cloud delivery",
    "Applied AI workflows",
  ],
  heroDescription:
    "Backend-first software engineer working across **Golang services, data workflows, AWS infrastructure**, and the product layers that bring them to life.",
  heroCodeSnippet: `design → build → ship → observe`,
  aboutEyebrow: "01 / Approach",
  aboutTitle: "Backend-first. Product-aware. Cloud-ready.",
  aboutParagraphs: [
    "I work across the full engineering path: requirements, low-level design, backend implementation, databases, deployment, monitoring, and maintenance.",
    "My core is **Golang backend engineering**—APIs, authentication, concurrent workflows, and service boundaries—with hands-on ownership of **AWS, Terraform, Docker, and CI/CD**.",
    "I also connect product interfaces and applied ML into those systems using **React, TypeScript, Python, scikit-learn, OpenCV, and OCR** when the problem calls for it.",
  ],
  currentlyWorkingWith: [
    "Golang",
    "Gin",
    "REST / gRPC / SSE",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Terraform",
    "Docker",
    "React",
    "Python",
  ],
  footerTagline: "Thoughtful systems. Clear interfaces. Reliable delivery.",
  footerCredit: "Designed and engineered with intention.",
} as const;

export const stats: Stat[] = [
  { label: "Years Experience", value: "3+" },
  { label: "Core Products", value: "4" },
  { label: "Engineering Layers", value: "3" },
  { label: "Primary Language", value: "Go" },
];

export const navLinks: NavLink[] = [
  { label: "Approach", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
