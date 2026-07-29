import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muthukumar-u",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/muthu-kumar-u",
    icon: FiGithub,
  },
  {
    label: "Email",
    href: "mailto:muthu.in.code@gmail.com",
    icon: FiMail,
  },
];
