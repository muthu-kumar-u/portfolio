import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="04. Projects"
          title="Things I've Shipped"
          subtitle="Production platforms built end-to-end — backend architecture, cloud infrastructure, and the frontends that ship on top of them."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={(index % 2) * 0.08}>
              <TiltCard maxTilt={4} className="h-full">
                <div className="glass-panel flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-primary">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-accent-purple-light">
                        {project.tagline}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${project.name}`}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                      >
                        <FiArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                  {project.duration && (
                    <p className="mt-2 font-mono text-xs text-ink-muted">{project.duration}</p>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-purple" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 mt-auto flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
