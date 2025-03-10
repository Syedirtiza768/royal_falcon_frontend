"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeading({ children, color = "#d09b74" }) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div ref={headingRef} className="relative overflow-hidden">
      {/* Invisible placeholder to maintain layout */}
      <div className="invisible" aria-hidden="true">
        {children}
      </div>

      {/* Text that will be revealed */}
      <motion.div
        className="absolute top-0 left-0 z-20 w-full"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6, // Start after background animation
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>

      {/* Background color slide animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={
          isVisible
            ? {
                scaleX: [0, 1, 1, 0],
                originX: [0, 0, 0, 1],
              }
            : { scaleX: 0 }
        }
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1], // Controls the timing of each keyframe
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
