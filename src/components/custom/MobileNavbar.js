"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { navLinks } from "@/lib/Data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LanguageChanger from "./LanguageChanger";

function MobileNavbar() {
  const [expanded, setExpanded] = useState(null);

  const toggleMenu = (title) => {
    setExpanded(expanded === title ? null : title);
  };
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Logo</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className=" h-[100%] border-t border-gray-200">
          <nav className="flex flex-col gap-4 p-6   h-[80%]  ">
            {navLinks.map((link) => (
              <div key={link.title} className="w-full">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-gray-800 hover:text-[#c19367] transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMenu(link.title)}
                      className="flex items-center justify-between w-full text-left text-base font-medium text-gray-800 hover:text-[#c19367] transition-all duration-300"
                    >
                      {link.title}
                      {expanded === link.title ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    {/* Animated Submenu */}
                    {expanded === link.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden"
                      >
                        {link.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-sm font-medium text-gray-700 hover:text-[#c19367] transition-all duration-300"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center justify-center">
            <LanguageChanger />
            <Button className="rounded-md bg-primary text-white  ">
              Contact Now
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
