"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/lib/Data";
import MobileNavbar from "./MobileNavbar";
import LanguageChanger from "./LanguageChanger";

// Sample solutions data for the dropdown
const solutionsData = [
  { title: "Enterprise Solutions", href: "/solutions/enterprise" },
  { title: "Small Business", href: "/solutions/small-business" },
  { title: "Consulting Services", href: "/solutions/consulting" },
  { title: "Digital Transformation", href: "/solutions/digital" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary ">UP</span>
              <span className="text-navy-800">WARDS</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 lg:flex">
          {navLinks.map((link) =>
            link.submenu ? (
              <DropdownMenu key={link.title}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-base font-medium text-gray-800 hover:text-primary">
                    {link.title}
                    <Plus className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {link.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.href} asChild>
                      <Link href={subItem.href} className="w-full">
                        {subItem.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-800 hover:text-primary"
              >
                {link.title}
              </Link>
            )
          )}
        </nav>

        {/* Right side buttons */}
        <div className=" flex items-center justify-center md:flex">
          <div className="flex items-center justify-center">
            <LanguageChanger />
            <Button className="rounded-md bg-primary text-white hidden lg:block ">
              Contact Now
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
}
