import { Button } from "@/components/ui/button";
import { getDictionary } from "./dictionaries";
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
import { Navbar } from "@/components/custom/Navbar";
import HeroSection from "@/components/custom/home/HeroSection";
import Section2 from "@/components/custom/home/Section2";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-400">
      {/* Navigation */}

      <Navbar dictionary={dictionary} transparent={true} />
      <div className="mt-[50px]"></div>
      {/* Hero Section */}
      <HeroSection />

      <Section2 dictionary={dictionary} />

      {/* Stats Section */}
      <section className="py-16 bg-zinc-900 mt-[100px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-amber-500 mb-1">20+</div>
              <div className="text-white font-semibold">
                Years of Excellence
              </div>
              <div className="text-gray-400 text-sm">
                Pioneering digital transformation
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-amber-500 mb-1">500+</div>
              <div className="text-white font-semibold">
                Successful Projects
              </div>
              <div className="text-gray-400 text-sm">
                Government and enterprise clients
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-amber-500 mb-1">50+</div>
              <div className="text-white font-semibold">
                Expert Professionals
              </div>
              <div className="text-gray-400 text-sm">
                AI and digital innovation specialists
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-amber-500 mb-1">
                99.9%
              </div>
              <div className="text-white font-semibold">
                Client Satisfaction
              </div>
              <div className="text-gray-400 text-sm">
                Exceptional service delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Crown className="w-4 h-4 mr-2" />
              About Royal Falcon Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 leading-tight">
              UAE National Initiative
              <br />
              <span className="text-amber-400">
                Driving Digital Transformation
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Established as a UAE national initiative and supported by local
              entities and agencies, we are Abu Dhabis premier technology
              company, delivering cutting-edge solutions that define the future
              of digital excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Exceptional Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 leading-relaxed">
                  Delivering solutions with unparalleled security standards,
                  ensuring complete protection with military-grade encryption
                  and advanced threat detection systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Advanced AI Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 leading-relaxed">
                  Leveraging cutting-edge artificial intelligence and machine
                  learning to create intelligent solutions that adapt, learn,
                  and evolve with your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Global Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 leading-relaxed">
                  Two decades of proven expertise across local and international
                  markets, bringing world-class standards and global best
                  practices to every project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Local Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 leading-relaxed">
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
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-700 px-6 py-2 font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Services Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 leading-tight">
              Comprehensive Digital
              <br />
              <span className="text-amber-400">Transformation Solutions</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We specialize in industry digitalization and advanced AI
              technologies, providing end-to-end solutions that transform
              businesses and drive unprecedented growth, efficiency, and
              innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group overflow-hidden border border-gray-700">
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-xl border border-gray-800">
                    <Database className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-100 font-bold mb-2">
                      Industry Digitalization
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-medium">
                      Transform traditional processes with cutting-edge digital
                      solutions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive digitalization services that modernize
                  operations, streamline workflows, and enhance efficiency
                  across all industry sectors with state-of-the-art technology
                  integration and strategic implementation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Process Automation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Digital Strategy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Legacy Modernization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Cloud Migration
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group overflow-hidden border border-gray-700">
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-xl border border-gray-800">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-100 font-bold mb-2">
                      Advanced AI Technologies
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-medium">
                      Intelligent solutions powered by cutting-edge artificial
                      intelligence
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-gray-400 leading-relaxed">
                  Harness the power of AI to create intelligent systems that
                  learn, adapt, and provide unprecedented insights for better
                  decision-making and automated processes that scale seamlessly
                  with your business growth.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Machine Learning
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Predictive Analytics
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Natural Language Processing
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Computer Vision
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group overflow-hidden border border-gray-700">
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-xl border border-gray-800">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-100 font-bold mb-2">
                      Government Solutions
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-medium">
                      Specialized solutions for government entities and public
                      sector
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-gray-400 leading-relaxed">
                  Tailored solutions designed specifically for government
                  entities, ensuring compliance, security, and exceptional
                  citizen experiences while maintaining the highest standards of
                  data protection and operational excellence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      E-Government Platforms
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Citizen Portals
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Compliance Systems
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Digital Identity
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group overflow-hidden border border-gray-700">
              <CardHeader className="relative p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-xl border border-gray-800">
                    <Cloud className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-100 font-bold mb-2">
                      Enterprise Solutions
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-medium">
                      Scalable solutions for large-scale enterprise operations
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative p-8">
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive enterprise solutions that scale with your
                  business, providing robust infrastructure, seamless
                  integration capabilities, and enterprise-grade security for
                  mission-critical operations and strategic growth.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Enterprise Architecture
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      System Integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      Scalable Infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
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
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Crown className="w-4 h-4 mr-2" />
              Client Excellence Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 leading-tight">
              Trusted by UAEs
              <br />
              <span className="text-amber-400">Leading Organizations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group border border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gray-700 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Royal Falcon Solutions transformed our entire digital
                  infrastructure. Their AI-powered solutions increased our
                  operational efficiency by 300% while maintaining the highest
                  security standards. Truly exceptional service.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold">AH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">
                      Ahmed Hassan
                    </div>
                    <div className="text-amber-400 text-sm font-medium">
                      Director of Digital Transformation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group border border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-amber-400 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  The level of professionalism and technical expertise
                  demonstrated by Royal Falcon Solutions is unmatched. They
                  delivered beyond our expectations and continue to provide
                  exceptional ongoing support.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">
                      Sarah Mohammed
                    </div>
                    <div className="text-amber-400 text-sm font-medium">
                      Chief Technology Officer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group border border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gray-700 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Working with Royal Falcon Solutions has been transformational
                  for our organization. Their innovative approach to
                  digitalization has positioned us as the industry leader we are
                  today.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold">KA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">
                      Khalid Al-Rashid
                    </div>
                    <div className="text-amber-400 text-sm font-medium">
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
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-700 px-6 py-2 font-semibold shadow-sm">
              <Award className="w-4 h-4 mr-2" />
              Proven Excellence Record
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 leading-tight">
              Two Decades of
              <br />
              <span className="text-amber-400">Digital Leadership</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              With more than 20 years of experience in both local and
              international markets, our expert team is exceptionally equipped
              to address diverse challenges with unparalleled expertise and
              innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Award className="h-10 w-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full border-2 border-black flex items-center justify-center shadow-lg">
                  <Crown className="h-3 w-3 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-100">20+ Years</h3>
              <p className="text-gray-400 leading-relaxed">
                Over two decades of proven excellence in delivering exceptional
                digital solutions across various industries, establishing us as
                the undisputed pioneers in digital transformation and AI
                innovation leadership.
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Globe className="h-10 w-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full border-2 border-black flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-100">
                Global Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Extensive experience across local UAE markets and international
                projects, bringing world-class standards, cutting-edge
                technologies, and global best practices to deliver solutions
                that consistently exceed expectations.
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <Users className="h-10 w-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full border-2 border-black flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-3 w-3 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-100">Expert Team</h3>
              <p className="text-gray-400 leading-relaxed">
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
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-amber-400/30 text-gray-400 border border-amber-400/50 px-6 py-2 font-semibold shadow-lg">
              <Crown className="w-4 h-4 mr-2" />
              Ready for Transformation?
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your
              <br />
              <span className="text-amber-400">Digital Future?</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Partner with Royal Falcon Solutions to unlock the full potential
              of AI and digital innovation. Lets build something extraordinary
              together and shape the future of your organization with
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-black px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold text-lg border border-gray-800"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-700 text-white hover:bg-amber-400 hover:text-black bg-transparent px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl"
              >
                Schedule Premium Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Mail className="w-4 h-4 mr-2" />
              Connect with Our Experts
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 leading-tight">
              Lets Discuss Your
              <br />
              <span className="text-amber-400">Next Big Project</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to embark on your digital transformation journey? Our team
              of world-class experts is here to help you achieve your ambitious
              goals with innovative solutions tailored to your unique
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Premium Location
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 p-6">
                <CardDescription className="text-gray-400 leading-relaxed">
                  <strong className="text-amber-400 text-lg">
                    Abu Dhabi, UAE
                  </strong>
                  <br />
                  United Arab Emirates
                  <br />
                  <span className="text-amber-500 font-semibold">
                    Heart of Innovation Excellence
                  </span>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-gray-800">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Direct Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 p-6">
                <CardDescription className="text-gray-400 leading-relaxed">
                  <strong className="text-amber-400 text-lg">
                    info@royalfalconsolutions.ae
                  </strong>
                  <br />
                  contact@royalfalconsolutions.ae
                  <br />
                  <span className="text-amber-400 font-semibold">
                    24/7 Premium Response
                  </span>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-zinc-800 group hover:-translate-y-2 border border-gray-700">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-gray-800">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-gray-100 font-bold">
                  Immediate Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 p-6">
                <CardDescription className="text-gray-400 leading-relaxed">
                  <strong className="text-amber-400 text-lg">
                    +971 (0) 2 XXX XXXX
                  </strong>
                  <br />
                  Emergency: +971 (0) 50 XXX XXXX
                  <br />
                  <span className="text-amber-400 font-semibold">
                    Always Available Excellence
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
