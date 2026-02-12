import { Users, Star, TrendingUp, Award } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎯 <span className="text-blue-600">Google Workspace</span> सँगसँगै
            <br />
            business growth लाई हेर्नुहोस् best तरिकाले
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "Transform फर्नुहोस् आफ्नो SME र Office कर्मचारीहरुलाई Google
            Workspace को माध्यमबाट blazingly fast with effective tools in its
            arsenal."
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">+499</div>
            <div className="text-sm text-gray-600">SMEs</div>
            <div className="text-xs text-gray-500 mt-1">नेपाल भरि बाट</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
            <div className="text-sm text-gray-600">Rating</div>
            <div className="text-xs text-gray-500 mt-1">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">30%</div>
            <div className="text-sm text-gray-600">Productivity Boost</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                सुविधाहरू
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Professional Email
                  </p>
                  <p className="text-sm text-gray-600">
                    yourname@yourcompany.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    30GB - 2TB Cloud Storage
                  </p>
                  <p className="text-sm text-gray-600">Secure your data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    99.9% Uptime Guarantee
                  </p>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                अन्य Benefits
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Real-time Collaboration
                  </p>
                  <p className="text-sm text-gray-600">
                    Work together seamlessly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Advanced Security</p>
                  <p className="text-sm text-gray-600">
                    Enterprise-grade protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
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
