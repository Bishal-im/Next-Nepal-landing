import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl">📧</span>
                <span className="text-4xl">📁</span>
                <span className="text-4xl">📹</span>
                <span className="text-4xl">📅</span>
                <span className="text-4xl">📝</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prefer to talk to sales directly?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                हाम्रो expert team सँग कुराकानी गर्नुहोस् र आफ्नो business को
                लागि
                <br className="hidden md:block" />
                सबैभन्दा राम्रो plan छान्नुहोस्। अभी call गर्नुहोस्!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Talk to Sales Expert
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[400px] hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-end justify-center p-8">
                <div className="w-64 h-64 bg-white/20 rounded-full absolute top-1/4 right-1/4"></div>
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-8xl">👩‍💼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
