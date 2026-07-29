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
            "mb-5 flex items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="section-eyebrow whitespace-nowrap">{eyebrow}</span>
          <span className="h-px flex-1 max-w-[220px] bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.05}>
        <h2 className="text-4xl font-bold leading-tight text-ink-primary sm:text-5xl">
          {title}
          {titleAccent}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.1}>
          <p
            className={cn(
              "mt-4 max-w-2xl text-ink-secondary",
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
