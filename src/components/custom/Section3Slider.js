"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "HAKIM AIPC",
    description:
      "HAKIM, حكيم is meaning wise in Arabic world. It represents Upwards vision to provide wisdom to everyone in the world with the HAKIM AIPC. HAKIM is inbuilt with mult-modal AI algorithms and large language model to support intuitive interactions and new user experience. It runs these models locally and does not require any documents to be submitted to cloud before a detailed analysis can be generated.",
    image: "/images/slider1_img1.png",
  },
  {
    id: 2,
    title: "ANOTHER PRODUCT",
    description:
      "This is another product description. Replace this with your actual product details. The text will slide along with the image when navigating through the products carousel.",
    image: "/images/slider1_img1.png",
  },
  {
    id: 3,
    title: "THIRD PRODUCT",
    description:
      "This is the third product description. Replace this with your actual product details. The text will slide along with the image when navigating through the products carousel.",
    image: "/images/slider1_img1.png",
  },
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-6">
        Products
      </h2>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer"
          onClick={prevSlide}
          aria-label="Previous product"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer"
          onClick={nextSlide}
          aria-label="Next product"
        >
          <ChevronRight className="h-10 w-10" />
        </button>

        {/* Single Slide Display */}
        <div className="px-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8 transition-opacity duration-300 ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="flex gap-4">
                  <div className="min-w-[4px] h-auto bg-[#d2a97b] rounded-full"></div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-[16/10]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={600}
                    height={375}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
