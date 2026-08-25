import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleAccent?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleAccent,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal direction="fade">
        <div
          className={cn(
            "mb-7 flex items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="section-eyebrow whitespace-nowrap">{eyebrow}</span>
          <span className="h-px w-12 bg-accent-cyan/50" />
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.05}>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink-primary sm:text-6xl lg:text-7xl">
          {title}
          {titleAccent}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.1}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
