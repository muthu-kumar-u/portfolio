import { Suspense, lazy, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { personal } from "@/data/personal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { scrollToSection } from "@/lib/lenis";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/ui/Reveal";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const signalTech = [
  "Golang", "gRPC", "PostgreSQL", "AWS", "Terraform", "Docker",
  "Redis", "React", "TypeScript", "FastAPI", "OpenCV", "Prometheus",
];

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function SystemStage({ render3D }: { render3D: boolean }) {
  return (
    <Reveal direction="scale" delay={0.15} className="relative min-w-0">
      <div className="system-stage relative aspect-[4/4.3] min-h-[420px] w-full md:min-h-[540px] lg:min-h-[620px]">
        <div className="absolute inset-0 hero-mesh opacity-70" />

        {render3D ? (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        ) : (
          <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
            <div className="relative h-48 w-48 animate-pulse-soft rounded-full border border-accent-violet/40">
              <div className="absolute inset-8 rounded-full border border-accent-cyan/50" />
              <div className="absolute inset-[4.5rem] rounded-full bg-accent-purple/70 shadow-glow" />
            </div>
          </div>
        )}

        <span className="stage-label left-5 top-5 md:left-7 md:top-7">API gateway</span>
        <span className="stage-label right-5 top-[23%] md:right-7">Cloud runtime</span>
        <span className="stage-label bottom-[22%] left-5 md:left-7">Data layer</span>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-border/20 pt-4 md:inset-x-7 md:bottom-7">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">System state</p>
            <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-ink-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_rgb(var(--accent-signal))]" />
              Operational
            </p>
          </div>
          <p className="max-w-[12rem] text-right font-mono text-[9px] leading-relaxed text-ink-muted">
            MOVE YOUR CURSOR<br />TO EXPLORE THE MODEL
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Hero() {
  const canRender3D = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [webglSupported] = useState(supportsWebGL);

  return (
    <>
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-10">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-40" />
        <div className="pointer-events-none absolute -left-48 top-16 h-[30rem] w-[30rem] rounded-full bg-accent-purple/10 blur-[120px]" />

        <div className="container-content relative grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="relative z-10 min-w-0 lg:py-16">
            <Reveal direction="up">
              <div className="mb-9 flex flex-wrap items-center gap-3">
                <Badge dotColor="green">{personal.availability}</Badge>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                  {personal.location}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.05}>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.19em] text-accent-purple">
                Muthukumar — Software Development Engineer
              </p>
              <h1 className="max-w-3xl text-[clamp(3.25rem,7vw,7rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-ink-primary">
                I build the systems behind the{" "}
                <span className="editorial-emphasis text-gradient-brand">experience.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <RichText
                text={personal.heroDescription}
                className="mt-8 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg"
              />
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-2">
                {personal.heroRoles.map((role, index) => (
                  <span
                    key={role}
                    className="rounded-full border border-border/20 bg-base-900/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-secondary"
                  >
                    0{index + 1} · {role}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <Button
                    href="#projects"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("projects");
                    }}
                    icon={<FiArrowDownRight />}
                    size="lg"
                  >
                    Explore selected work
                  </Button>
                </MagneticButton>

                <Button
                  href="/Muthukumar_SDE_Resume_R3.docx"
                  download="Muthukumar_SDE_Resume_R3.docx"
                  variant="outline"
                  icon={<FiDownload />}
                  size="lg"
                >
                  SDE resume
                </Button>
              </div>
            </Reveal>

            <Reveal direction="fade" delay={0.3}>
              <div className="mt-12 flex items-center gap-4 border-t border-border/15 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-muted">Working loop</span>
                <span className="text-xs text-ink-secondary">{personal.heroCodeSnippet}</span>
                <FiArrowUpRight className="text-accent-purple" size={13} />
              </div>
            </Reveal>
          </div>

          <SystemStage render3D={canRender3D && !prefersReducedMotion && webglSupported} />
        </div>
      </section>

      <div className="signal-strip" aria-label="Core technologies">
        <div className="signal-track">
          {[...signalTech, ...signalTech].map((tech, index) => (
            <span key={`${tech}-${index}`} className="signal-item">{tech}</span>
          ))}
        </div>
      </div>
    </>
  );
}
