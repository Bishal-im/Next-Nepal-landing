export default function ToolsSection() {
  const tools = [
    { name: "Gmail", icon: "📧", color: "bg-red-500" },
    { name: "Meet", icon: "📹", color: "bg-blue-500" },
    { name: "Drive", icon: "📁", color: "bg-yellow-500" },
    { name: "Calendar", icon: "📅", color: "bg-blue-600" },
    { name: "Docs", icon: "📝", color: "bg-blue-400" },
    { name: "Sheets", icon: "📊", color: "bg-green-500" },
    { name: "Slides", icon: "📊", color: "bg-yellow-600" },
    { name: "Forms", icon: "📋", color: "bg-purple-500" },
    { name: "Keep", icon: "💡", color: "bg-yellow-400" },
    { name: "Sites", icon: "🌐", color: "bg-red-600" },
    { name: "Chat", icon: "💬", color: "bg-green-600" },
    { name: "Jamboard", icon: "🎨", color: "bg-orange-500" },
  ];

  return (
    <section
      id="tools"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🛠️ <span className="text-blue-600">Tools हरू</span> Platform मा
            <br />
            Google Workspace
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div
                className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                <span className="text-2xl">{tool.icon}</span>
              </div>
              <p className="font-semibold text-gray-900 text-sm">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              सबै tools एकै platform मा। Real-time sync गर्नुहोस् र efficiently
              काम गर्नुहोस्।
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">☁️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cloud-Based Solution
            </h3>
            <p className="text-gray-600">
              कहिँ पनि, कुनै पनि device बाट access गर्नुहोस्। Automatic backups
              र updates।
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Team Collaboration
            </h3>
            <p className="text-gray-600">
              Real-time मा सँगै काम गर्नुहोस्। Share, comment र collaborate
              गर्नुहोस्।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
