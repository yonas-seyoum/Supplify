import React from "react";
import { benefits } from "@/app/utils/constants/Landing";
import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Supplify
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses that trust Supplify to optimize their
              supply chain operations and drive growth.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-1">{benefit.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/auth/signup"
                className="px-6 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-lg shadow-blue-500/30"
              >
                Discover Supplify
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900">
                      Customer Success Story
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    Case Study
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "Since implementing Supplify, we've reduced inventory costs by
                  32% and improved order fulfillment by 28%. The real-time
                  visibility across our supply chain has been a game-changer for
                  our operations."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-600">
                      Operations Director, Acme Inc.
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        32%
                      </div>
                      <div className="text-sm text-gray-600">
                        Cost Reduction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        28%
                      </div>
                      <div className="text-sm text-gray-600">
                        Fulfillment Improvement
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">
                        Supply Chain Visibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
