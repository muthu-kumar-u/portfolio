import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  dotColor?: "cyan" | "purple" | "green";
  className?: string;
  pulse?: boolean;
}

const dotColors = {
  cyan: "bg-accent-cyan",
  purple: "bg-accent-purple",
  green: "bg-emerald-400",
};

export default function Badge({ children, dotColor = "cyan", className, pulse = true }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-ink-secondary",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              dotColors[dotColor],
            )}
          />
        )}
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotColors[dotColor])} />
      </span>
      {children}
    </span>
  );
}
