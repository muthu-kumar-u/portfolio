import { personal, stats } from "@/data/personal";
import { journeyEntries } from "@/data/journey";
import SectionHeading from "@/components/ui/SectionHeading";
import RichText from "@/components/ui/RichText";
import Tag from "@/components/ui/Tag";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="container-content">
        <SectionHeading eyebrow={personal.aboutEyebrow} title={personal.aboutTitle} />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="glass-panel p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl font-bold text-gradient-brand">
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="mt-1 text-sm text-ink-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-border-subtle pt-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-ink-muted">
                  Currently working with
                </p>
                <div className="flex flex-wrap gap-2">
                  {personal.currentlyWorkingWith.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="space-y-5">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <RichText key={index} text={paragraph} className="leading-relaxed text-ink-secondary" />
            ))}
          </Reveal>
        </div>

        <Reveal direction="up" stagger={0.15} className="relative mt-20 max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/50 via-border to-transparent" />
          <div className="space-y-10">
            {journeyEntries.map((entry) => (
              <StaggerItem key={entry.id} className="relative pl-8">
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full",
                    entry.current
                      ? "bg-accent-purple shadow-[0_0_0_4px_rgba(139,92,246,0.2)]"
                      : "border-2 border-accent-cyan bg-base-950",
                  )}
                />
                <p className="font-mono text-xs text-accent-cyan">{entry.date}</p>
                <p className="mt-1 font-display text-base font-semibold text-ink-primary">
                  {entry.title}
                </p>
                <p className="text-sm font-medium text-accent-purple-light">{entry.company}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-secondary">
                  {entry.description}
                </p>
              </StaggerItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
