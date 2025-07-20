"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Badge, Crown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-zinc-900 flex h-[500px] max-md:px-[20px] md:h-[800px] items-center justify-center text-white">
      <img
        src="/images/home/hero.png"
        className="absolute h-[700px] left-[-350px] top-[-250px] top-0 opacity-30"
        style={{ animation: "spin 10s linear infinite" }}
        alt=""
      />
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        viewport={{ once: true }}
        className=" h-full flex-1 flex items-center justify-center flex-col "
      >
        <h2 className="text-[30px] lg:text-[70px] bg-gradient-to-r from-amber-400 to-amber-200 text-transparent bg-clip-text">
          ROYAL FALCON SOLUTIONS
        </h2>
        <h2 className="text-[30px] uppercase lg:text-[70px] bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text">
          Empowering Digital Security
        </h2>
        <p className="text-[15px] md:text-[25px]">
          Protecting what matters most in an ever-evolving digital landscape.
        </p>
        <Link
          className={`relative py-3 px-8 rounded-md cursor-pointer bg-gradient-to-r from-amber-400 to-amber-300 text-white mt-[10px] `}
          href={"#"}
        >
          Start Now
        </Link>
      </motion.div>
    </section>
  );
}

export default HeroSection;
