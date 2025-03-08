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

export function Navbar({ dictionary }) {
  console.log(dictionary);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale } = useLocaleStore();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
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
        {/* <nav className="hidden space-x-8 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger>
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="flex flex-col space-y-2 p-2 w-[300px]">
                          {link.submenu.map((subItem) => (
                            <li key={subItem.href}>
                              <NavigationMenuLink asChild>
                                <Link href={subItem.href} className="block p-2">
                                  {subItem.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className="text-base font-medium text-gray-800 hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav> */}
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
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
}
