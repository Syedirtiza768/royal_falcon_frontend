"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

const blogs = [
  {
    image: "/images/news1.avif",
    title: "UAE's oldest-running refiner Emirates Gold gets new owner",
    url: "https://gulfnews.com/business/markets/uaes-oldest-running-refiner-emirates-gold-gets-new-owner-1.104683944",
  },
  {
    image: "/images/news2.jpeg",
    title: "Shaping the Future of Aviation in Abu Dhabi",
    url: "https://www.falconaviation.ae/2025/01/09/shaping-the-future-of-aviation-in-abu-dhabi-1",
  },
  {
    image: "/images/news3.jpg",
    title:
      "Upwards Executive Management Hosts Former Prime Minister of Armenia",
    url: "https://upwards.ae/article/upwards-executive-management-hosts-former-prime-minister-of-armenia/",
  },
];

export default function NewsSectionContent() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              initial="hide"
              whileInView="show"
              variants={b_t_animation}
              viewport={{ once: true }}
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={blog.url} target="_blank" id="check">
                {/* Image Container */}
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
