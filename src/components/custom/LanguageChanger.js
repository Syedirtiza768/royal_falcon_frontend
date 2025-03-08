"use client";

import { useLocaleStore } from "@/stores/useLocaleStore";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const locales = ["en", "ar"];

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, setLocale } = useLocaleStore();

  const nextLocale = locale === "en" ? "ar" : "en";

  const switchLocale = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0])) segments.shift(); // Remove current locale

    setLocale(nextLocale); // Update Zustand store
    router.push(`/${nextLocale}/${segments.join("/")}`);
  };

  return (
    <Button
      onClick={switchLocale}
      className="m-2 py-2 px-5 border border-gray-200 bg-white text-primary rounded hover:bg-white cursor-pointer hover:opacity-80"
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
}
