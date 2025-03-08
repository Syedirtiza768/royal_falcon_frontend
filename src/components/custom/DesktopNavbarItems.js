"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { navItems } from "@/lib/Data";

// Define the navigation items with dropdown support

export default function DesktopNavBarItems() {
  const [activeItem, setActiveItem] = useState("MEDIA");
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const handleDropdownToggle = (itemName) => {
    if (openDropdowns.includes(itemName)) {
      setOpenDropdowns(openDropdowns.filter((name) => name !== itemName));
    } else {
      setOpenDropdowns([...openDropdowns, itemName]);
    }
  };

  const isDropdownOpen = (itemName) => openDropdowns.includes(itemName);

  const handleMouseEnter = (itemName, hasDropdown) => {
    if (hasDropdown) {
      setOpenDropdowns((prev) =>
        prev.includes(itemName) ? prev : [...prev, itemName]
      );
    }
  };

  const handleMouseLeave = (itemName, hasDropdown) => {
    setTimeout(() => {
      const dropdown = document.getElementById(`dropdown-${itemName}`);
      const isHoveringDropdown = dropdown && dropdown.matches(":hover");

      if (!isHoveringDropdown && hasDropdown) {
        setOpenDropdowns((prev) => prev.filter((name) => name !== itemName));
      }
    }, 100);
  };

  return (
    <nav className="relative w-full hidden lg:flex items-center justify-center  ">
      <div className="flex space-x-16">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.name, item.hasDropdown)}
            onMouseLeave={() => handleMouseLeave(item.name, item.hasDropdown)}
          >
            <div className="flex items-center gap-1">
              {item.hasDropdown ? (
                <button
                  className={cn(
                    "group relative flex items-center py-2 font-medium tracking-wide transition-colors",
                    activeItem === item.name
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  )}
                  onClick={() => {
                    setActiveItem(item.name);
                    handleDropdownToggle(item.name);
                  }}
                >
                  {item.name}
                  <span className="ml-1">
                    {isDropdownOpen(item.name) ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full",
                      activeItem === item.name && "w-full"
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "group relative inline-block py-2 font-medium tracking-wide transition-colors",
                    activeItem === item.name
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  )}
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute  bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full",
                      activeItem === item.name && "w-full"
                    )}
                  />
                </Link>
              )}
            </div>
            {item.hasDropdown && (
              <div
                id={`dropdown-${item.name}`}
                className={cn(
                  "absolute left-0 top-full py-2 bg-gray-700 z-10 mt-1 min-w-[200px]      transition-all",
                  isDropdownOpen(item.name)
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                )}
                onMouseEnter={() => handleMouseEnter(item.name, true)}
                onMouseLeave={() => handleMouseLeave(item.name, true)}
              >
                {item.dropdownItems?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className=" block px-4 py-2 text-[16px] text-white  w-[400px]  hover:text-primary"
                    onClick={() => {
                      setActiveItem(item.name);
                      setOpenDropdowns([]);
                    }}
                  >
                    {dropdownItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
