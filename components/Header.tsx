"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Nest Nepal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#tools"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Tools
            </a>
            <a
              href="#solutions"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+9779851234567"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Talk to Expert</span>
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a
              href="#tools"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </a>
            <a
              href="#solutions"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <a
                href="tel:+9779851234567"
                className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Talk to Expert</span>
              </a>
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
