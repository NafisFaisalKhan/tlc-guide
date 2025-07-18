"use client";
import React, { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import {
  ChevronDown,
  Car,
  Clock,
  DollarSign,
  Users,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  languages,
  quickFacts,
  costBreakdown,
  applicationSteps,
  faqData,
} from "../lib/data";
import Head from "next/head";

const iconMap = {
  DollarSign,
  Clock,
  Car,
  Users,
};

const TLCLicenseApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="cffda0ed-4a83-40bc-96fb-7c32600778cc"
        strategy="afterInteractive"
        defer
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 font-montserrat">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqStructuredData),
            }}
          />
        </Head>
        {/* Header */}
        <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/tlc_guide_logo.png"
                  width={500}
                  height={500}
                  alt="TLC Guide Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold text-white">TLC Guide</span>
              </div>
              {/* Main navigation menu */}
              <nav
                className="hidden lg:flex items-center space-x-1"
                aria-label="Page sections"
              >
                <a
                  href="#tlc-license-facts"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Quick Facts
                </a>
                <a
                  href="#tlc-application-process"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Process
                </a>
                <a
                  href="#tlc-license-cost"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Cost
                </a>
                <a
                  href="#tlc-training-courses"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Training
                </a>
                <a
                  href="#tlc-license-faq"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  FAQ
                </a>
                <a
                  href="#tlc-contact"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Contact
                </a>
              </nav>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className="text-gray-300 hover:text-yellow-400 focus:outline-none focus:text-yellow-400 p-2"
                  aria-label="Toggle menu"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 shadow-lg z-50">
                  <nav className="px-4 py-2 space-y-1">
                    <a
                      href="#tlc-license-facts"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Quick Facts
                    </a>
                    <a
                      href="#tlc-application-process"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Application Process
                    </a>
                    <a
                      href="#tlc-license-cost"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cost Breakdown
                    </a>
                    <a
                      href="#tlc-training-courses"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Training & Courses
                    </a>
                    <a
                      href="#tlc-license-faq"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAQ
                    </a>
                    <a
                      href="#tlc-contact"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </a>

                    {/* Mobile language selector */}
                    <div className="px-3 py-2 border-t border-slate-700 mt-2 pt-2">
                      <span className="text-sm text-gray-400 block mb-2">
                        Language:
                      </span>
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-slate-700 text-white"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.name}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </nav>
                </div>
              )}

              <div className="hidden items-center space-x-4 sm:block">
                <span className="text-sm text-gray-300">Language:</span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="border border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-slate-700 text-white"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.name}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-24">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0">
            {/* Geometric shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Floating geometric elements */}
            <div className="absolute top-32 right-1/4 w-4 h-4 bg-yellow-400 rotate-45 opacity-60 animate-pulse"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-16 bg-gradient-to-b from-yellow-400 to-transparent opacity-30"></div>
            <div className="absolute bottom-1/3 left-1/5 w-16 h-2 bg-gradient-to-r from-yellow-400 to-transparent opacity-30"></div>

            {/* Abstract lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <path
                d="M-100,300 Q300,100 600,250 T1300,200"
                stroke="url(#heroGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M-50,400 Q400,200 800,350 T1350,300"
                stroke="url(#heroGradient2)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.2"
              />
              <defs>
                <linearGradient
                  id="heroGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f1c40f" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f39c12" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f1c40f" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="heroGradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f1c40f" stopOpacity="0" />
                  <stop offset="50%" stopColor="#e67e22" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f1c40f" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Get Your NYC TLC License
                </span>
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mt-2">
                  Fast & Easy
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Complete guide for taxi, Uber, Lyft, and for-hire vehicle
                drivers in New York City
              </p>
              <div className="relative inline-block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 font-semibold text-lg px-10 py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25"
                  onClick={() =>
                    window.open(
                      "https://www.nyc.gov/site/tlc/drivers/get-a-tlc-drivers-license.page",
                      "_blank"
                    )
                  }
                >
                  Start Your Application →
                </Button>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-xl opacity-30 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Bottom wave transition */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-20"
            >
              <path
                d="M0,60 C150,120 300,0 450,60 C600,120 750,0 900,60 C1050,120 1200,0 1200,60 L1200,120 L0,120 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Quick Facts */}
        <section id="tlc-license-facts" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              TLC License Quick Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 border-slate-200"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      {React.createElement(iconMap[fact.icon], {
                        className: "h-8 w-8 text-yellow-600",
                      })}
                    </div>
                    <CardTitle className="text-lg text-slate-700">
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600 mb-2">
                      {fact.value}
                    </div>
                    <p className="text-sm text-slate-600">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section id="tlc-application-process" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Application Process
            </h2>
            <div className="space-y-6">
              {applicationSteps.map((step, index) => (
                <Card
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 md:mb-0 md:mr-6">
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section id="tlc-license-cost" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Cost Breakdown
            </h2>
            <Card className="max-w-4xl mx-auto border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Total Investment: $745-$880
                </CardTitle>
                <CardDescription className="text-slate-600">
                  All fees required to obtain your TLC license (costs may vary
                  by provider)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {costBreakdown.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                    >
                      <span className="text-slate-700">{item.item}</span>
                      <Badge
                        variant="secondary"
                        className="font-mono bg-slate-100 text-slate-700"
                      >
                        {item.cost}
                      </Badge>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-3 bg-yellow-50 px-4 rounded-lg mt-4 border border-yellow-200">
                    <span className="font-semibold text-lg text-slate-800">
                      Total Cost
                    </span>
                    <Badge className="bg-yellow-500 text-slate-900 font-mono text-lg">
                      $745.25 - $875.25
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="tlc-license-faq" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Training & Courses Section */}
        <section
          id="tlc-training-courses"
          className="py-16 bg-gradient-to-r from-yellow-50 to-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
              TLC License Training & Courses
            </h2>
            <p className="text-center text-lg text-slate-600 mb-12">
              Required education to get your TLC license
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600">
                    24-Hour Driver Education Course
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Required for all new TLC license applicants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• TLC rules and regulations</li>
                    <li>• Customer service training</li>
                    <li>• NYC geography and navigation</li>
                    <li>• Safety procedures and protocols</li>
                    <li>• Available online or in-person</li>
                    <li>• Must pass final exam with 70% score</li>
                  </ul>
                  <div className="mt-4">
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Cost: $245-$250
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-600">
                    Wheelchair Accessibility Training
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Learn to assist passengers with disabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Proper wheelchair securement</li>
                    <li>• Passenger assistance techniques</li>
                    <li>• ADA compliance requirements</li>
                    <li>• Communication with disabled passengers</li>
                    <li>• Equipment operation and safety</li>
                  </ul>
                  <div className="mt-4">
                    <Badge className="bg-slate-100 text-slate-800">
                      Cost: $50-$125
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* New Defensive Driving Course card */}
              <Card className="p-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600">
                    Defensive Driving Course (DDC)
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    6-hour safety course required for all applicants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Traffic safety laws and regulations</li>
                    <li>• Accident prevention techniques</li>
                    <li>• Hazard recognition and response</li>
                    <li>• Weather and road condition awareness</li>
                    <li>• Available online or in-person</li>
                    <li>• Certificate valid for 3 years</li>
                  </ul>
                  <div className="mt-4">
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Cost: $25-$75
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Card className="p-6 bg-yellow-50 border-yellow-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Course Languages Available
                </h3>
                <p className="text-slate-700">
                  Courses are offered primarily in English and Spanish, but some
                  schools offer classes in American Sign Language, Bengali,
                  Mandarin Chinese, Russian, and Urdu.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border-slate-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-medium text-slate-800">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Additional Questions Section */}
        <section id="more-questions" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              More Common Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  What can I do with a TLC license?
                </h3>
                <p className="text-slate-600 text-sm">
                  With a TLC license, you can drive for taxi companies,
                  ride-sharing services like Uber and Lyft, livery car services,
                  black car services, and other for-hire vehicle operations in
                  NYC.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  What are TLC license plates?
                </h3>
                <p className="text-slate-600 text-sm">
                  TLC license plates are special commercial license plates
                  issued by the NYC Taxi and Limousine Commission for vehicles
                  used in for-hire transportation services like taxis, Uber,
                  Lyft, and livery cars.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  How do I check my TLC license status?
                </h3>
                <p className="text-slate-600 text-sm">
                  Check your TLC license status by visiting the NYC TLC website,
                  logging into your TLC online account, or calling TLC customer
                  service at 311. You can also visit a TLC office in person.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  Can I renew my TLC license online?
                </h3>
                <p className="text-slate-600 text-sm">
                  Yes, you can renew your TLC license online through the NYC TLC
                  website. You&#39;ll need to log into your TLC account,
                  complete the renewal application, pay fees, and submit any
                  required documents electronically.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  How do I replace my lost TLC license?
                </h3>
                <p className="text-slate-600 text-sm">
                  To replace a lost TLC license, visit the TLC website to
                  request a duplicate license, pay the replacement fee (usually
                  around $25), and provide identification. You can also visit a
                  TLC office in person.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  Where can I find TLC license classes near me?
                </h3>
                <p className="text-slate-600 text-sm">
                  TLC license classes are offered at various approved driving
                  schools throughout NYC. You can also take the required 24-hour
                  course online. Check the TLC website for a list of approved
                  education providers.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  Can you get a TLC license with a DUI?
                </h3>
                <p className="text-slate-600 text-sm">
                  Getting a TLC license with a DUI is challenging and depends on
                  factors like when the DUI occurred, severity, and whether
                  there were multiple offenses. TLC evaluates each case
                  individually during the background check process.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  How long does TLC license renewal take?
                </h3>
                <p className="text-slate-600 text-sm">
                  TLC license renewal typically takes 7-14 business days if done
                  online, or can be completed same-day if you visit a TLC office
                  in person with all required documents and no outstanding
                  issues.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">
                  What is a TLC vehicle license?
                </h3>
                <p className="text-slate-600 text-sm">
                  A TLC vehicle license is a permit that authorizes a specific
                  vehicle to be used for commercial for-hire transportation in
                  NYC. It&#39;s separate from the driver&#39;s TLC license and
                  must be obtained for each vehicle.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Links */}
        <section id="important-links" className="py-16 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Important Links & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white text-slate-800 border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5" />
                    <span>Official TLC Website</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    NYC Taxi & Limousine Commission official site
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                    onClick={() =>
                      window.open(
                        "https://www.nyc.gov/site/tlc/index.page",
                        "_blank"
                      )
                    }
                  >
                    Visit Site
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-slate-800 border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5" />
                    <span>LARS Application System</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    License Applications, Renewals & Summonses
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                    onClick={() =>
                      window.open("https://apps.nyc.gov/lars/", "_blank")
                    }
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-slate-800 border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5" />
                    <span>IdentoGO Fingerprinting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Schedule fingerprinting appointment
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                    onClick={() =>
                      window.open(
                        "https://uenroll.identogo.com/workflows/15425Y/appointment/bio",
                        "_blank"
                      )
                    }
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="tlc-contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Need Help?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our team at TLC Guide is here to help you navigate the TLC license
              process
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-lg text-slate-700">(555) TLC-GUIDE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-lg text-slate-700">
                  help@tlcguide.org
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Image
                    src="/tlc_guide_logo.png"
                    width={500}
                    height={500}
                    alt="TLC Guide Logo"
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <p className="text-slate-400">
                  Your trusted guide for getting and maintaining your NYC TLC
                  license.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-yellow-400">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Application Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Cost Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Renewal Process
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-yellow-400">
                  Resources
                </h3>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Study Materials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Practice Tests
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Document Checklist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-yellow-400">Contact</h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(555) TLC-GUIDE</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>help@tlcguide.org</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>New York City, NY</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
              <p>
                &copy; 2025 TLC Guide. All rights reserved. Not affiliated with
                NYC TLC.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default TLCLicenseApp;
