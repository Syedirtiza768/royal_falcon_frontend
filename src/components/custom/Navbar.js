"use client";
import { useState } from "react";

import Link from "next/link";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

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
import { useLocaleStore } from "@/stores/useLocaleStore";
import DesktopNavBarItems from "./DesktopNavbarItems";
import Image from "next/image";

export function Navbar({ dictionary }) {
  console.log(dictionary);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale } = useLocaleStore();

  return (
    <header className=" bg-transparent absolute top-0 left-0 z-50 w-full text-white">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between py-4 sm:px-[20px] lg:px-[50px]"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={"/images/logo2.png"}
              height={200}
              width={200}
              alt="Logo"
              className="hidden lg:block"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavBarItems dictionary={dictionary} />

        {/* Right side buttons */}
        <div className=" flex items-center justify-center md:flex">
          <div className="flex items-center justify-center">
            <LanguageChanger />
            <Button className="rounded-md bg-primary text-white hidden lg:block ">
              {dictionary.contactButonText}
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <MobileNavbar dictionary={dictionary} />
          </div>
        </div>
      </div>
    </header>
  );
}
