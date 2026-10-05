"use client";
import { motion, MotionConfig } from "motion/react";

/**
 * Animate each route in on mount. `template.tsx` remounts on navigation, so
 * this runs per page (including first load). Enter-only: the App Router
 * unmounts the old page before the new one mounts, so there is nothing left to
 * animate out. `reducedMotion="user"` drops the transform (keeps the fade)
 * when the OS asks for less motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="page-enter"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
