import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  Quote,
  TrendingUp,
  Database,
  Cloud,
  Lock,
  Crown,
  Sparkles,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-orange-100 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              {/* <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg border border-orange-200">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 bg-clip-text text-transparent">
                  Royal Falcon Solutions
                </span>
                <div className="text-xs text-amber-600 font-semibold tracking-wide">
                  UAE NATIONAL INITIATIVE
                </div>
              </div> */}
              <img
                src={"/images/logo2.png"}
                height={100}
                width={100}
                alt="Logo"
                className=""
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#about"
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a
                href="#experience"
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <Button className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-80 bg-white border-l border-orange-100"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center space-x-3 pb-8 border-b border-orange-100">
                      <img
                        src={"/images/logo2.png"}
                        height={100}
                        width={100}
                        alt="Logo"
                        className=""
                      />
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-6 py-8 flex-1">
                      <a
                        href="#about"
                        className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-orange-50 border border-transparent hover:border-orange-200"
                      >
                        About
                      </a>
                      <a
                        href="#services"
                        className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-orange-50 border border-transparent hover:border-orange-200"
                      >
                        Services
                      </a>
                      <a
                        href="#experience"
                        className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-orange-50 border border-transparent hover:border-orange-200"
                      >
                        Experience
                      </a>
                      <a
                        href="#contact"
                        className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-orange-50 border border-transparent hover:border-orange-200"
                      >
                        Contact
                      </a>
                    </div>

                    {/* Mobile CTA Button */}
                    <div className="pt-6 border-t border-orange-100">
                      <Button className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      {/* Mobile Contact Info */}
                      <div className="mt-6 space-y-3 text-center">
                        <div className="flex items-center justify-center space-x-2 text-slate-600">
                          <Mail className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-medium">
                            info@royalfalconsolutions.ae
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-slate-600">
                          <Phone className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-medium">
                            +971 (0) 2 XXX XXXX
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-slate-600">
                          <MapPin className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-medium">
                            Abu Dhabi, UAE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-orange-200 px-4 py-2 text-sm font-semibold shadow-sm">
                    <Crown className="w-3 h-3 mr-2" />
                    UAE National Initiative
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-amber-200 px-4 py-2 text-sm font-semibold shadow-sm">
                    <Sparkles className="w-3 h-3 mr-2" />
                    20+ Years Excellence
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-slate-900">Empowering</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                  <br />
                  <span className="text-slate-800 text-3xl lg:text-4xl font-semibold">
                    Through AI Innovation
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl">
                  Royal Falcon Solutions delivers
                  <span className="font-semibold text-orange-700">
                    {" "}
                    world-class digitalization
                  </span>{" "}
                  and
                  <span className="font-semibold text-amber-700">
                    {" "}
                    advanced AI technologies
                  </span>
                  , providing unparalleled security and exceptional user
                  experiences for UAEs leading organizations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                >
                  Discover Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 hover:border-orange-500 hover:bg-orange-50 bg-white/90 backdrop-blur-sm px-8 py-3 rounded-xl font-semibold text-orange-700 hover:text-orange-800 transition-all duration-300 shadow-lg"
                >
                  Watch Presentation
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
                    20+
                  </div>
                  <div className="text-sm text-slate-700 font-semibold">
                    Years Excellence
                  </div>
                  <div className="text-xs text-slate-600">
                    Proven Leadership
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-slate-700 font-semibold">
                    Projects Delivered
                  </div>
                  <div className="text-xs text-slate-600">
                    Successful Implementations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-slate-700 font-semibold">
                    Client Satisfaction
                  </div>
                  <div className="text-xs text-slate-600">
                    Exceptional Service
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white via-orange-50/50 to-amber-50/50 p-8 rounded-2xl shadow-2xl border border-orange-100">
                  <Image
                    src="/images/home/about1.jpg"
                    alt="Premium AI Dashboard Interface"
                    width={500}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-2xl"></div>

              {/* Floating Elements */}
              {/* <div className="absolute top-12 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-orange-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Performance
                    </div>
                    <div className="text-xs text-orange-600 font-medium">
                      +300% Growth
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute bottom-12 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-amber-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Security
                    </div>
                    <div className="text-xs text-amber-600 font-medium">
                      Military Grade
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900  to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-white font-semibold">
                Years of Excellence
              </div>
              <div className="text-orange-200 text-sm">
                Pioneering digital transformation
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-white font-semibold">
                Successful Projects
              </div>
              <div className="text-orange-200 text-sm">
                Government and enterprise clients
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-white font-semibold">
                Expert Professionals
              </div>
              <div className="text-orange-200 text-sm">
                AI and digital innovation specialists
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-white font-semibold">
                Client Satisfaction
              </div>
              <div className="text-orange-200 text-sm">
                Exceptional service delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-white via-orange-50/20 to-amber-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-orange-200 px-6 py-2 font-semibold shadow-sm">
              <Crown className="w-4 h-4 mr-2" />
              About Royal Falcon Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              UAE National Initiative
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Driving Digital Transformation
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Established as a UAE national initiative and supported by local
              entities and agencies, we are Abu Dhabis premier technology
              company, delivering cutting-edge solutions that define the future
              of digital excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 group hover:-translate-y-2 border border-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Exceptional Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-700 leading-relaxed">
                  Delivering solutions with unparalleled security standards,
                  ensuring complete protection with military-grade encryption
                  and advanced threat detection systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 group hover:-translate-y-2 border border-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Advanced AI Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-700 leading-relaxed">
                  Leveraging cutting-edge artificial intelligence and machine
                  learning to create intelligent solutions that adapt, learn,
                  and evolve with your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 group hover:-translate-y-2 border border-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Global Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-700 leading-relaxed">
                  Two decades of proven expertise across local and international
                  markets, bringing world-class standards and global best
                  practices to every project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 group hover:-translate-y-2 border border-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Local Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-700 leading-relaxed">
                  Dedicated to empowering UAEs government entities and
                  enterprises with tailored solutions that drive innovation and
                  support national digital transformation goals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-amber-200 px-6 py-2 font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Services Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Comprehensive Digital
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Transformation Solutions
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              We specialize in industry digitalization and advanced AI
              technologies, providing end-to-end solutions that transform
              businesses and drive unprecedented growth, efficiency, and
              innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/40 group overflow-hidden border border-orange-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl border border-orange-200">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 font-bold mb-2">
                      Industry Digitalization
                    </CardTitle>
                    <CardDescription className="text-slate-700 font-medium">
                      Transform traditional processes with cutting-edge digital
                      solutions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-slate-700 leading-relaxed">
                  Comprehensive digitalization services that modernize
                  operations, streamline workflows, and enhance efficiency
                  across all industry sectors with state-of-the-art technology
                  integration and strategic implementation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Process Automation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Digital Strategy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Legacy Modernization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Cloud Migration
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-amber-50/40 to-yellow-50/40 group overflow-hidden border border-amber-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl border border-amber-200">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 font-bold mb-2">
                      Advanced AI Technologies
                    </CardTitle>
                    <CardDescription className="text-slate-700 font-medium">
                      Intelligent solutions powered by cutting-edge artificial
                      intelligence
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-slate-700 leading-relaxed">
                  Harness the power of AI to create intelligent systems that
                  learn, adapt, and provide unprecedented insights for better
                  decision-making and automated processes that scale seamlessly
                  with your business growth.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Machine Learning
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Predictive Analytics
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Natural Language Processing
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Computer Vision
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/40 group overflow-hidden border border-orange-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl border border-orange-200">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 font-bold mb-2">
                      Government Solutions
                    </CardTitle>
                    <CardDescription className="text-slate-700 font-medium">
                      Specialized solutions for government entities and public
                      sector
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-slate-700 leading-relaxed">
                  Tailored solutions designed specifically for government
                  entities, ensuring compliance, security, and exceptional
                  citizen experiences while maintaining the highest standards of
                  data protection and operational excellence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      E-Government Platforms
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Citizen Portals
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Compliance Systems
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Digital Identity
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-amber-50/40 to-yellow-50/40 group overflow-hidden border border-amber-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-2xl"></div>
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl border border-amber-200">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 font-bold mb-2">
                      Enterprise Solutions
                    </CardTitle>
                    <CardDescription className="text-slate-700 font-medium">
                      Scalable solutions for large-scale enterprise operations
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-slate-700 leading-relaxed">
                  Comprehensive enterprise solutions that scale with your
                  business, providing robust infrastructure, seamless
                  integration capabilities, and enterprise-grade security for
                  mission-critical operations and strategic growth.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Enterprise Architecture
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      System Integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Scalable Infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">
                      Performance Optimization
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 via-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-orange-200 px-6 py-2 font-semibold shadow-sm">
              <Crown className="w-4 h-4 mr-2" />
              Client Excellence Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Trusted by UAEs
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Leading Organizations
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 group border border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-orange-300 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6">
                  Royal Falcon Solutions transformed our entire digital
                  infrastructure. Their AI-powered solutions increased our
                  operational efficiency by 300% while maintaining the highest
                  security standards. Truly exceptional service.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">AH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Ahmed Hassan
                    </div>
                    <div className="text-orange-700 text-sm font-medium">
                      Director of Digital Transformation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/30 group border border-amber-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-amber-300 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6">
                  The level of professionalism and technical expertise
                  demonstrated by Royal Falcon Solutions is unmatched. They
                  delivered beyond our expectations and continue to provide
                  exceptional ongoing support.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Sarah Mohammed
                    </div>
                    <div className="text-amber-700 text-sm font-medium">
                      Chief Technology Officer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 group border border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-orange-300 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6">
                  Working with Royal Falcon Solutions has been transformational
                  for our organization. Their innovative approach to
                  digitalization has positioned us as the industry leader we are
                  today.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">KA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Khalid Al-Rashid
                    </div>
                    <div className="text-orange-700 text-sm font-medium">
                      Government Affairs Director
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-amber-200 px-6 py-2 font-semibold shadow-sm">
              <Award className="w-4 h-4 mr-2" />
              Proven Excellence Record
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Two Decades of
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Digital Leadership
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              With more than 20 years of experience in both local and
              international markets, our expert team is exceptionally equipped
              to address diverse challenges with unparalleled expertise and
              innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <Crown className="h-3 w-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">20+ Years</h3>
              <p className="text-slate-700 leading-relaxed">
                Over two decades of proven excellence in delivering exceptional
                digital solutions across various industries, establishing us as
                the undisputed pioneers in digital transformation and AI
                innovation leadership.
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Global Excellence
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Extensive experience across local UAE markets and international
                projects, bringing world-class standards, cutting-edge
                technologies, and global best practices to deliver solutions
                that consistently exceed expectations.
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Expert Team</h3>
              <p className="text-slate-700 leading-relaxed">
                Our diverse team of world-class experts and industry leaders is
                exceptionally equipped to address the most complex challenges,
                delivering innovative, tailored solutions with precision,
                excellence, and strategic vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900  to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-orange-500/30 to-amber-500/30 text-orange-200 border border-orange-400/50 px-6 py-2 font-semibold shadow-lg">
              <Crown className="w-4 h-4 mr-2" />
              Ready for Transformation?
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Digital Future?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Partner with Royal Falcon Solutions to unlock the full potential
              of AI and digital innovation. Lets build something extraordinary
              together and shape the future of your organization with
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold text-lg border border-orange-300"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-300 text-white hover:bg-orange-500 hover:text-white bg-transparent px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl"
              >
                Schedule Premium Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-orange-50/30 via-amber-50/30 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white border border-orange-200 px-6 py-2 font-semibold shadow-sm">
              <Mail className="w-4 h-4 mr-2" />
              Connect with Our Experts
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Lets Discuss Your
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Next Big Project
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Ready to embark on your digital transformation journey? Our team
              of world-class experts is here to help you achieve your ambitious
              goals with innovative solutions tailored to your unique
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/40 group hover:-translate-y-2 border border-orange-100">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Premium Location
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 p-6">
                <CardDescription className="text-slate-700 leading-relaxed">
                  <strong className="text-orange-800 text-lg">
                    Abu Dhabi, UAE
                  </strong>
                  <br />
                  United Arab Emirates
                  <br />
                  <span className="text-amber-700 font-semibold">
                    Heart of Innovation Excellence
                  </span>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-amber-50/40 to-yellow-50/40 group hover:-translate-y-2 border border-amber-100">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-amber-200">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Direct Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 p-6">
                <CardDescription className="text-slate-700 leading-relaxed">
                  <strong className="text-amber-800 text-lg">
                    info@royalfalconsolutions.ae
                  </strong>
                  <br />
                  contact@royalfalconsolutions.ae
                  <br />
                  <span className="text-orange-700 font-semibold">
                    24/7 Premium Response
                  </span>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/40 group hover:-translate-y-2 border border-orange-100">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-orange-200">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 font-bold">
                  Immediate Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 p-6">
                <CardDescription className="text-slate-700 leading-relaxed">
                  <strong className="text-orange-800 text-lg">
                    +971 (0) 2 XXX XXXX
                  </strong>
                  <br />
                  Emergency: +971 (0) 50 XXX XXXX
                  <br />
                  <span className="text-amber-700 font-semibold">
                    Always Available Excellence
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
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
              <p className="text-orange-100 leading-relaxed">
                Empowering the future with AI and digital innovation. A UAE
                national initiative driving digital transformation across
                government and enterprise sectors with unparalleled excellence.
              </p>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-amber-400" />
                <span className="text-orange-200 text-sm font-medium">
                  Enterprise-grade security certified
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Premium Services</h4>
              <div className="space-y-3 text-orange-100">
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
              <div className="space-y-3 text-orange-100">
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
              <div className="space-y-4 text-orange-100">
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

          <div className="border-t border-orange-800/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-orange-200 text-center md:text-left font-medium">
                &copy; 2025 Royal Falcon Solutions. All rights reserved. UAE
                National Initiative - Premium Digital Excellence.
              </p>
              <div className="flex items-center space-x-6 text-orange-200">
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
