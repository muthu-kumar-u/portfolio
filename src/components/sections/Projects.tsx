import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <TiltCard maxTilt={2.5} className="h-full">
      <article className="glass-panel group flex h-full flex-col overflow-hidden p-6 sm:p-8">
        <span className="work-index pointer-events-none absolute -right-2 top-6 select-none">
          0{index + 1}
        </span>

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
              Case file 0{index + 1}
            </p>
          </div>
          {project.featured && (
            <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-accent-purple">
              Featured
            </span>
          )}
        </div>

        <div className="relative z-10 mt-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-accent-purple">
            {project.role}
          </p>
          <h3 className="mt-3 max-w-[80%] text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink-primary sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-accent-cyan">{project.tagline}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-secondary sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tech) => <Tag key={tech}>{tech}</Tag>)}
          {project.stack.length > 6 && <Tag>{`+${project.stack.length - 6} more`}</Tag>}
        </div>

        <div className="relative z-10 mt-auto pt-8">
          <div className="flex items-center justify-between border-t border-border/15 pt-5">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {expanded ? "Close build notes" : "Open build notes"}
              <FiChevronDown className={cn("transition-transform", expanded && "rotate-180")} size={13} />
            </button>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit ${project.name}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-border/20 text-ink-secondary transition-all hover:-translate-y-0.5 hover:border-accent-cyan/45 hover:text-accent-cyan"
              >
                <FiArrowUpRight size={14} />
              </a>
            )}
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 pt-6">
                  {project.highlights.map((point, itemIndex) => (
                    <li key={itemIndex} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-ink-secondary">
                      <span className="pt-0.5 font-mono text-[9px] text-accent-purple">0{itemIndex + 1}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-content">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Systems with a product on the other side."
          subtitle="Healthcare, AI-assisted experiences, and SaaS products—each one crossing at least two layers of the system. Open a case file for the build notes."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={(index % 2) * 0.07}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
