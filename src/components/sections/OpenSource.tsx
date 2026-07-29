/**
 * Open Source section — NOT rendered in App.tsx by default.
 *
 * Your resume didn't include any open-source contributions or public repos
 * beyond your GitHub profile link, so per "don't invent anything," this
 * section is left out of the live page rather than filled with placeholder
 * content.
 *
 * To use it: add entries below (or move them to a src/data/open-source.ts
 * file following the same pattern as the other data files), then import
 * and render <OpenSource /> in App.tsx between Projects and Credentials.
 */
import { FiGithub, FiStar } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

interface OpenSourceContribution {
  id: string;
  repo: string;
  description: string;
  url: string;
  stars?: number;
}

// Fill this in with your own contributions/repos, then render <OpenSource />.
const contributions: OpenSourceContribution[] = [];

export default function OpenSource() {
  return (
    <section id="open-source" className="py-28">
      <div className="container-content">
        <SectionHeading eyebrow="06. Open Source" title="Community Contributions" />

        {contributions.length === 0 ? (
          <Reveal direction="up" className="mt-14">
            <div className="glass-panel flex flex-col items-center gap-3 p-12 text-center text-ink-secondary">
              <FiGithub size={22} className="text-ink-muted" />
              <p>No open-source contributions added yet.</p>
              <p className="text-sm text-ink-muted">
                Add entries in{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs">
                  src/components/sections/OpenSource.tsx
                </code>{" "}
                to populate this section.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {contributions.map((item, index) => (
              <Reveal key={item.id} direction="up" delay={index * 0.05}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="glass-panel block p-6 transition-colors hover:border-accent-cyan/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-display font-semibold text-ink-primary">
                      <FiGithub size={16} />
                      {item.repo}
                    </span>
                    {item.stars !== undefined && (
                      <span className="flex items-center gap-1 text-xs text-ink-muted">
                        <FiStar size={12} /> {item.stars}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-ink-secondary">{item.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
