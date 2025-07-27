"use client";
import { ArrowRight, Crown, Sparkles } from "lucide-react";
import React from "react";

// Simple UI Components to match other pages
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
  >
    {children}
  </span>
);

const Button = ({ children, className = "", onClick, href, ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

function HeroSection() {
  // Define the custom colors as CSS custom properties to match other pages
  const customStyles = {
    "--primary-color": "#a86523",
    "--secondary-color": "#e9a319",
    "--muted-color": "#fad59a",
    "--accent-color": "#fcefcb",
  };

  return (
    <section
      className="relative overflow-hidden bg-zinc-900 flex min-h-[600px] md:min-h-[800px] items-center justify-center text-white px-4 sm:px-6 lg:px-8"
      style={customStyles}
    >
      {/* Background decoration - using CSS instead of external image */}
      <div
        className="absolute h-[400px] w-[400px] left-[-200px] top-[-200px] opacity-20 rounded-full"
        style={{
          background: `linear-gradient(45deg, var(--secondary-color), var(--primary-color))`,
          animation: "spin 20s linear infinite",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute h-[300px] w-[300px] right-[-150px] bottom-[-150px] opacity-15 rounded-full"
        style={{
          background: `linear-gradient(45deg, var(--primary-color), var(--secondary-color))`,
          animation: "spin 15s linear infinite reverse",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center space-y-8">
        {/* Badge */}
        <Badge
          className="border border-gray-700 px-6 py-2 font-semibold shadow-sm"
          style={{ backgroundColor: "var(--secondary-color)", color: "black" }}
        >
          <Crown className="w-4 h-4 mr-2" />
          Leading AI Solutions Provider
        </Badge>

        {/* Main Heading - Updated to match other pages */}
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 text-transparent bg-clip-text">
              ROYAL FALCON
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text">
              SOLUTIONS
            </span>
          </h1>

          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Empowering
            <span style={{ color: "var(--secondary-color)" }}>
              {" "}
              Digital Security
            </span>
          </h2>
        </div>

        {/* Description - Updated to match other pages */}
        <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Protecting what matters most in an ever-evolving digital landscape
          through cutting-edge AI solutions and innovative security
          technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
          <Button
            href="#"
            className="text-black px-10 py-4 text-lg shadow-2xl hover:shadow-3xl border border-gray-800 transition-all duration-300"
            style={{ backgroundColor: "var(--secondary-color)" }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "var(--primary-color)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "var(--secondary-color)")
            }
          >
            Get Started
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button
            href="#"
            className="border-2 border-gray-700 text-white bg-transparent px-10 py-4 text-lg shadow-xl transition-all duration-300"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--secondary-color)";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            Learn More
            <Sparkles className="ml-3 h-5 w-5" />
          </Button>
        </div>

        {/* Stats or Key Points */}
        <div className="grid md:grid-cols-3 gap-8 pt-16">
          <div className="text-center">
            <div
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: "var(--secondary-color)" }}
            >
              500+
            </div>
            <div className="text-gray-400 mt-2">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: "var(--secondary-color)" }}
            >
              99.9%
            </div>
            <div className="text-gray-400 mt-2">System Uptime</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: "var(--secondary-color)" }}
            >
              24/7
            </div>
            <div className="text-gray-400 mt-2">Support Available</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
