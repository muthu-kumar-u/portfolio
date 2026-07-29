import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { scrollToSection } from "@/lib/lenis";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/ui/Reveal";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const codeSymbols = [
  { text: "</>", className: "left-[6%] top-[18%] text-2xl", delay: 0 },
  { text: "{ }", className: "right-[8%] top-[62%] text-3xl", delay: 0.6 },
  { text: "( )", className: "left-[14%] top-[70%] text-xl", delay: 1.1 },
  { text: "=>", className: "right-[18%] top-[12%] text-xl", delay: 1.6 },
];

export default function Hero() {
  const typedRole = useTypewriter(personal.heroRoles);
  const canRender3D = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 bg-grid-pattern bg-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-glow" />

      <div className="container-content relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal direction="up">
            <Badge className="mb-8">{personal.locationBadge}</Badge>
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              <span className="text-ink-primary">{personal.firstName}</span>
              <br />
              <span className="text-gradient-brand">{personal.lastName}</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="mt-6 flex h-8 items-center font-mono text-lg text-accent-cyan">
              <span className="mr-2 text-ink-muted">{">_"}</span>
              {typedRole}
              <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-accent-cyan" />
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <RichText
              text={personal.heroDescription}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary"
            />
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Button
                  href="#projects"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection("projects");
                  }}
                  icon={<FiExternalLink />}
                  size="lg"
                >
                  View Projects
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button href="/resume.pdf" download variant="outline" icon={<FiDownload />} size="lg">
                  Download Resume
                </Button>
              </MagneticButton>

              <Button
                href="#contact"
                variant="ghost"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact Me
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="mt-14 flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-ink-muted">
                Find me on
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative hidden h-[560px] lg:block">
          {canRender3D && !prefersReducedMotion && (
            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            </div>
          )}

          {!prefersReducedMotion &&
            codeSymbols.map((symbol) => (
              <span
                key={symbol.text}
                className={`absolute select-none font-mono text-accent-purple/25 animate-float-slow ${symbol.className}`}
                style={{ animationDelay: `${symbol.delay}s` }}
              >
                {symbol.text}
              </span>
            ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute right-2 top-[8%] flex flex-col items-end gap-4"
          >
            <Badge dotColor="green">{personal.availability}</Badge>

            <div className="glass-panel w-64 p-4 font-mono text-xs text-ink-secondary shadow-card">
              {personal.heroCodeSnippet.split("\n").map((line, index) => (
                <div key={index} className="whitespace-pre">
                  {line}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
}
