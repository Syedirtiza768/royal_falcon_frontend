"use client";
import { useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import LanguageChanger from "./LanguageChanger";
import { useLocaleStore } from "@/stores/useLocaleStore";
import DesktopNavBarItems from "./DesktopNavbarItems";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar({ dictionary, transparent }) {
  const router = useRouter();

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 z-50 w-full text-primary`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {transparent ? (
              <Image
                src={"/images/logo2.png"}
                height={150}
                width={150}
                alt="Logo"
                className="hidden lg:block"
              />
            ) : (
              <Image
                src={"/images/logo.png"}
                height={200}
                width={200}
                alt="Logo"
                className="hidden lg:block"
              />
            )}
            <Image
              src={"/images/logo2.png"}
              height={130}
              width={130}
              alt="Logo"
              className="lg:hidden"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavBarItems dictionary={dictionary} transparent={transparent} />

        {/* Right side buttons */}
        <div className=" flex items-center justify-center md:flex">
          <div className="flex items-center justify-center">
            <LanguageChanger />
            <Button
              onClick={() => router.push("/#contactSection")}
              className={` cursor-pointer rounded-none bg-primary text-white hidden lg:block `}
            >
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
