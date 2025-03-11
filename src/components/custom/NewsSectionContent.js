"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

const blogs = [
  {
    image: "/images/solutions1.png",
    tags: [
      { label: "E-book", color: "bg-orange-50 text-orange-700" },
      { label: "Business Growthes", color: "bg-orange-50 text-orange-700" },
    ],
    title: "10 Essential Strategies for Business Growth",
  },
  {
    image: "/images/solutions1.png",
    tags: [
      { label: "Case Study", color: "bg-orange-50 text-orange-700" },
      { label: "Success Story", color: "bg-orange-50 text-orange-700" },
    ],
    title: "Success Story: How Company XYZ Increased Sales by 50%",
  },
  {
    image: "/images/solutions1.png",
    tags: [
      { label: "Data Analytics", color: "bg-orange-50 text-orange-700" },
      { label: "Tips and Techniques", color: "bg-orange-50 text-orange-700" },
    ],
    title: "Unlocking Data Analytics: Practical Tips and Techniques",
  },
  {
    image: "/images/solutions1.png",
    tags: [
      { label: "Data Analytics", color: "bg-orange-50 text-orange-700" },
      { label: "Tips and Techniques", color: "bg-orange-50 text-orange-700" },
    ],
    title: "Unlocking Data Analytics: Practical Tips and Techniques",
  },
  {
    image: "/images/solutions1.png",
    tags: [
      { label: "Data Analytics", color: "bg-orange-50 text-orange-700" },
      { label: "Tips and Techniques", color: "bg-orange-50 text-orange-700" },
    ],
    title: "Unlocking Data Analytics: Practical Tips and Techniques",
  },
  {
    image: "/images/solutions1.png",
    tags: [
      { label: "Data Analytics", color: "bg-orange-50 text-orange-700" },
      { label: "Tips and Techniques", color: "bg-orange-50 text-orange-700" },
    ],
    title: "Unlocking Data Analytics: Practical Tips and Techniques",
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
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${tag.color} text-xs px-2.5 py-1 rounded-full`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Read More Link */}
                <Link
                  href="#"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                >
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
