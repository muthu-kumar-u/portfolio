import { FiBox, FiLayers, FiRadio } from "react-icons/fi";
import { personal, stats } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import RichText from "@/components/ui/RichText";
import Tag from "@/components/ui/Tag";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal, { StaggerItem } from "@/components/ui/Reveal";

const principles = [
  {
    icon: FiLayers,
    index: "01",
    title: "Design the boundaries",
    text: "Start with the workflow, data ownership, and contracts so every service has a reason to exist.",
  },
  {
    icon: FiBox,
    index: "02",
    title: "Build the whole path",
    text: "Carry decisions from API and persistence through the product surface and deployment environment.",
  },
  {
    icon: FiRadio,
    index: "03",
    title: "Operate with feedback",
    text: "Treat CI/CD, metrics, logs, and production troubleshooting as part of the system—not aftercare.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-content">
        <SectionHeading eyebrow={personal.aboutEyebrow} title={personal.aboutTitle} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal direction="up" className="space-y-6">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <RichText
                key={index}
                text={paragraph}
                className={index === 0
                  ? "max-w-3xl text-xl leading-relaxed text-ink-primary sm:text-2xl"
                  : "max-w-2xl leading-relaxed text-ink-secondary"
                }
              />
            ))}

            <div className="pt-5">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-muted">
                Current working set
              </p>
              <div className="flex flex-wrap gap-2">
                {personal.currentlyWorkingWith.map((tech) => <Tag key={tech}>{tech}</Tag>)}
              </div>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={0.08}>
            <div className="glass-panel grid grid-cols-2 overflow-hidden">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-8 ${index % 2 === 0 ? "border-r border-border/15" : ""} ${index < 2 ? "border-b border-border/15" : ""}`}
                >
                  <p className="font-editorial text-4xl text-ink-primary sm:text-5xl">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-ink-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" stagger={0.1} className="mt-20 grid gap-px overflow-hidden rounded-[1.5rem] border border-border/15 bg-border/15 md:grid-cols-3">
          {principles.map((principle) => (
            <StaggerItem key={principle.index} className="group bg-base-950 p-7 transition-colors hover:bg-base-900 sm:p-9">
              <div className="flex items-center justify-between">
                <principle.icon size={18} className="text-accent-purple" />
                <span className="font-mono text-[9px] text-ink-muted">{principle.index} / 03</span>
              </div>
              <h3 className="mt-12 text-lg font-semibold tracking-tight text-ink-primary">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{principle.text}</p>
            </StaggerItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
