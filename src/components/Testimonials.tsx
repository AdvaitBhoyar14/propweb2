
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ quote, name, role, avatar }: TestimonialProps) => {
  return (
    <Card className="h-full property-card-shadow">
      <CardContent className="p-6">
        <div className="mb-4">
          {/* Quote Icon */}
          <svg className="h-8 w-8 text-propweb-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.849h4v10h-10z" />
          </svg>
          <p className="text-gray-700 text-lg">{quote}</p>
        </div>
        <div className="flex items-center">
          <img src={avatar} alt={name} className="h-12 w-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "PropWeb helped me find my dream home in less than a month. Their platform is intuitive and the agents were incredibly helpful throughout the process.",
      name: "Sarah Johnson",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As a real estate investor, I've used many platforms, but PropWeb stands out with its detailed analytics and responsive support team.",
      name: "Michael Chen",
      role: "Property Investor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The virtual tours feature saved me so much time. I was able to shortlist properties from another city before flying in for final viewings.",
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  return (
    <section className="py-16 bg-propweb-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">Testimonials from satisfied customers who found their perfect property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
