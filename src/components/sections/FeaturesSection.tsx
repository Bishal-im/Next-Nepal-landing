import React from "react";
import { Container } from "@/components/common/Container";
import { Check, Zap, Lock, BarChart, Globe, RefreshCw } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance for quick load times and smooth interactions.",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data.",
    },
    {
      icon: BarChart,
      title: "Analytics Driven",
      description: "Data-driven insights to help you make informed decisions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Solutions designed to work seamlessly across the globe.",
    },
    {
      icon: RefreshCw,
      title: "Always Updated",
      description: "Regular updates and improvements to keep you ahead.",
    },
    {
      icon: Check,
      title: "Quality Assured",
      description: "Rigorous testing ensures the highest quality standards.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Nest Nepal?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical excellence with creative innovation to
              deliver solutions that exceed expectations. Our commitment to
              quality and customer satisfaction sets us apart.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">
                    Skilled professionals with years of experience
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Proven Track Record
                  </h4>
                  <p className="text-gray-600">
                    Successfully delivered 500+ projects
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Customer First
                  </h4>
                  <p className="text-gray-600">
                    Your satisfaction is our top priority
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
