
import React from 'react';
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="property-card-shadow">
      <CardContent className="p-6">
        <div className="inline-flex items-center justify-center p-3 bg-propweb-50 rounded-md mb-4">
          <img src={icon} alt={title} className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServiceOfferings = () => {
  const services = [
    {
      icon: "/placeholder.svg",
      title: "Property Buying",
      description: "Find your dream property with our extensive listings and expert guidance throughout the buying process."
    },
    {
      icon: "/placeholder.svg",
      title: "Property Selling",
      description: "Get the best value for your property with our marketing strategies and network of potential buyers."
    },
    {
      icon: "/placeholder.svg",
      title: "Rental Services",
      description: "Discover rental properties that meet your needs or list your property for rent with our hassle-free process."
    },
    {
      icon: "/placeholder.svg",
      title: "Property Management",
      description: "Let us handle the day-to-day management of your property while you focus on other priorities."
    }
  ];

  return (
    <section className="py-16 bg-propweb-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <Briefcase className="h-6 w-6 text-propweb-600 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Service Offerings</h2>
          </div>
          <p className="text-gray-600 mt-2">Comprehensive real estate solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
