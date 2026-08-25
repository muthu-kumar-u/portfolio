import { FiArrowUp, FiDownload } from "react-icons/fi";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { scrollToSection } from "@/lib/lenis";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-5 pt-10">
      <div className="container-content">
        <div className="grid gap-10 border-t border-border/15 py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-left text-2xl font-semibold tracking-[-0.04em] text-ink-primary"
            >
              Muthukumar<span className="text-accent-cyan">.</span>
            </button>
            <p className="mt-3 max-w-md text-sm text-ink-secondary">{personal.footerTagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.filter((social) => social.href.startsWith("http")).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-border/20 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-secondary transition-colors hover:border-accent-purple/45 hover:text-ink-primary"
              >
                {social.label}
              </a>
            ))}
            <a
              href="/Muthukumar_SDE_Resume_R3.docx"
              download="Muthukumar_SDE_Resume_R3.docx"
              className="flex items-center gap-2 rounded-full border border-border/20 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-secondary transition-colors hover:border-accent-cyan/45 hover:text-ink-primary"
            >
              Resume <FiDownload size={11} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/15 py-6 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {personal.fullName}</span>
          <span>{personal.footerCredit}</span>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-ink-secondary transition-colors hover:text-accent-cyan"
          >
            Back to top <FiArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}
