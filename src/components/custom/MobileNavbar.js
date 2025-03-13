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
import { navItems, navLinks } from "@/lib/Data";
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
import Image from "next/image";
import { useRouter } from "next/navigation";

function MobileNavbar({ dictionary }) {
  const [expanded, setExpanded] = useState(null);
  const router = useRouter();
  const toggleMenu = (title) => {
    setExpanded(expanded === title ? null : title);
  };
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className="text-primary font-bold" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Image
              src={"/images/logo.png"}
              height={150}
              width={150}
              alt="Logo"
            />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className=" h-[100%] ">
          <nav className="flex flex-col gap-4 p-6 h-[80%]">
            {dictionary.navItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className="flex items-center justify-between w-full text-left text-base font-medium text-gray-800 hover:text-[#c19367] transition-all duration-300"
                    >
                      {item.name}
                      {expanded === item.name ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    {/* Dropdown Animation */}
                    {expanded === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden"
                      >
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm font-medium text-gray-700 hover:text-[#c19367] transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-gray-800 hover:text-[#c19367] transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center justify-center">
            <Button
              onClick={() => router.push("/#contactSection")}
              className="rounded-md bg-primary text-white cursor-pointer"
            >
              {dictionary.contactButonText}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
