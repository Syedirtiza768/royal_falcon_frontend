"use client";

import { useEffect, useState } from "react";
import { Shield, Lock, Eye, Key, Server, User } from "lucide-react";

const icons = [
  { Icon: Shield, x: -400, y: -300 },
  { Icon: Lock, x: 400, y: -300 },
  { Icon: Eye, x: -400, y: 300 },
  { Icon: Key, x: 400, y: 300 },
  { Icon: Server, x: 0, y: -400 },
  { Icon: User, x: 0, y: 400 },
];

export default function Section2() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400; // Increased range for smoother animation
      const progress = Math.max(0, Math.min(scrollY / maxScroll, 1)); // Ensure 0-1 range
      setScrollProgress(progress);
    };

    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-[800px] overflow-hidden bg-zinc-900 text-white  ">
      {/* ICONS */}
      {icons.map(({ Icon, x, y }, i) => {
        // Calculate movement based on scroll progress
        // When scrollProgress is 0 (top), icons are closer to center
        // When scrollProgress is 1 (scrolled down), icons spread out
        const initialOffset = 0.1;
        const currentX =
          x * (initialOffset + scrollProgress * (1 - initialOffset));
        const currentY =
          y * (initialOffset + scrollProgress * (1 - initialOffset));

        return (
          <Icon
            key={i}
            className="absolute text-amber-400 w-24 h-24 transition-transform duration-100 ease-out drop-shadow-lg"
            style={{
              transform: `translate(${currentX}px, ${currentY}px)`,
              left: "50%",
              top: "50%",
              marginLeft: "-48px", // Half of icon width (w-24 = 96px)
              marginTop: "-48px", // Half of icon height (h-24 = 96px)
            }}
          />
        );
      })}

      {/* MAIN IMAGE */}
      <div className="relative z-10 w-[600px] h-[400px] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg shadow-2xl flex items-center justify-center">
        {/* <div className="text-white text-2xl font-bold">600 x 400 Image</div> */}
        <img src="/images/home/about1.jpg" className="h-full w-full" alt="" />
      </div>
    </section>
  );
}
