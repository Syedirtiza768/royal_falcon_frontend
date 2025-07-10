"use client";
import { useLocaleStore } from "@/stores/useLocaleStore";
import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

export default function Section2({ dictionary }) {
  const { locale } = useLocaleStore();

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 to-black h-[500px] md:h-[650px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Modern and impactful */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-hero-background.jpg" // Replace with a high-quality, relevant image
          alt="Modern background image"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-40" // Slightly dim the image to make text pop
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for better contrast */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-[20px] md:px-[50px] text-center text-white flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl">
          <AnimatedHeading>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {dictionary.section2Heading1}
              <br className="hidden md:inline" />
              <span className="text-primary-light">
                {dictionary.section2Heading2}
              </span>{" "}
              {/* Highlight a part of the heading */}
            </h1>
          </AnimatedHeading>

          <motion.div
            initial="hide"
            animate="show"
            variants={b_t_animation}
            className="mb-10"
          >
            <p className="text-base md:text-xl leading-relaxed opacity-90">
              {dictionary.section2Content2}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#learn-more"
              className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
