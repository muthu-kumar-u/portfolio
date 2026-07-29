import { FiAward, FiBookOpen } from "react-icons/fi";
import { certifications, education } from "@/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Credentials() {
  return (
    <section id="credentials" className="py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="05. Credentials"
          title="Certifications & Education"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <div className="glass-panel h-full p-7">
              <div className="mb-5 flex items-center gap-2 text-accent-cyan">
                <FiAward size={18} />
                <h3 className="font-display text-base font-semibold text-ink-primary">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-5">
                {certifications.map((cert) => (
                  <li key={cert.id} className="border-l-2 border-accent-cyan/30 pl-4">
                    <p className="font-medium text-ink-primary">{cert.name}</p>
                    <p className="mt-1 text-sm text-ink-secondary">{cert.issuer}</p>
                    <p className="mt-0.5 font-mono text-xs text-ink-muted">{cert.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="glass-panel h-full p-7">
              <div className="mb-5 flex items-center gap-2 text-accent-purple">
                <FiBookOpen size={18} />
                <h3 className="font-display text-base font-semibold text-ink-primary">
                  Education
                </h3>
              </div>
              <ul className="space-y-5">
                {education.map((entry) => (
                  <li key={entry.id} className="border-l-2 border-accent-purple/30 pl-4">
                    <p className="font-medium text-ink-primary">{entry.degree}</p>
                    <p className="mt-1 text-sm text-ink-secondary">
                      {entry.institution}
                      {entry.location ? `, ${entry.location}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
