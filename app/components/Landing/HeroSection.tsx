import { TrendingUpIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#f8fafc] opacity-90"></div>
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Streamline Your Inventory Management
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Optimize your supply chain, reduce costs, and increase
                efficiency with our all-in-one inventory management platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/signin"
                className="cursor-default px-8 py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-lg shadow-blue-500/30"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition duration-300">
                Book a Demo
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Free to use</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gray-50 p-4 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-500">
                    Supplify Dashboard
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-800">
                    Inventory Overview
                  </h3>
                  <div className="text-sm text-blue-600 font-medium">
                    Last 30 days
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Total Items</div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-800">
                        1,254
                      </div>
                      <TrendingUpIcon className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Stock Value</div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-800">
                        $45.2k
                      </div>
                      <TrendingUpIcon className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-end p-2">
                    <div className="w-1/6 h-1/3 bg-blue-300 rounded-sm mx-1"></div>
                    <div className="w-1/6 h-1/2 bg-blue-400 rounded-sm mx-1"></div>
                    <div className="w-1/6 h-2/3 bg-blue-500 rounded-sm mx-1"></div>
                    <div className="w-1/6 h-3/4 bg-blue-600 rounded-sm mx-1"></div>
                    <div className="w-1/6 h-1/2 bg-blue-500 rounded-sm mx-1"></div>
                    <div className="w-1/6 h-1/4 bg-blue-400 rounded-sm mx-1"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
