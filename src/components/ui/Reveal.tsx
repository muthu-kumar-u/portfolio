import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  /** Marks this element as a stagger parent — children should use StaggerItem. */
  stagger?: number;
  once?: boolean;
}

const offsets: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  scale: { scale: 0.92 },
  fade: {},
};

/**
 * Generic scroll-into-view reveal used across sections for fade / slide /
 * scale entrances. Pass `stagger` to turn this into a stagger container for
 * StaggerItem children.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  stagger,
  once = true,
}: RevealProps) {
  const offset = offsets[direction];

  const variants: Variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }
    : {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
  duration?: number;
}

/** Child item for a Reveal with `stagger` set — inherits the parent's viewport trigger. */
export function StaggerItem({
  children,
  direction = "up",
  className,
  duration = 0.5,
}: StaggerItemProps) {
  const offset = offsets[direction];
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
