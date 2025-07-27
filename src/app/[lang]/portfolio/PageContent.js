"use client";
import React, { useState } from "react";
import {
  Building2,
  Shield,
  Brain,
  Cloud,
  Database,
  Globe,
  Zap,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  Award,
  Users,
  TrendingUp,
  Eye,
  Clock,
  Target,
  Briefcase,
  Code,
  Smartphone,
  Monitor,
  Server,
  Cog,
  Layers,
  LineChart,
  PieChart,
  BarChart3,
  Crown,
  Sparkles,
  Search,
  Camera,
  MapPin,
  Navigation,
  Cpu,
  Activity,
  Radar,
  Satellite,
  Car,
  UserCheck,
  Video,
  Bot,
  Map,
  Headphones,
  Brackets,
  LayoutDashboard,
  Route,
  AreaChart,
  SquareActivity,
  Footprints,
  TrafficCone,
  Scan,
  GanttChart,
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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Define the custom colors as CSS custom properties
  const customStyles = {
    "--primary-color": "#a86523",
    "--secondary-color": "#e9a319",
    "--muted-color": "#fad59a",
    "--accent-color": "#fcefcb",
  };

  const offeringsProfile = [
    {
      name: "Productivity",
      icon: TrendingUp,
      description: "Enhanced operational efficiency through AI automation",
    },
    {
      name: "Sustainability",
      icon: Globe,
      description: "Eco-friendly solutions for environmental impact reduction",
    },
    {
      name: "Cost Reduction",
      icon: Target,
      description: "Optimized resource allocation and operational savings",
    },
    {
      name: "Digital Transformation",
      icon: Zap,
      description: "Complete digitalization of traditional processes",
    },
    {
      name: "Security",
      icon: Shield,
      description: "Advanced cybersecurity and threat protection",
    },
  ];

  const smartCitySolutions = [
    {
      title: "AI Surveillance Management",
      icon: Camera,
      features: [
        "AI enabled CCTV",
        "AI monitoring platform",
        "Digital Twin map application",
      ],
      description:
        "Comprehensive surveillance ecosystem with intelligent monitoring capabilities.",
    },
    {
      title: "AI People Management",
      icon: Users,
      features: [
        "Crowd Monitoring",
        "Queue Monitoring",
        "Mass participants Monitoring",
      ],
      description:
        "Advanced crowd analytics and people flow optimization systems.",
    },
    {
      title: "AI Visitor and Time Attendance",
      icon: UserCheck,
      features: [
        "Advance Visitor Management System",
        "Seamless User Registration",
        "Contactless Visitor Journey and monitoring",
        "Time attendance",
      ],
      description:
        "Streamlined visitor experiences with contactless technology integration.",
    },
    {
      title: "AI Traffic Management",
      icon: Car,
      features: [
        "AI traffic violation system",
        "Automatic violation detection",
        "Traffic data analytics system",
        "Predictive traffic visualization",
      ],
      description:
        "Intelligent traffic flow optimization with predictive analytics.",
    },
  ];

  const smartSecuritySolutions = [
    {
      title: "AI Policing Systems",
      icon: Shield,
      features: [
        "Large Language Models",
        "Real time data integration",
        "Automate Decision Platform",
      ],
      description:
        "Advanced AI-powered policing with automated decision-making capabilities.",
    },
    {
      title: "AI Tracking System",
      icon: Scan,
      features: [
        "Advance Location Tracking System",
        "Advance multi-modal sensor integration",
        "Predictive of target locations",
      ],
      description:
        "Multi-sensor tracking with predictive location intelligence.",
    },
    {
      title: "AI Robotics",
      icon: Bot,
      features: [
        "Advance robotics",
        "Operational robo-dog inspection and recce",
        "Operational undersea search robot",
        "Integration to multi-platform",
      ],
      description:
        "Cutting-edge robotics for specialized operations and inspections.",
    },
    {
      title: "AI Control Room",
      icon: LayoutDashboard,
      features: [
        "Command and Control Center",
        "Operational expertise in design command and control room",
        "Expertise in command and control platform integration",
      ],
      description:
        "Integrated command centers with expert-designed control platforms.",
    },
  ];

  const smartSpatialitySolutions = [
    {
      title: "AI Mapping System",
      icon: Map,
      features: [
        "Real Time traffic information",
        "Real time weather information",
        "Multi-param routing and navigation",
      ],
      description:
        "Dynamic mapping with real-time data integration and intelligent routing.",
    },
    {
      title: "AI Digital Twin",
      icon: Brackets,
      features: [
        "For GPU 3D Digital Twin",
        "3D scanning for infrastructures",
        "3D digital twin for city and live monitoring",
      ],
      description:
        "High-performance 3D digital twins for comprehensive city monitoring.",
    },
    {
      title: "Metaverse Platform",
      icon: Headphones,
      features: [
        "3D spatial platform",
        "High detailed 3D model generation",
        "VR immersive platform",
        "VR training platform",
      ],
      description:
        "Immersive virtual environments for training and spatial experiences.",
    },
  ];

  const cctvFeatures = [
    {
      title: "Data Analytics",
      description:
        "Analyzing video feeds to improve operational efficiency and safety measures.",
      icon: BarChart3,
    },
    {
      title: "Integration Capabilities",
      description:
        "Seamless sensors integration with existing government security systems for enhanced functionality.",
      icon: Layers,
    },
    {
      title: "Real-time Surveillance",
      description:
        "Utilizing AI to enhance security and monitor environments effectively.",
      icon: Eye,
    },
    {
      title: "Incident Detection",
      description:
        "Deploying AI for rapid identification of unusual activities for immediate response.",
      icon: Zap,
    },
    {
      title: "User-friendly Dashboard",
      description:
        "Intuitive interface for users to control and monitor CCTV systems easily.",
      icon: LayoutDashboard,
    },
  ];

  const visitorManagementFeatures = [
    {
      title: "Real-time Monitoring",
      description:
        "Enables continuous tracking of visitor movements for enhanced security and streamlined access control.",
      icon: Activity,
    },
    {
      title: "Automated Check-in",
      description:
        "Facilitates efficient visitor registration through digital kiosks or mobile apps to minimize wait times.",
      icon: UserCheck,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Provides insights into visitor patterns and trends to improve facility management and security protocols.",
      icon: LineChart,
    },
  ];

  const infrastructureSolutions = [
    {
      title: "Enhanced Planning",
      description:
        "Facilitates efficient urban planning and infrastructure development for cities.",
      icon: Building2,
    },
    {
      title: "Seamless Integration",
      description:
        "Integrates with existing smart city technologies for optimized performance.",
      icon: Layers,
    },
    {
      title: "Scalability Options",
      description:
        "Offers scalable solutions to adapt to growing city demands.",
      icon: TrendingUp,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Utilizes real-time data to drive decision-making for public services.",
      icon: Database,
    },
    {
      title: "Automated Services",
      description:
        "Provides a highly automated services that can be planned and dispatch remotely.",
      icon: Cog,
    },
    {
      title: "Partnership",
      description:
        "Partners with UAE government agencies to implement effective strategies.",
      icon: Users,
    },
  ];

  const mappingSystemFeatures = [
    {
      title: "Tailored Solutions",
      description:
        "APIs that work together in a customizable manner with seamless integration to your existing web, apps or ERPs",
      icon: Code,
    },
    {
      title: "Cost Efficiency",
      description:
        "A product that provides a better UX & a viable cost for growing businesses.",
      icon: Target,
    },
    {
      title: "Scalability Options",
      description:
        "Offers scalable solutions to adapt to companies' expansion plans easily",
      icon: TrendingUp,
    },
    {
      title: "Accurate Data Insights",
      description:
        "Constantly refreshed data, which means new addresses, interchanges, and roads are reflected in maps as soon as they're there in the real world.",
      icon: MapPin,
    },
    {
      title: "Automated Services",
      description:
        "Provides a highly automated services that integrates real time data for use with planning and dispatch services.",
      icon: Cog,
    },
    {
      title: "Partnership",
      description:
        "Partners with multiple UAE entities to enhance their operational productivity",
      icon: Users,
    },
  ];

  const digitalTwinFeatures = [
    {
      title: "Data Visualization",
      description:
        "Enhanced representation of city data for better decision making.",
      icon: PieChart,
    },
    {
      title: "Urban Planning",
      description:
        "Simulations of urban growth to optimize resource allocation.",
      icon: Building2,
    },
    {
      title: "Integration",
      description:
        "Seamless connection with existing systems to provide comprehensive insights.",
      icon: Layers,
    },
    {
      title: "Training Simulations",
      description:
        "Virtual environments for training officers and emergency responders.",
      icon: Users,
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Continuous observation of urban environments for quick response.",
      icon: Activity,
    },
    {
      title: "User Engagement",
      description:
        "Immersive platforms that allow citizens to explore city data.",
      icon: Users,
    },
    {
      title: "Scenario Testing",
      description:
        "Testing urban scenarios to predict impacts before implementation.",
      icon: Target,
    },
    {
      title: "Environmental Scanning",
      description:
        "Evaluating environmental impact through digital modeling capabilities.",
      icon: Globe,
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
              <Briefcase className="w-4 h-4 mr-2" />
              Our Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Advanced AI Solutions
              <br />
              <span style={{ color: "var(--secondary-color)" }}>Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive smart city, security, and spatial intelligence
              solutions powered by cutting-edge AI technology and innovative
              digital transformation capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Profile */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="border px-6 py-2 font-semibold"
              style={{
                backgroundColor: "rgba(250, 213, 154, 0.3)",
                color: "var(--secondary-color)",
                borderColor: "rgba(250, 213, 154, 0.5)",
              }}
            >
              <Crown className="w-4 h-4 mr-2" />
              Offerings Profile
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Core Value
              <span style={{ color: "var(--secondary-color)" }}>
                Propositions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {offeringsProfile.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--secondary-color)" }}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {offering.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart City Solutions */}
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
              <Building2 className="w-4 h-4 mr-2" />
              Smart City
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Intelligent Urban
              <span style={{ color: "var(--secondary-color)" }}>
                Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {smartCitySolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "var(--secondary-color)" }}
                      >
                        <IconComponent className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {solution.title}
                        </h3>
                        <p className="text-gray-400">{solution.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle
                            className="h-4 w-4 flex-shrink-0"
                            style={{ color: "var(--secondary-color)" }}
                          />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart Security Solutions */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="border px-6 py-2 font-semibold"
              style={{
                backgroundColor: "rgba(250, 213, 154, 0.3)",
                color: "var(--secondary-color)",
                borderColor: "rgba(250, 213, 154, 0.5)",
              }}
            >
              <Shield className="w-4 h-4 mr-2" />
              Smart Security
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Advanced Security
              <span style={{ color: "var(--secondary-color)" }}>
                Technologies
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {smartSecuritySolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "var(--secondary-color)" }}
                      >
                        <IconComponent className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {solution.title}
                        </h3>
                        <p className="text-gray-400">{solution.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle
                            className="h-4 w-4 flex-shrink-0"
                            style={{ color: "var(--secondary-color)" }}
                          />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart Spatiality Solutions */}
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
              <Satellite className="w-4 h-4 mr-2" />
              Smart Spatiality
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Spatial Intelligence
              <span style={{ color: "var(--secondary-color)" }}>Platforms</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {smartSpatialitySolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "var(--secondary-color)" }}
                      >
                        <IconComponent className="h-10 w-10 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400">{solution.description}</p>
                    </div>
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle
                            className="h-4 w-4 flex-shrink-0"
                            style={{ color: "var(--secondary-color)" }}
                          />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CCTV and AI Technology Solutions */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="border px-6 py-2 font-semibold"
              style={{
                backgroundColor: "rgba(250, 213, 154, 0.3)",
                color: "var(--secondary-color)",
                borderColor: "rgba(250, 213, 154, 0.5)",
              }}
            >
              <Video className="w-4 h-4 mr-2" />
              CCTV & AI Technology
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Advanced Surveillance
              <span style={{ color: "var(--secondary-color)" }}>Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cctvFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--secondary-color)" }}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visitor Management System */}
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
              <UserCheck className="w-4 h-4 mr-2" />
              Visitor Management
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Smart Visitor
              <span style={{ color: "var(--secondary-color)" }}>
                Experience
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {visitorManagementFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--secondary-color)" }}
                    >
                      <IconComponent className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Low Altitude Infrastructure */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="border px-6 py-2 font-semibold"
              style={{
                backgroundColor: "rgba(250, 213, 154, 0.3)",
                color: "var(--secondary-color)",
                borderColor: "rgba(250, 213, 154, 0.5)",
              }}
            >
              <Satellite className="w-4 h-4 mr-2" />
              AI Infrastructure
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Low Altitude Infrastructure
              <span style={{ color: "var(--secondary-color)" }}>Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--secondary-color)" }}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Mapping System */}
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
              <Navigation className="w-4 h-4 mr-2" />
              AI Mapping System
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Intelligent Navigation
              <span style={{ color: "var(--secondary-color)" }}>Platform</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mappingSystemFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--secondary-color)" }}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Twin and Metaverse */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="border px-6 py-2 font-semibold"
              style={{
                backgroundColor: "rgba(250, 213, 154, 0.3)",
                color: "var(--secondary-color)",
                borderColor: "rgba(250, 213, 154, 0.5)",
              }}
            >
              <Headphones className="w-4 h-4 mr-2" />
              Digital Twin & Metaverse
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Virtual Reality
              <span style={{ color: "var(--secondary-color)" }}>
                Innovations
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalTwinFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--secondary-color)" }}
                    >
                      <IconComponent className="h-7 w-7 text-black" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-xs">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
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
              Transform Your Organization
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Implement
              <br />
              <span style={{ color: "var(--secondary-color)" }}>
                AI-Powered Solutions?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Partner with Royal Falcon Solutions to transform your operations
              with cutting-edge AI technology, smart city solutions, and
              advanced security systems tailored to your specific needs.
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
                Schedule Consultation
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
                Download Portfolio
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
