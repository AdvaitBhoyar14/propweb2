
import React from 'react';
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementCardProps {
  icon: string;
  count: string;
  title: string;
}

const AchievementCard = ({ icon, count, title }: AchievementCardProps) => {
  return (
    <Card className="property-card-shadow bg-white">
      <CardContent className="p-6 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-propweb-50 rounded-full mb-4">
          <img src={icon} alt={title} className="h-6 w-6" />
        </div>
        <h3 className="text-3xl font-bold text-propweb-800 mb-2">{count}</h3>
        <p className="text-gray-600">{title}</p>
      </CardContent>
    </Card>
  );
};

const Achievements = () => {
  const achievements = [
    {
      icon: "/placeholder.svg",
      count: "15,000+",
      title: "Properties Sold"
    },
    {
      icon: "/placeholder.svg",
      count: "9,500+",
      title: "Happy Clients"
    },
    {
      icon: "/placeholder.svg",
      count: "12+",
      title: "Industry Awards"
    },
    {
      icon: "/placeholder.svg",
      count: "20+",
      title: "Cities Covered"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-propweb-50 to-propweb-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <Award className="h-6 w-6 text-propweb-600 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Achievements</h2>
          </div>
          <p className="text-gray-600 mt-2">Milestones we've reached in our journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
