import { FiArrowUp } from "react-icons/fi";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { scrollToSection } from "@/lib/lenis";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-base-950">
      <div className="container-content flex flex-col items-center gap-6 py-16 text-center">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("home");
          }}
          className="font-display text-lg font-semibold tracking-tight text-ink-primary"
        >
          <span className="text-accent-purple">{"{"}</span> muthukumar{" "}
          <span className="text-accent-cyan">{"}"}</span>
        </a>
        <p className="text-sm text-ink-secondary">{personal.footerTagline}</p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-muted sm:flex-row">
          <span>
            © {year} {personal.fullName}. All rights reserved.
          </span>
          <span>{personal.footerCredit}</span>
          <MagneticButton>
            <button
              type="button"
              aria-label="Back to top"
              onClick={() => scrollToSection("home")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-accent-purple/40 hover:text-accent-purple"
            >
              <FiArrowUp size={14} />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
