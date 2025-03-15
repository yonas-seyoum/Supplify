import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Linkedin,
  Twitter,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { features, benefits } from "./utils/constants";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">SuppliFy</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="pt-24 pb-8 sm:pt-32 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Streamline Your Inventory Management
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Powerful, intuitive, and complete inventory management solution
              for businesses of all sizes
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/login"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Features Grid */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need to manage your inventory
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="p-2 bg-blue-50 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why choose SuppliFy?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              {/* Placeholder for dashboard preview image */}
              <div className="aspect-video bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-blue-600 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Ready to take control of your inventory?
          </h2>
          <p className="text-lg text-blue-100 mt-4 sm:mt-6 max-w-3xl mx-auto">
            Join thousands of businesses using SuppliFy for effortless inventory
            tracking, real-time analytics, and smart automation.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-4 text-lg font-medium rounded-lg hover:bg-blue-50 transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="/login"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding & Description */}
            <div>
              <span className="text-2xl font-bold text-white">SuppliFy</span>
              <p className="mt-4 text-sm">
                The modern inventory management solution for businesses of all
                sizes.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-white text-lg font-semibold mb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="flex items-center space-x-2 hover:text-white transition"
                  >
                    <ChevronRight size={16} /> <span>Features</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="flex items-center space-x-2 hover:text-white transition"
                  >
                    <ChevronRight size={16} /> <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center space-x-2 hover:text-white transition"
                  >
                    <ChevronRight size={16} /> <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center space-x-2 hover:text-white transition"
                  >
                    <ChevronRight size={16} /> <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Socials */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Get in Touch
              </h3>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <p className="text-sm">support@SuppliFy.com</p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Phone size={16} className="text-gray-400" />
                <p className="text-sm">+1 (800) 123-4567</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-white transition"
                >
                  <Facebook size={18} /> <span>Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-white transition"
                >
                  <Twitter size={18} /> <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-white transition"
                >
                  <Linkedin size={18} /> <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
            © {new Date().getFullYear()} SuppliFy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
