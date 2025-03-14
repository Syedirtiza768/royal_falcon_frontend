"use client";
import { values } from "@/lib/Data";
import SectionHeading from "./SectionHeading";

import { b_t_animation } from "@/lib/Data";
import { motion } from "framer-motion";

export default function OurValuesSection() {
  return (
    <section className="w-full py-5 px-[20px] md:px-6 lg:px-[90px] mt-[-20px] mb-[50px]">
      <SectionHeading title={"Our Values"} description={""} border={"170px"} />
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
                >
                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-center items-center text-primary hover:text-white p-6 z-10 bg-gray-50 hover:bg-primary rounded-lg  overflow-hidden transition-all duration-300">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold relative inline-block pb-2 transition-all duration-500 transform translate-y-1/2 group-hover:translate-y-0">
                      {card.title}
                    </h3>

                    {/* Description appears on hover */}
                    <p className="opacity-0 transform translate-y-4 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-1 mt-2 text-center">
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
