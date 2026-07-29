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
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs transition-colors",
        active
          ? "border-accent-purple/40 bg-accent-purple/10 text-accent-purple-light"
          : "border-border-subtle bg-white/[0.02] text-ink-secondary hover:border-accent-cyan/30 hover:text-ink-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
