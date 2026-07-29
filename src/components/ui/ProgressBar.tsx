import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const dotColors: Record<Skill["color"], string> = {
  purple: "bg-accent-purple",
  cyan: "bg-accent-cyan",
  yellow: "bg-amber-400",
  green: "bg-emerald-400",
};

const barColors: Record<Skill["color"], string> = {
  purple: "from-accent-purple to-accent-purple-light",
  cyan: "from-accent-cyan to-accent-cyan-light",
  yellow: "from-amber-500 to-amber-300",
  green: "from-emerald-500 to-emerald-300",
};

interface ProgressBarProps {
  skill: Skill;
  delay?: number;
}

export default function ProgressBar({ skill, delay = 0 }: ProgressBarProps) {
  return (
    <div className="glass-panel p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 font-display text-sm font-medium text-ink-primary">
          <span className={cn("h-2 w-2 rounded-full", dotColors[skill.color])} />
          {skill.name}
        </span>
        <span className="font-mono text-xs text-ink-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className={cn("h-full rounded-full bg-gradient-to-r", barColors[skill.color])}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
