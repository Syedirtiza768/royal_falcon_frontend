"use client";
import { useLocaleStore } from "@/stores/useLocaleStore";
import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";

export default function Section2({ dictionary }) {
  const { locale } = useLocaleStore();
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <img src="/images/img1.png" alt=""  /> */}
        <Image
          src="/images/img1.png"
          alt="Abu Dhabi Skyline"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col justify-center h-full">
        <div className="" dir={locale === "ar" ? "rtl" : "ltr"}>
          <div className="w-[50%]">
            <AnimatedHeading>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e3a] mb-4">
                {dictionary.section2Heading1}
                <br />
                {dictionary.section2Heading2}
              </h1>
            </AnimatedHeading>
          </div>

          <p className="text-[#1a2e3a] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            {dictionary.section2Content}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#learn-more"
              className="bg-primary hover:bg-[#c99c6d] text-white font-medium py-3 px-8 rounded transition-colors duration-300 text-center"
            >
              {dictionary.section2Button1Text}
            </Link>
            <Link
              href="#request-demo"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded transition-colors duration-300 text-center border border-white/30"
            >
              {dictionary.section2Button2Text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
