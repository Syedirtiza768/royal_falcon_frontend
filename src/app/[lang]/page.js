import { Navbar } from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { getDictionary } from "./dictionaries";

async function HomePage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Navbar dictionary={dictionary} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-primary">
        <h1 className="text-3xl font-bold">Welcome to UPWARDS</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a demo page showcasing the responsive navbar with submenu
          functionality.
        </p>
      </div>
      <button>{dictionary.test}</button>
    </main>
  );
}

export default HomePage;
