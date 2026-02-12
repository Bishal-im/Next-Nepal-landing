export default function BrandsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brands using Google Workspace to
            <br />
            <span className="text-blue-600">succeed online, किन नगर्ने?</span>
          </h2>
          <p className="text-lg text-gray-600">
            हजारौं businesses ले Google Workspace use गरिरहेका छन्।
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              "Your 98% of Workspace
              <br className="hidden md:block" />
              management issues are
              <br className="hidden md:block" />
              tackled"
            </blockquote>
            <div className="space-y-3">
              <p className="text-gray-600">
                ✓ सबै Business tools एकै ठाउँमा integrated
              </p>
              <p className="text-gray-600">
                ✓ AI powered productivity features
              </p>
              <p className="text-gray-600">✓ 24/7 support र training</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular FAQs:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <p className="text-sm text-gray-600">
                    Can I use my existing domain with Google Workspace?
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <p className="text-sm text-gray-600">
                    How secure is my data?
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <p className="text-sm text-gray-600">
                    What happens to my data if I cancel?
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <p className="text-sm text-gray-600">
                    Can I migrate from another platform?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
