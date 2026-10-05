"use client";
import { motion } from "motion/react";

interface RevealProps {
  /** Stagger offset in seconds. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Fade + rise once when scrolled into view. A client wrapper so pages can
    stay server components. */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  return (
    <motion.div
      className={["reveal-item", className].filter(Boolean).join(" ")}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
