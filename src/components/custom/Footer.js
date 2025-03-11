import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3B4650] text-white pt-12 pb-4 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* REACH US */}
          <div>
            <h3 className="flex flex-col gap-3 text-lg font-semibold mb-6 items-start justify-start">
              <span>REACH US</span>

              <span className="ml-2  w-8 h-[8px] bg-[#d2a97b]"></span>
            </h3>
            <div className="flex gap-3 mb-4">
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#d2a97b]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Head Office</p>
                <p className="text-sm text-gray-300">
                  Zad Bin Rashid Al
                  <br />
                  Rumaila St | Sky
                  <br />
                  Tower Reem
                  <br />
                  Island Abu Dhabi
                  <br />
                  United Arab
                  <br />
                  Emirates
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-block border border-[#d2a97b] text-[#d2a97b] px-6 py-2 text-sm hover:bg-[#d2a97b] hover:text-white transition-colors duration-300"
            >
              Our Location
            </Link>
            <div className="flex gap-3 mt-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#d2a97b]"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm">0123456789</span>
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="flex flex-col gap-3 text-lg font-semibold mb-6 items-start justify-start">
              <span>SITEMAP</span>

              <span className="ml-2  w-8 h-[8px] bg-[#d2a97b]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="flex flex-col gap-3 text-lg font-semibold mb-6 items-start justify-start">
              <span>SOLUTIONS</span>

              <span className="ml-2  w-8 h-[8px] bg-[#d2a97b]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  Medical Robotics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  Future Mobility
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  Robo Dog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  Traffic Management Systems
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-600 bg-[#5c646a] px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Image
                src="/images/logo2.png"
                alt="Upwards Logo"
                width={150}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <div className="flex gap-4 text-sm text-gray-300">
              <Link href="#" className="hover:text-[#d2a97b] transition-colors">
                Terms of Use
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#d2a97b] transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white hover:text-[#d2a97b] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#d2a97b] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#d2a97b] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#d2a97b] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          © 2025 Upwards. All rights reserved
        </div>
      </div>
    </footer>
  );
}
