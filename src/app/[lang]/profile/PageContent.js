"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Globe,
  Target,
  Eye,
  Heart,
  Building,
  Calendar,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Star,
  Crown,
  Zap,
  Sparkles,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Coffee,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeline = [
  {
    title: "Customer-centric Solutions",
    img: "/images/profile/timeline1.jpg",
  },
  {
    title: "Cohesive Delivery",
    img: "/images/profile/timeline2.png",
  },
  {
    title: "Professional Services",
    img: "/images/profile/timeline3.png",
  },
  {
    title: "AI-driven Innovation",
    img: "/images/profile/timeline4.png",
  },
  {
    title: "Plentiful Partner Resources",
    img: "/images/profile/timeline5.png",
  },
];

const leadership = [
  {
    name: "Ahmed Al-Mansouri",
    position: "Chief Executive Officer",
    experience: "20+ Years",
    expertise: "Strategic Leadership & Digital Transformation",
    initials: "AM",
  },
  {
    name: "Sarah Al-Zahra",
    position: "Chief Technology Officer",
    experience: "18+ Years",
    expertise: "AI Technologies & System Architecture",
    initials: "SZ",
  },
  {
    name: "Mohammed Al-Rashid",
    position: "Chief Operating Officer",
    experience: "15+ Years",
    expertise: "Operations Excellence & Client Relations",
    initials: "MR",
  },
  {
    name: "Fatima Al-Qasimi",
    position: "Chief Innovation Officer",
    experience: "12+ Years",
    expertise: "Innovation Strategy & Research Development",
    initials: "FQ",
  },
];

const certifications = [
  { name: "ISO 27001:2013", category: "Information Security", icon: Shield },
  { name: "ISO 9001:2015", category: "Quality Management", icon: Award },
  {
    name: "UAE Government Excellence",
    category: "Service Excellence",
    icon: Crown,
  },
  { name: "CMMI Level 5", category: "Process Maturity", icon: TrendingUp },
  { name: "AWS Advanced Partner", category: "Cloud Excellence", icon: Globe },
  {
    name: "Microsoft Gold Partner",
    category: "Technology Partnership",
    icon: CheckCircle,
  },
];

const PageContent = ({ dictionary }) => {
  const fadeInUp = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-400">
      {/* Hero Section */}
      <motion.section
        initial="hide"
        animate="show"
        variants={fadeInUp}
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-amber-400 text-black border border-gray-700 px-6 py-2 font-semibold shadow-sm">
              <Building className="w-4 h-4 mr-2" />
              Company Profile
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Royal Falcon Solutions
              <br />
              <span className="text-amber-400">
                Excellence in Digital Innovation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A UAE national initiative driving digital transformation with 20+
              years of proven excellence, 500+ successful projects, and
              unwavering commitment to innovation and security.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-400/30 text-amber-400 border border-amber-400/50 px-4 py-2 font-semibold">
                <Crown className="w-4 h-4 mr-2" />
                About Royal Falcon Solutions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Pioneering the Future of
                <span className="text-amber-400"> Digital Excellence</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Royal Falcon Solutions stands as Abu Dhabi's premier technology
                company, established as a UAE national initiative and supported
                by local entities and agencies. With over two decades of proven
                excellence, we specialize in industry digitalization and
                advanced AI technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our commitment extends beyond mere service delivery – we forge
                strategic partnerships that drive sustainable growth,
                operational efficiency, and technological advancement across
                government and enterprise sectors throughout the UAE and beyond.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    2003
                  </div>
                  <div className="text-gray-300 font-medium">Established</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    50+
                  </div>
                  <div className="text-gray-300 font-medium">Experts</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    500+
                  </div>
                  <div className="text-gray-300 font-medium">Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    GCC
                  </div>
                  <div className="text-gray-300 font-medium">Coverage</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Target className="w-4 h-4 mr-2" />
              Our Foundation
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Mission & Vision
            </h2>
          </div>

          <div className=" ">
            <img
              src="/images/profile/vision.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Organization Structure */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Target className="w-4 h-4 mr-2" />
              Our Framework
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight capitalize">
              ORGANIZATION STRUCTURE
            </h2>
          </div>

          <div className=" ">
            <img
              src="/images/profile/organization-structure.PNG"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Company Timeline */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400/30 text-amber-400 border border-amber-400/50 px-6 py-2 font-semibold">
              <Clock className="w-4 h-4 mr-2" />
              Our Strength
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              CORE COMPENTENCE
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-400"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-amber-400 mb-2">
                          {item.title}
                        </div>
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-[300px] object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-zinc-900 z-10 flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Users className="w-4 h-4 mr-2" />
              Leadership Excellence
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Meet Our
              <span className="text-amber-400">Executive Team</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our leadership team combines decades of experience with visionary
              thinking to drive innovation and excellence across all aspects of
              our organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-xl">
                      {leader.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-amber-400 font-semibold mb-2">
                    {leader.position}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-amber-400" />
                      <span className="text-gray-400 text-sm">
                        {leader.experience}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {leader.expertise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications & Awards */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400/30 text-amber-400 border border-amber-400/50 px-6 py-2 font-semibold">
              <Award className="w-4 h-4 mr-2" />
              Excellence Recognition
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Certifications &
              <span className="text-amber-400">Industry Recognition</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-amber-400 font-medium">
                      {cert.category}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Company Culture */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400 text-black border border-gray-800 px-6 py-2 font-semibold shadow-sm">
              <Coffee className="w-4 h-4 mr-2" />
              Work Environment
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Culture of Excellence &
              <span className="text-amber-400">Innovation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Sparkles className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Innovation First</h3>
              <p className="text-gray-400">
                Encouraging creative thinking and breakthrough solutions
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Collaborative</h3>
              <p className="text-gray-400">
                Teamwork and knowledge sharing across all levels
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Growth Focused</h3>
              <p className="text-gray-400">
                Continuous learning and professional development
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">People Centric</h3>
              <p className="text-gray-400">
                Prioritizing employee wellbeing and work-life balance
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="py-20 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-400/30 text-amber-400 border border-amber-400/50 px-6 py-2 font-semibold">
              <MapPin className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Connect with
              <span className="text-amber-400">Our Team</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Headquarters
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  <strong className="text-amber-400">Abu Dhabi, UAE</strong>
                  <br />
                  United Arab Emirates
                  <br />
                  <span className="text-amber-400">
                    Heart of Innovation Excellence
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                <p className="text-gray-400 leading-relaxed">
                  <strong className="text-amber-400">
                    info@royalfalconsolutions.ae
                  </strong>
                  <br />
                  contact@royalfalconsolutions.ae
                  <br />
                  <span className="text-amber-400">24/7 Premium Response</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                <p className="text-gray-400 leading-relaxed">
                  <strong className="text-amber-400">
                    +971 (0) 2 XXX XXXX
                  </strong>
                  <br />
                  Emergency: +971 (0) 50 XXX XXXX
                  <br />
                  <span className="text-amber-400">
                    Always Available Excellence
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PageContent;
