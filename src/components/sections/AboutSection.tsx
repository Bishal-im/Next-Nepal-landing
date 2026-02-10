import React from "react";
import { Container } from "@/components/common/Container";
import { Card } from "@/components/common/Card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver innovative digital solutions that empower businesses to thrive in the modern era.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of talented professionals passionate about creating exceptional experiences.",
    },
    {
      icon: Award,
      title: "Our Quality",
      description:
        "We maintain the highest standards in every project, ensuring excellence in delivery.",
    },
    {
      icon: TrendingUp,
      title: "Our Growth",
      description:
        "Continuously evolving and adapting to meet the changing needs of our clients.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Nest Nepal
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading digital solutions company based in Nepal, dedicated
            to transforming ideas into reality through cutting-edge technology
            and creative innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} hover>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
