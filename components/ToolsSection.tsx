export default function ToolsSection() {
  const tools = [
    { name: "Gmail", emoji: "📧", color: "from-red-500 to-pink-500" },
    { name: "Meet", emoji: "📹", color: "from-blue-500 to-indigo-500" },
    { name: "Drive", emoji: "📁", color: "from-yellow-500 to-orange-500" },
    { name: "Calendar", emoji: "📅", color: "from-blue-600 to-cyan-500" },
    { name: "Docs", emoji: "📝", color: "from-blue-400 to-blue-600" },
    { name: "Sheets", emoji: "📊", color: "from-green-500 to-emerald-600" },
    { name: "Slides", emoji: "📊", color: "from-yellow-600 to-orange-600" },
    { name: "Forms", emoji: "📋", color: "from-purple-500 to-pink-500" },
    { name: "Keep", emoji: "💡", color: "from-yellow-400 to-yellow-600" },
    { name: "Sites", emoji: "🌐", color: "from-red-600 to-pink-600" },
    { name: "Chat", emoji: "💬", color: "from-green-600 to-teal-600" },
    { name: "Jamboard", emoji: "🎨", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section
      id="tools"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🛠️ <span className="text-blue-600">Tools हरू</span> Platform मा
            <br />
            Google Workspace
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group cursor-pointer"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <span className="text-2xl">{tool.emoji}</span>
              </div>
              <p className="font-semibold text-gray-900 text-sm">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-4xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Seamless Integration
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              सबै tools एकै platform मा। Real-time sync गर्नुहोस् र efficiently
              काम गर्नुहोस्।
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-4xl">☁️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cloud-Based Solution
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              कहिँ पनि, कुनै पनि device बाट access गर्नुहोस्। Automatic backups
              र updates।
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Team Collaboration
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Real-time मा सँगै काम गर्नुहोस्। Share, comment र collaborate
              गर्नुहोस्।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
