import type { NavLink, Stat } from "@/types";

export const personal = {
  firstName: "Muthu",
  lastName: "kumar",
  fullName: "Muthukumar",
  title: "Software Development Engineer",
  tagline: "Golang · System Design · Cloud · Full SDLC",
  location: "Tamil Nadu, India",
  locationBadge: "Tamil Nadu, India · Available for remote roles",
  availability: "Open to opportunities",
  email: "muthu.in.code@gmail.com",
  phone: "+91 9361787750",
  heroRoles: [
    "Software Engineer",
    "DevOps Engineer",
    "Golang Engineer",
    "Cloud Architect",
    "System Designer",
  ],
  heroDescription:
    "Building production-grade cloud-native systems with **Golang**, **AWS**, and **Terraform** — from microservice design to deployment and observability.",
  heroCodeSnippet: `// main.go
func main() {
  server.Start(":8080")
}`,
  aboutEyebrow: "01. About Me",
  aboutTitle: "The Engineer Behind the Code",
  aboutParagraphs: [
    "I'm a Software Development Engineer with strong foundations in **system design, distributed systems**, and the full SDLC — from architecture and low-level design through deployment and monitoring.",
    "My primary expertise is in **Golang backend engineering**, with breadth across React, Python, and Node.js. I build and own production-grade **cloud-native infrastructure on AWS** with Terraform and Docker, driving automated CI/CD.",
    "I've collaborated directly with Founding Engineers on architecture and delivery of multiple products — from AI-powered mobile apps to SaaS platforms — with a strong focus on **performance, observability, and clean service boundaries**.",
  ],
  currentlyWorkingWith: [
    "Golang",
    "Python",
    "TypeScript",
    "React",
    "AWS",
    "Terraform",
    "Docker",
    "PostgreSQL",
    "Redis",
    "gRPC",
  ],
  footerTagline: "Building scalable systems, one commit at a time.",
  footerCredit: "Crafted with \u2665 and Go",
} as const;

export const stats: Stat[] = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "7+" },
  { label: "Technologies", value: "15+" },
  { label: "Companies", value: "3" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
