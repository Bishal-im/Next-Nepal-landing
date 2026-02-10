import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CEO, Tech Innovations",
      content:
        "Nest Nepal transformed our digital presence completely. Their team is professional, creative, and delivers on time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Thapa",
      role: "Founder, StartUp Hub",
      content:
        "Working with Nest Nepal was a game-changer for our business. They understood our vision and brought it to life beautifully.",
      rating: 5,
    },
    {
      name: "Anish Karki",
      role: "Director, Digital Solutions",
      content:
        "Outstanding quality and exceptional service. The team at Nest Nepal goes above and beyond to ensure client satisfaction.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-400" />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
