import { Shield, Users, Briefcase } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solutions for businesses,
            <br />
            <span className="text-blue-600">सबै साइज को लागि</span>
          </h2>
          <p className="text-lg text-gray-600">
            We cater for SMC, Startup, Mid-Range and Enterprise businesses like
            yours as well.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* For Startups */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              For Startups
            </h3>
            <p className="text-gray-600 mb-6">
              Start फर्नुहोस् आफ्नो business journey लाई professional tools संग।
              Scale गर्न सजिलो र affordable।
            </p>
            <div className="aspect-video bg-white rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>30GB storage per user</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Professional email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Video conferencing (100 participants)</span>
              </li>
            </ul>
          </div>

          {/* For Growing Teams */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border-2 border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full mb-2">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              For Growing Teams
            </h3>
            <p className="text-gray-600 mb-6">
              Scale गर्नुहोस् आफ्नो operations लाई। Enhanced security र
              collaboration features पाउनुहोस्।
            </p>
            <div className="aspect-video bg-white rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-4xl">📈</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>2TB storage per user</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced security controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Video conferencing (150 participants)</span>
              </li>
            </ul>
          </div>

          {/* For Enterprises */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              For Enterprises
            </h3>
            <p className="text-gray-600 mb-6">
              Enterprise-grade security र compliance। Unlimited storage र
              advanced admin controls।
            </p>
            <div className="aspect-video bg-white rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-4xl">🏢</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>5TB+ storage per user</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced admin controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Video conferencing (500 participants)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
