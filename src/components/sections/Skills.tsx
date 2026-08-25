import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { skillCategories } from "@/data/skills";
import type { SkillCategoryId } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategoryId>(skillCategories[0].id);
  const activeCategory = skillCategories.find((category) => category.id === activeTab) ?? skillCategories[0];

  return (
    <section id="skills" className="section-shell">
      <div className="container-content">
        <SectionHeading
          eyebrow="02 / Capabilities"
          title="One engineer, across the system."
          subtitle="Four capability tracks distilled from the backend, cloud, SDE, and applied-AI resume variants. Select a track to inspect the working set."
        />

        <Reveal direction="up" delay={0.08} className="mt-14 overflow-hidden rounded-[1.75rem] border border-border/15 bg-base-900/35">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-border/15 p-3 lg:border-b-0 lg:border-r">
              {skillCategories.map((category) => {
                const active = category.id === activeTab;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveTab(category.id)}
                    className={cn(
                      "group relative isolate flex w-full items-center justify-between rounded-2xl px-5 py-5 text-left transition-colors sm:px-6",
                      active ? "text-base-950" : "text-ink-secondary hover:bg-base-800/60 hover:text-ink-primary",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="capability-active"
                        className="absolute inset-0 -z-10 rounded-2xl bg-accent-cyan"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    )}
                    <span className="flex items-center gap-4">
                      <span className={cn("font-mono text-[9px]", active ? "text-base-950/60" : "text-ink-muted")}>{category.index}</span>
                      <span className="text-sm font-semibold sm:text-base">{category.label}</span>
                    </span>
                    <FiArrowRight className={cn("transition-transform group-hover:translate-x-1", active && "translate-x-1")} size={15} />
                  </button>
                );
              })}
            </div>

            <div className="capability-grid relative min-h-[520px] p-6 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-accent-purple/35 bg-accent-purple/10 font-mono text-[10px] text-accent-purple">
                      {activeCategory.index}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted">Active capability</span>
                  </div>

                  <h3 className="mt-8 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-ink-primary sm:text-5xl">
                    {activeCategory.label}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary">
                    {activeCategory.summary}
                  </p>

                  <div className="mt-9 grid gap-2 sm:grid-cols-2">
                    {activeCategory.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.025 }}
                        className="flex items-center gap-3 rounded-xl border border-border/15 bg-base-950/55 px-4 py-3 text-xs text-ink-secondary"
                      >
                        <FiCheck className="shrink-0 text-accent-cyan" size={13} />
                        {skill}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-9 border-l-2 border-accent-purple pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted">Evidence in shipped work</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-primary">{activeCategory.proof}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
