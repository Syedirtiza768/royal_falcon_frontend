import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactSection() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#C08B67]">Bringing </span>
              <span className="text-[#1B3B48]">ideas and innovation</span>
              <br />
              <span className="text-[#1B3B48]">to life through </span>
              <span className="text-[#C08B67]">technology</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex e.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    required
                    className="w-full"
                    placeholder="First name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    required
                    className="w-full"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    className="w-full"
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    required
                    className="w-full"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              {/* <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Upload File
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                  <input
                    type="file"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#C08B67] file:text-white hover:file:bg-[#A77555]"
                  />
                </div>
              </div> */}

              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-2 bg-[#C08B67] hover:bg-[#A77555] text-white font-medium rounded"
              >
                CONTACT NOW
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
