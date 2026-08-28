import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import {
  additionalProjects,
  featuredProjects,
  projectPortfolio,
} from "@/data/projects";
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
              Core project
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
          <p className="mt-2 text-sm font-medium text-accent-cyan">
            {project.tagline}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-secondary sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.stack.length > 6 && (
            <Tag>{`+${project.stack.length - 6} more`}</Tag>
          )}
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
              <FiChevronDown
                className={cn("transition-transform", expanded && "rotate-180")}
                size={13}
              />
            </button>
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
                    <li
                      key={itemIndex}
                      className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-ink-secondary"
                    >
                      <span className="pt-0.5 font-mono text-[9px] text-accent-purple">
                        0{itemIndex + 1}
                      </span>
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

function AdditionalProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="glass-panel overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
              Case file 0{index + 1} · Additional work
            </p>
          </div>
          <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.13em] text-accent-purple">
            {project.role}
          </p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink-primary sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-accent-cyan">
                {project.tagline}
              </p>
            </div>
            {/*
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit ${project.name}`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border/20 text-ink-secondary transition-all hover:-translate-y-0.5 hover:border-accent-cyan/45 hover:text-accent-cyan"
                >
                  <FiArrowUpRight size={15} />
                </a>
              )}
            */}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-secondary sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="border-t border-border/15 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
            Delivery notes
          </p>
          <ul className="mt-5 space-y-3">
            {project.highlights.map((point, itemIndex) => (
              <li
                key={itemIndex}
                className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-ink-secondary"
              >
                <span className="pt-0.5 font-mono text-[9px] text-accent-purple">
                  0{itemIndex + 1}
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-content">
        <SectionHeading
          eyebrow="03 / Featured projects"
          title="Selected for technical depth, not total count."
          subtitle={`${projectPortfolio.showcased} representative builds from ${projectPortfolio.totalDelivered}+ delivered projects. This view keeps the strongest backend, cloud, and applied-AI work in focus.`}
        />

        <Reveal
          direction="up"
          className="mt-14 flex flex-col gap-4 border-y border-border/15 py-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-cyan">
              Core projects
            </p>
            <p className="mt-2 text-sm text-ink-secondary">
              High-tech systems with the deepest backend, cloud, and AI scope.
            </p>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink-muted">
            0{featuredProjects.length} featured / 0
            {projectPortfolio.totalDelivered}+ delivered
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={index * 0.06}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <div className="mt-16">
            <Reveal direction="up" className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-purple">
                Additional shipped work
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                More end-to-end product delivery beyond the featured set.
              </p>
            </Reveal>

            <div className="space-y-5">
              {additionalProjects.map((project, index) => (
                <Reveal key={project.id} direction="up" delay={index * 0.06}>
                  <AdditionalProject
                    project={project}
                    index={featuredProjects.length + index}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
