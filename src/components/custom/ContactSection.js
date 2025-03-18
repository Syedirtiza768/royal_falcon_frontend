import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactSection({ dictionary }) {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#C08B67]">
                {" "}
                {dictionary.contactHeadingText1}{" "}
              </span>
              <span className="text-[#1B3B48]">
                {dictionary.contactHeadingText2}
              </span>
              <br />
              <span className="text-[#1B3B48]">
                {dictionary.contactHeadingText3}{" "}
              </span>
              <span className="text-[#C08B67]">
                {dictionary.contactHeadingText4}
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              {dictionary.contactHeadingText}
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dictionary.firstNameLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    required
                    className="w-full"
                    placeholder={dictionary.firstNameLabel}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dictionary.lastNameLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    required
                    className="w-full"
                    placeholder={dictionary.lastNameLabel}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dictionary.emailLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    className="w-full"
                    placeholder={dictionary.emailLabel}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dictionary.phoneLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    required
                    className="w-full"
                    placeholder={dictionary.phoneLabel}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-2 bg-[#C08B67] hover:bg-[#A77555] text-white font-medium rounded"
              >
                {dictionary.conactSubmitLabel}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
