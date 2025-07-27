"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  MessageSquare,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle,
  Calendar,
  Headphones,
  Shield,
  Zap,
  Target,
  Award,
  Users,
  Briefcase,
  ExternalLink,
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

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300 resize-none ${className}`}
    {...props}
  />
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define the custom colors as CSS custom properties
  const customStyles = {
    "--primary-color": "#a86523",
    "--secondary-color": "#e9a319",
    "--muted-color": "#fad59a",
    "--accent-color": "#fcefcb",
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Royal Falcon Solutions",
        "Business Bay, Dubai",
        "United Arab Emirates",
      ],
      link: null,
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+971 4 XXX XXXX", "+971 50 XXX XXXX"],
      link: "tel:+97144XXXXXX",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@royalfalcon.ae", "support@royalfalcon.ae"],
      link: "mailto:info@royalfalcon.ae",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 9:00 AM - 6:00 PM",
        "Friday - Saturday: Closed",
      ],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "#0077B5" },
    { icon: Twitter, name: "Twitter", url: "#", color: "#1DA1F2" },
    { icon: Instagram, name: "Instagram", url: "#", color: "#E4405F" },
    { icon: Facebook, name: "Facebook", url: "#", color: "#1877F2" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Smart City Solutions",
      description: "Urban intelligence and infrastructure",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "AI-powered surveillance and protection",
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Enterprise modernization services",
    },
    {
      icon: Target,
      title: "Consulting Services",
      description: "Strategic technology advisory",
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Contact
              <span style={{ color: "var(--secondary-color)" }}> Our Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Let's discuss your
              project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="space-y-6 mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-400">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your project or requirements..."
                      rows="6"
                      required
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full text-black px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                    style={{ backgroundColor: "var(--secondary-color)" }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "var(--primary-color)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor =
                        "var(--secondary-color)")
                    }
                  >
                    Send Message
                    <Send className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Card className="bg-green-900/20 border border-green-700 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Reach out to us through any of the following channels. We're
                  here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card
                      key={index}
                      className="bg-zinc-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: "var(--secondary-color)",
                            }}
                          >
                            <IconComponent className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              {item.title}
                            </h3>
                            {item.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-gray-400 mb-1"
                              >
                                {item.link ? (
                                  <a
                                    href={item.link}
                                    className="hover:text-yellow-500 transition-colors"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <Card className="bg-black border border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-all duration-300 hover:scale-110"
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              social.color)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#27272a")
                          }
                        >
                          <SocialIcon className="h-5 w-5 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
              <Briefcase className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              How Can We
              <span style={{ color: "var(--secondary-color)" }}>
                {" "}
                Help You?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
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
                      <ServiceIcon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
