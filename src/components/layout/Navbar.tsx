import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navLinks } from "@/data/personal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/lenis";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme !== "light",
  );
  const sectionIds = useMemo(
    () => ["home", ...navLinks.map((link) => link.href.slice(1))],
    [],
  );
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setMobileOpen(false);
    scrollToSection(href);
  }

  function toggleTheme() {
    const nextDark = !isDark;
    const theme = nextDark ? "dark" : "light";
    setIsDark(nextDark);
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextDark ? "#0b0b0e" : "#f4f2eb",
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="mx-auto flex h-14 max-w-[1220px] items-center justify-between rounded-full border border-border/20 bg-base-950/75 px-3 shadow-card backdrop-blur-2xl sm:h-16 sm:px-4">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="group flex items-center gap-3 pl-1"
          aria-label="Muthukumar — back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-primary font-display text-[11px] font-extrabold tracking-tight text-base-950 transition-transform duration-300 group-hover:rotate-6">
            MK
          </span>
          <span className="hidden text-xs font-semibold tracking-[-0.01em] text-ink-primary sm:block">
            Muthukumar
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={cn(
                    "relative block rounded-full px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
                    isActive
                      ? "text-base-950"
                      : "text-ink-secondary hover:text-ink-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-cyan"
                      transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/20 text-ink-secondary transition-colors hover:border-accent-violet/50 hover:text-accent-purple"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? "sun" : "moon"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="/Muthukumar_SDE_Resume_R3.docx"
            download="Muthukumar_SDE_Resume_R3.docx"
            className="hidden items-center gap-2 rounded-full bg-ink-primary px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.09em] text-base-950 transition-transform hover:-translate-y-0.5 sm:flex"
          >
            Resume <FiDownload size={13} />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/20 text-ink-primary lg:hidden"
          >
            {mobileOpen ? <FiX size={17} /> : <FiMenu size={17} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-[1220px] overflow-hidden rounded-[1.5rem] border border-border/20 bg-base-950/95 p-3 shadow-card backdrop-blur-2xl lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-ink-secondary transition-colors hover:bg-base-800 hover:text-ink-primary"
                  >
                    {link.label}
                    <span className="font-mono text-[10px] text-ink-muted">0{index + 1}</span>
                  </a>
                </li>
              ))}
              <li className="mt-1 sm:hidden">
                <a
                  href="/Muthukumar_SDE_Resume_R3.docx"
                  download="Muthukumar_SDE_Resume_R3.docx"
                  className="flex items-center justify-center gap-2 rounded-xl bg-accent-cyan px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.1em] text-base-950"
                >
                  Download SDE Resume <FiDownload size={13} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
