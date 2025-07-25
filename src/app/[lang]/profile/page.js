import PageContent from "./PageContent";
import { Mail, Phone, MapPin, Lock } from "lucide-react";
import { Navbar } from "@/components/custom/Navbar";
import Footer from "@/components/custom/global/Footer";
import { getDictionary } from "../dictionaries";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-400">
      {/* Navigation */}

      <Navbar dictionary={dictionary} transparent={true} />
      <div className="mt-[50px]"></div>

      <PageContent dictionary={dictionary} />

      {/* Footer */}
      <Footer dictionary={dictionary} />
    </div>
  );
}
