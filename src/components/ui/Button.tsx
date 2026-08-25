import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseStyles =
  "group inline-flex items-center justify-center gap-2 rounded-full font-mono text-xs uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-cyan text-base-950 shadow-glow-cyan hover:-translate-y-0.5 hover:brightness-105",
  outline:
    "border border-border/30 bg-base-900/50 text-ink-primary hover:border-accent-violet/60 hover:bg-base-800/80 hover:-translate-y-0.5",
  ghost: "text-ink-secondary hover:text-accent-cyan",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-3",
  lg: "px-7 py-4",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      external?: boolean;
    };
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        {...anchorRest}
      >
        {icon && iconPosition === "left" ? icon : null}
        {children}
        {icon && iconPosition === "right" ? icon : null}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </button>
  );
}
