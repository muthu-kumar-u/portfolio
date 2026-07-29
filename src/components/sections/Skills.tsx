import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, allTechnologies } from "@/data/skills";
import type { SkillCategoryId } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgressBar from "@/components/ui/ProgressBar";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategoryId>(skillCategories[0].id);
  const activeCategory = skillCategories.find((category) => category.id === activeTab) ?? skillCategories[0];

  return (
    <section id="skills" className="py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="02. Skills"
          title="Technical Arsenal"
          subtitle="A curated set of tools and technologies I use to build production-grade systems."
        />

        <Reveal direction="up" delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "relative rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                activeTab === category.id
                  ? "border-accent-purple/40 text-ink-primary"
                  : "border-border-subtle text-ink-secondary hover:text-ink-primary",
              )}
            >
              {activeTab === category.id && (
                <motion.span
                  layoutId="skills-tab-highlight"
                  className="absolute inset-0 -z-10 rounded-lg bg-accent-purple/15"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeCategory.skills.map((skill, index) => (
            <motion.div
              key={`${activeCategory.id}-${skill.name}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProgressBar skill={skill} delay={index * 0.05} />
            </motion.div>
          ))}
        </div>

        <Reveal direction="up" className="mt-16 border-t border-border-subtle pt-8">
          <p className="mb-4 font-mono text-xs text-ink-muted">// all technologies</p>
          <div className="flex flex-wrap gap-2.5">
            {allTechnologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
