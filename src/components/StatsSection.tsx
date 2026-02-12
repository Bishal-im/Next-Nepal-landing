import { Users, Star, TrendingUp, Award } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            🎯 <span className="text-blue-600">Google Workspace</span> सँगसँगै
            <br />
            business growth लाई हेर्नुहोस् best तरिकाले
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            "Transform फर्नुहोस् आफ्नो SME र Office कर्मचारीहरुलाई Google
            Workspace को माध्यमबाट
            <br className="hidden sm:block" />
            blazingly fast with effective tools in its arsenal."
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="text-center bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              +499
            </div>
            <div className="text-sm font-medium text-gray-700">SMEs</div>
            <div className="text-xs text-gray-500 mt-1">नेपाल भरि बाट</div>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              4.8/5
            </div>
            <div className="text-sm font-medium text-gray-700">Rating</div>
            <div className="flex justify-center gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              30%
            </div>
            <div className="text-sm font-medium text-gray-700">
              Productivity Boost
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              24/7
            </div>
            <div className="text-sm font-medium text-gray-700">Support</div>
          </div>
        </div>

        {/* Features Box */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                सुविधाहरू
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    Professional Email
                  </p>
                  <p className="text-sm text-gray-600">
                    yourname@yourcompany.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    30GB - 2TB Cloud Storage
                  </p>
                  <p className="text-sm text-gray-600">Secure your data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    99.9% Uptime Guarantee
                  </p>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                अन्य Benefits
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    Real-time Collaboration
                  </p>
                  <p className="text-sm text-gray-600">
                    Work together seamlessly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    Advanced Security
                  </p>
                  <p className="text-sm text-gray-600">
                    Enterprise-grade protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    Mobile & Desktop Apps
                  </p>
                  <p className="text-sm text-gray-600">Work from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
