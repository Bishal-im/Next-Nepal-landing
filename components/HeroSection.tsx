"use client";

import { Play, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Countdown Timer */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full px-6 py-2 shadow-md flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-blue-600">03</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <span className="text-gray-300">:</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-blue-600">14</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <span className="text-gray-300">:</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-blue-600">40</span>
              <span className="text-xs text-gray-500">Min</span>
            </div>
            <span className="text-gray-300">:</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-blue-600">36</span>
              <span className="text-xs text-gray-500">Sec</span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Google Workspace Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">
              Google Workspace
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            किन धेरै <span className="text-blue-600">Businesses</span>{" "}
            efficiently संग
            <br className="hidden md:block" />
            <span className="text-blue-600">daily operations</span> मा struggle
            गर्छन्?
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Research अनुसार efficiency बढाउने र आफ्नो teams संग effectively
            सहकार्य गर्नु चुनौतीपूर्ण छ।
          </p>

          {/* Pricing Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl px-8 py-4 shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-sm font-medium mb-1">Business Starter</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">₹ 20%</span>
                <span className="text-sm opacity-90">छुट</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl px-8 py-4 shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-sm font-medium mb-1">Business Standard</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">₹ 499</span>
                <span className="text-sm opacity-90">/user/month</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            Simplifying Your Business Workflow Through A Completely Google
            <br className="hidden sm:block" />
            Workspace Ecosystem With The Best Discount Plan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free 14 Days of Premiere
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Get A Free Trial Demo
            </button>
          </div>

          {/* Video Placeholder */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-video max-w-4xl mx-auto flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Play
                className="w-8 h-8 text-gray-700 ml-1"
                fill="currentColor"
              />
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Get A Free Trial - No Credit Card Required
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="text-gray-400 font-semibold">
            Trusted by 500+ businesses
          </div>
          {/* Add partner logos here if needed */}
        </div>
      </div>
    </section>
  );
}
