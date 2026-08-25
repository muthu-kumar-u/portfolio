import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
  active?: boolean;
}

export default function Tag({ children, className, active = false }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.03em] transition-colors",
        active
          ? "border-accent-purple/40 bg-accent-purple/10 text-accent-purple-light"
          : "border-border/20 bg-base-900/45 text-ink-secondary hover:border-accent-cyan/35 hover:text-ink-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
