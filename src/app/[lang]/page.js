import { getDictionary } from "./dictionaries";
import PageContent from "./PageContent";
import { Mail, Phone, MapPin, Lock } from "lucide-react";
import { Navbar } from "@/components/custom/Navbar";

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
      <footer className="bg-black text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <img
                src={"/images/logo2.png"}
                height={100}
                width={100}
                alt="Logo"
                className=""
              />
              <p className="text-gray-400 leading-relaxed">
                Empowering the future with AI and digital innovation. A UAE
                national initiative driving digital transformation across
                government and enterprise sectors with unparalleled excellence.
              </p>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-amber-400" />
                <span className="text-gray-400 text-sm font-medium">
                  Enterprise-grade security certified
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Premium Services</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Industry Digitalization
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Advanced AI Technologies
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Government Solutions
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Enterprise Solutions
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Cloud Migration
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">
                Company Excellence
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  About Us
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Our Experience
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Leadership Team
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Premium Careers
                </div>
                <div className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  News & Updates
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">
                Contact Excellence
              </h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="font-medium">
                    Abu Dhabi, United Arab Emirates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="font-medium">
                    info@royalfalconsolutions.ae
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="font-medium">+971 (0) 2 XXX XXXX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left font-medium">
                &copy; 2025 Royal Falcon Solutions. All rights reserved. UAE
                National Initiative - Premium Digital Excellence.
              </p>
              <div className="flex items-center space-x-6 text-gray-400">
                <span className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Privacy Policy
                </span>
                <span className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Terms of Service
                </span>
                <span className="hover:text-amber-400 transition-colors cursor-pointer font-medium">
                  Premium Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
