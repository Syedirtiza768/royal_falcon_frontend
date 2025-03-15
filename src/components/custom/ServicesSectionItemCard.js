"use client";
import { useState, useEffect } from "react";
import { b_t_animation } from "@/lib/Data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSectionItemCard({
  title,
  description,
  imageSrc,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      viewport={{ once: true }}
      className="group relative h-[300px] overflow-hidden"
      onClick={() => isMobile && setIsActive(!isActive)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover brightness-75 transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center items-center text-white p-6 z-10">
        {/* Title with spacing and animated border */}
        <h3 className="text-xl md:text-2xl font-semibold relative inline-block pb-2 transition-all duration-500 transform translate-y-1/2 group-hover:translate-y-0">
          {title}
          <span className="max-sm:hidden absolute bottom-[-6px] left-0 w-1/3 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:h-[3px]"></span>
        </h3>

        {/* Description appears and moves up on hover / tap */}
        <p
          className={`mt-2 text-center transition-all duration-700 ease-in-out ${
            isMobile && isActive
              ? "opacity-100 translate-y-1"
              : "opacity-0 translate-y-4"
          } group-hover:opacity-100 group-hover:translate-y-1`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
