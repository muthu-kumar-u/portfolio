import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown, FiCheck } from "react-icons/fi";
import { experienceEntries } from "@/data/experience";
import type { ExperienceEntry } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";

function ExperienceRow({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [expanded, setExpanded] = useState(Boolean(entry.current));

  return (
    <article className="relative grid gap-5 border-t border-border/15 py-8 first:border-t-0 sm:py-10 lg:grid-cols-[0.42fr_1fr_auto] lg:gap-10">
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted">
          {entry.duration}
        </p>
        <p className="mt-2 flex items-center gap-2 text-xs text-ink-secondary">
          {entry.mode}
          {entry.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-cyan/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-accent-cyan">
              <span className="h-1 w-1 rounded-full bg-accent-cyan" /> Current
            </span>
          )}
        </p>
      </div>

      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-purple">{entry.company}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-2xl">{entry.role}</h3>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-secondary sm:text-base">{entry.summary}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-6 space-y-3">
                {entry.contributions.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                    <FiCheck className="mt-1 shrink-0 text-accent-cyan" size={13} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {entry.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${entry.role} details`}
        className="grid h-10 w-10 place-items-center rounded-full border border-border/20 text-ink-secondary transition-colors hover:border-accent-purple/45 hover:text-accent-purple lg:mt-1"
      >
        <FiArrowDown className={expanded ? "rotate-180 transition-transform" : "transition-transform"} size={14} />
      </button>

      <span className="absolute -left-[3.05rem] top-11 hidden h-3 w-3 rounded-full border-2 border-base-950 bg-accent-purple ring-1 ring-border/30 xl:block" aria-hidden="true" />
      <span className="absolute right-0 top-9 font-editorial text-5xl text-ink-primary/5 sm:text-6xl" aria-hidden="true">0{index + 1}</span>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-content">
        <SectionHeading
          eyebrow="04 / Journey"
          title="From interface work to systems ownership."
          subtitle="A progression through frontend, full-stack delivery, and backend-first SDE work—each role widening the part of the product I could own."
        />

        <Reveal direction="up" delay={0.08} className="relative mt-14 xl:ml-12">
          <div className="absolute -left-[2.7rem] top-10 bottom-10 hidden w-px bg-gradient-to-b from-accent-purple via-border/20 to-transparent xl:block" />
          <div className="rounded-[1.6rem] border border-border/15 bg-base-900/30 px-6 sm:px-9">
            {experienceEntries.map((entry, index) => (
              <ExperienceRow key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </Reveal>

        <Reveal direction="up" className="mt-6 flex flex-col justify-between gap-5 rounded-[1.4rem] border border-border/15 bg-accent-purple/10 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-purple">Education</p>
            <p className="mt-2 text-lg font-semibold text-ink-primary">B.Sc. Information Technology</p>
          </div>
          <p className="text-sm text-ink-secondary">MS University · Tamil Nadu</p>
        </Reveal>
      </div>
    </section>
  );
}
