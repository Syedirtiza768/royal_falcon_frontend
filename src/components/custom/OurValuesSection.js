"use client";
import { useState, useEffect } from "react";
import { values } from "@/lib/Data";
import SectionHeading from "./SectionHeading";
import { b_t_animation } from "@/lib/Data";
import { motion } from "framer-motion";

export default function OurValuesSection() {
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
      <SectionHeading title="Our Values" description="" border="170px" />
      <div className="w-full flex justify-center">
        <section className="w-full max-w-6xl">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {values.map((card, index) => (
                <motion.div
                  key={index}
                  initial="hide"
                  whileInView="show"
                  variants={b_t_animation}
                  viewport={{ once: true }}
                  className="group relative h-[300px] w-full sm:w-[48%] lg:w-[30%] flex-shrink-0 overflow-hidden"
                  onClick={() =>
                    isMobile &&
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {/* Content Container */}
                  <div
                    className={`relative h-full flex flex-col justify-center items-center text-primary hover:text-white p-6 z-10 bg-gray-50 hover:bg-primary rounded-lg overflow-hidden transition-all duration-300 ${
                      isMobile && activeIndex === index
                        ? "bg-primary text-white"
                        : ""
                    }`}
                  >
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold relative inline-block pb-2 transition-all duration-500 transform translate-y-1/2 group-hover:translate-y-0">
                      {card.title}
                    </h3>

                    {/* Description appears on hover / tap */}
                    <p
                      className={`mt-2 text-center transition-all duration-700 ease-in-out ${
                        isMobile && activeIndex === index
                          ? "opacity-100 translate-y-1"
                          : "opacity-0 translate-y-4"
                      } group-hover:opacity-100 group-hover:translate-y-1`}
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
