import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface JourneyEntry {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  current?: boolean;
}

export type SkillCategoryId =
  | "systems"
  | "cloud"
  | "data"
  | "product";

export interface Skill {
  name: string;
  level: number; // 0-100
  color: "purple" | "cyan" | "yellow" | "green";
}

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  index: string;
  summary: string;
  proof: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  duration: string;
  mode: string;
  current?: boolean;
  summary: string;
  contributions: string[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  duration?: string;
  role?: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location?: string;
}

export interface Stat {
  label: string;
  value: string;
}
