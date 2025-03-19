"use client";
import { useState, useEffect } from "react";
import { values } from "@/lib/Data";
import SectionHeading from "./SectionHeading";
import { b_t_animation } from "@/lib/Data";
import { motion } from "framer-motion";

export default function OurValuesSection({ dictionary }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-5 px-5 md:px-6 lg:px-24 mt-[-20px] mb-12">
      <SectionHeading
        title={dictionary.OurValuesHeading}
        description=""
        border="170px"
      />
      <div className="w-full flex justify-center">
        <section className="w-full max-w-6xl">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {dictionary.valuesItems.map((card, index) => (
                <motion.div
                  key={index}
                  initial="hide"
                  whileInView="show"
                  variants={b_t_animation}
                  viewport={{ once: true }}
                  className={`group relative h-[300px] w-full sm:w-[48%] lg:w-[30%] flex-shrink-0 overflow-hidden ${
                    isMobile ? "bg-primary text-white" : ""
                  }`}
                  onClick={() =>
                    isMobile &&
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {/* Content Container */}
                  <div
                    className={`relative h-full flex flex-col justify-center items-center p-6 z-10 rounded-lg overflow-hidden transition-all duration-300 ${
                      isMobile
                        ? "bg-primary text-white"
                        : "bg-gray-50 text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold relative inline-block pb-2 transition-all duration-500">
                      {card.title}
                    </h3>

                    {/* Description always visible on mobile */}
                    <p
                      className={`mt-2 text-center transition-all duration-700 ease-in-out ${
                        isMobile
                          ? "opacity-100 translate-y-1"
                          : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-1"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
