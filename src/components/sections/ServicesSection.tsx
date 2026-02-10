import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  Code,
  Smartphone,
  Palette,
  Headphones,
  Cloud,
  Shield,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices for optimal performance.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that engage users and enhance brand identity.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies for modern applications.",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "Comprehensive security solutions to protect your data and applications.",
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description:
        "24/7 support and ongoing maintenance to keep your systems running smoothly.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your
            business succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} hover>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
