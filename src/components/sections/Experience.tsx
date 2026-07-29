import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { experienceEntries } from "@/data/experience";
import type { ExperienceEntry } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(Boolean(entry.current));

  return (
    <div className="glass-panel p-7">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-lg font-semibold text-ink-primary">{entry.role}</h3>
        {entry.current && (
          <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
            Current
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-accent-purple-light">{entry.company}</p>
      <p className="mt-1 text-xs text-ink-muted">
        {entry.duration} · {entry.mode}
      </p>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-secondary">{entry.summary}</p>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-opacity hover:opacity-80"
      >
        {expanded ? "Hide Key Contributions" : "View Key Contributions"}
        {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2.5">
              {entry.contributions.map((point, index) => (
                <li key={index} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
        {entry.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="03. Experience"
          title="Where I've Worked"
          subtitle="3+ years building production systems across startups — from intern to SDE collaborating directly with Founding Engineers."
        />

        <div className="mt-14 space-y-6">
          {experienceEntries.map((entry, index) => (
            <Reveal key={entry.id} direction="up" delay={index * 0.08}>
              <ExperienceCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
