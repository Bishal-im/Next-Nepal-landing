"use client";

import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-4 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Countdown Timer */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full px-6 py-2.5 shadow-lg border border-gray-100 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-blue-600">03</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <span className="text-gray-300">:</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-blue-600">14</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <span className="text-gray-300">:</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-blue-600">40</span>
              <span className="text-xs text-gray-500">Min</span>
            </div>
            <span className="text-gray-300">:</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-blue-600">36</span>
              <span className="text-xs text-gray-500">Sec</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          {/* Google Workspace Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-700 font-medium">
              Google Workspace
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight px-4">
            किन धेरै <span className="text-blue-600">Businesses</span>{" "}
            efficiently संग
            <br />
            <span className="text-blue-600">daily operations</span> मा struggle
            गर्छन्?
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto px-4">
            Research अनुसार efficiency बढाउने र आफ्नो teams संग effectively
            सहकार्य गर्नु चुनौतीपूर्ण छ।
          </p>

          {/* Pricing Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 px-4">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl px-8 py-3 shadow-xl transform hover:scale-105 transition-transform w-full sm:w-auto">
              <div className="text-xs font-medium mb-0.5 opacity-90">
                Business Starter
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl font-bold">₹ 20%</span>
                <span className="text-sm opacity-90">छुट</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl px-8 py-3 shadow-xl transform hover:scale-105 transition-transform w-full sm:w-auto">
              <div className="text-xs font-medium mb-0.5 opacity-90">
                Business Standard
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl font-bold">₹ 499</span>
                <span className="text-sm opacity-90">/user/month</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-7 px-4">
            Simplifying Your Business Workflow Through A Completely Google
            <br className="hidden sm:block" />
            Workspace Ecosystem With The Best Discount Plan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 px-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm">
              Get Free 14 Days of Premiere
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
              <Play className="w-4 h-4" />
              Get A Free Trial Demo
            </button>
          </div>

          {/* Video Placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-video max-w-4xl mx-auto flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Play
                className="w-7 h-7 text-gray-700 ml-1"
                fill="currentColor"
              />
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Get A Free Trial - No Credit Card Required
          </p>

          {/* Trust Badge */}
          <p className="text-sm text-gray-400 mt-4">
            Trusted by 500+ businesses
          </p>
        </div>
      </div>
    </section>
  );
}
