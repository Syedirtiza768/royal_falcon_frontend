"use client";
import React, { useState } from "react";
import {
  Building2,
  Shield,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Briefcase,
  Code,
  Smartphone,
  Car,
  MapPin,
  CreditCard,
  Route,
  Clock,
  UserCheck,
  Video,
  Eye,
  Brain,
  Award,
  BarChart3,
  Search,
  AlertTriangle,
  Monitor,
  FileText,
  Crown,
  Star,
  Globe,
  Zap,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Trophy,
  Calendar,
  Database,
  Activity,
  Layers,
  Settings,
  PieChart,
  LineChart,
} from "lucide-react";

// Simple UI Components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
  >
    {children}
  </span>
);

const Button = ({ children, className = "", onClick, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const SuccessCasesPage = () => {
  // Define the custom colors as CSS custom properties
  const customStyles = {
    "--primary-color": "#a86523",
    "--secondary-color": "#e9a319",
    "--muted-color": "#fad59a",
    "--accent-color": "#fcefcb",
  };

  const successCases = [
    {
      title: "Smart Mobility SuperApp in Abu Dhabi",
      icon: Smartphone,
      description:
        "One comprehensive app for all mobility scenarios in Abu Dhabi",
      features: [
        {
          icon: Car,
          title: "One App for all Mobility Scenarios",
          description:
            "Supports taxi booking, parking guidance, travel planning, charge point finding and etc.",
        },
        {
          icon: CreditCard,
          title: "Multiple Online Payment",
          description:
            "Supports debit card, credit card, smart phone pay, Payby (local payment), and etc.",
        },
        {
          icon: Route,
          title: "Multimodal Mobility Planning",
          description:
            "Supports optimal mobility route planning based on real-time traffic information, HD map and intelligent scheduling algorithm.",
        },
      ],
      stats: [
        { label: "Active Users", value: "500K+", icon: Users },
        { label: "Daily Bookings", value: "50K+", icon: Calendar },
        { label: "Success Rate", value: "99.8%", icon: Trophy },
      ],
    },
    {
      title: "eKYC System",
      icon: UserCheck,
      description:
        "A data-driven system designed to streamline and enhance the identity authentication process.",
      features: [
        {
          icon: Brain,
          title: "Intelligent Identification",
          description:
            "Advanced AI algorithms for accurate identity verification",
        },
        {
          icon: Users,
          title: "Personnel Portrait",
          description: "Comprehensive user profiling and analysis capabilities",
        },
        {
          icon: Settings,
          title: "Automated Decision-making",
          description:
            "Intelligent automated processes for streamlined operations",
        },
      ],
      benefits: [
        {
          label: "Identity authentication accuracy",
          value: "100%",
          icon: Target,
        },
        {
          label: "Authentication efficiency increased by",
          value: "60%",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Video Analysis System",
      icon: Video,
      description:
        "An AI-powered system designed for deepfake and keywords detection.",
      features: [
        {
          icon: Eye,
          title: "Deepfake Detection",
          description: "Advanced detection of AI-generated fake videos",
        },
        {
          icon: Search,
          title: "AIGC-generated Content Detection",
          description: "Identification of artificially generated content",
        },
        {
          icon: AlertTriangle,
          title: "Sensitive Words Detection",
          description: "Automated detection of inappropriate content",
        },
      ],
      benefits: [
        {
          label: "Deepfake videos detected each week",
          value: "10,000+",
          icon: Eye,
        },
        {
          label: "Efficiency improvement vs manual",
          value: "10,000x",
          icon: Zap,
        },
      ],
    },
    {
      title: "Government Office System",
      icon: Building2,
      description:
        "A unified app store & portal integrating all office applications facilitate government office.",
      features: [
        {
          icon: Monitor,
          title: "Smart OA",
          description: "Intelligent office automation system",
        },
        {
          icon: Users,
          title: "Digital Recruitment",
          description: "Streamlined digital hiring processes",
        },
        {
          icon: BarChart3,
          title: "Leadership Dashboard",
          description: "Comprehensive analytics and reporting platform",
        },
      ],
      benefits: [
        { label: "System rollout cycle reduced by", value: "25%", icon: Clock },
        {
          label: "User experience satisfaction",
          value: "Significantly Improved",
          icon: Award,
        },
      ],
    },
  ];

  const partners = [
    {
      name: "Upwards",
      category: "Consulting Partner",
      description: "Strategic consulting and digital transformation services",
      logo: "/images/partners/upwards.png",
      partnership: "Strategic Partner",
    },
    {
      name: "Presight.ai",
      category: "AI Partner",
      description:
        "Advanced artificial intelligence and big data analytics platform",
      logo: "/images/partners/presight.png",
      partnership: "Technology Partner",
    },
    {
      name: "Yango",
      category: "Mobility Partner",
      description: "Super app platform for ride-hailing and mobility solutions",
      logo: "/images/partners/yango.png",
      partnership: "Integration Partner",
    },
    {
      name: "Hewlett Packard Enterprise",
      category: "Infrastructure Partner",
      description: "Enterprise computing, storage, and networking solutions",
      logo: "/images/partners/hpe.jpg",
      partnership: "Platinum Partner",
    },
    {
      name: "Issured",
      category: "Security Partner",
      description: "Insurance technology and risk management solutions",
      logo: "/images/partners/issured.png",
      partnership: "Solution Partner",
    },
    {
      name: "Notamedia",
      category: "Digital Partner",
      description: "Digital marketing and media technology solutions",
      logo: "/images/partners/notamedia.png",
      partnership: "Creative Partner",
    },
    {
      name: "Ingram Micro",
      category: "Distribution Partner",
      description: "Technology distribution and supply chain solutions",
      logo: "/images/partners/ingram.jpg",
      partnership: "Channel Partner",
    },
  ];

  return (
    <div
      className="min-h-screen bg-zinc-900 text-gray-400"
      style={customStyles}
    >
      {/* Hero Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge
              className="border border-gray-700 px-6 py-2 font-semibold shadow-sm"
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "black",
              }}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Proven
              <span style={{ color: "var(--secondary-color)" }}>
                {" "}
                Success Cases
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Real-world implementations demonstrating the transformative power
              of our AI solutions across various industries and government
              sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {successCases.map((caseStudy, index) => {
              const IconComponent = caseStudy.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-cols-2"
                  }`}
                >
                  {/* Content Section */}
                  <div
                    className={`space-y-8 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                          style={{ backgroundColor: "var(--secondary-color)" }}
                        >
                          <IconComponent className="h-8 w-8 text-black" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            {caseStudy.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Key Features
                      </h3>
                      {caseStudy.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={featureIndex}
                            className="bg-zinc-800 border border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                          >
                            <div className="flex items-start space-x-4">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                  backgroundColor: "var(--secondary-color)",
                                }}
                              >
                                <FeatureIcon className="h-6 w-6 text-black" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                  {feature.title}
                                </h4>
                                <p className="text-gray-400">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stats/Benefits Section */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <Card className="bg-black border border-gray-700 shadow-2xl">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">
                          {caseStudy.benefits
                            ? "Customer Benefits"
                            : "Key Metrics"}
                        </h3>

                        <div className="space-y-6">
                          {(caseStudy.stats || caseStudy.benefits)?.map(
                            (item, itemIndex) => {
                              const ItemIcon = item.icon;
                              return (
                                <div
                                  key={itemIndex}
                                  className="flex items-center space-x-4 p-4 bg-zinc-800 rounded-xl border border-gray-700"
                                >
                                  <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{
                                      backgroundColor: "var(--secondary-color)",
                                    }}
                                  >
                                    <ItemIcon className="h-6 w-6 text-black" />
                                  </div>
                                  <div>
                                    <div className="text-2xl font-bold text-white">
                                      {item.value}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      {item.label}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>

                        {caseStudy.stats && (
                          <div className="mt-8 pt-6 border-t border-gray-700">
                            <p className="text-center text-gray-400">
                              <span
                                style={{ color: "var(--secondary-color)" }}
                                className="font-semibold"
                              >
                                Deployed Successfully
                              </span>{" "}
                              in Abu Dhabi
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="border border-gray-800 px-6 py-2 font-semibold shadow-sm"
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "black",
              }}
            >
              <Globe className="w-4 h-4 mr-2" />
              Strategic Partners
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Trusted
              <span style={{ color: "var(--secondary-color)" }}>
                {" "}
                Partnerships
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver world-class AI
              solutions and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={partner.logo}
                      className="w-[100px] mx-auto"
                      alt=""
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {partner.name}
                  </h3>
                  <Badge
                    className="mb-4"
                    style={{
                      backgroundColor: "rgba(250, 213, 154, 0.3)",
                      color: "var(--secondary-color)",
                    }}
                  >
                    {partner.category}
                  </Badge>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-center space-x-2">
                      <Star
                        className="h-4 w-4"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        {partner.partnership}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border border-gray-700 shadow-xl">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--secondary-color)" }}
                >
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Diverse Expertise
                </h3>
                <p className="text-gray-400 text-sm">
                  Partnerships spanning AI, mobility, enterprise infrastructure,
                  and digital solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border border-gray-700 shadow-xl">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--secondary-color)" }}
                >
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Integrated Solutions
                </h3>
                <p className="text-gray-400 text-sm">
                  Seamless integration across consulting, technology, and
                  distribution channels.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border border-gray-700 shadow-xl">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--secondary-color)" }}
                >
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Market Leadership
                </h3>
                <p className="text-gray-400 text-sm">
                  Collaborating with industry leaders in AI, mobility, and
                  enterprise technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge
              className="border px-6 py-2 font-semibold shadow-lg"
              style={{
                backgroundColor: "rgba(250, 213, 154, 0.3)",
                color: "var(--secondary-color)",
                borderColor: "rgba(250, 213, 154, 0.5)",
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Join Our Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Become Our
              <br />
              <span style={{ color: "var(--secondary-color)" }}>
                Next Success Story?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our proven AI solutions can transform your
              organization and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button
                className="text-black px-10 py-4 text-lg shadow-2xl hover:shadow-3xl border border-gray-800 transition-all duration-300"
                style={{ backgroundColor: "var(--secondary-color)" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "var(--primary-color)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "var(--secondary-color)")
                }
              >
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
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
                View Case Studies
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessCasesPage;
