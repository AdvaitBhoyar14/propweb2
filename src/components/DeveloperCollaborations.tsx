
import React from 'react';
import { Code } from "lucide-react";

const DeveloperCollaborations = () => {
  const partners = [
    { name: "BuildEx", logo: "/placeholder.svg" },
    { name: "TechHomes", logo: "/placeholder.svg" },
    { name: "UrbanDwellers", logo: "/placeholder.svg" },
    { name: "SmartSpace", logo: "/placeholder.svg" },
    { name: "GreenBuild", logo: "/placeholder.svg" },
    { name: "FutureHabitat", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-propweb-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <Code className="h-6 w-6 text-propweb-300 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold">Our Developer Collaborations</h2>
          </div>
          <p className="text-propweb-100 mt-2">Partnering with leading developers to create exceptional living spaces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-propweb-700/50 rounded-lg">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-4">
                <img src={partner.logo} alt={partner.name} className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-medium">{partner.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-propweb-100 mb-6 max-w-2xl mx-auto">
            We collaborate with the most innovative property developers to bring cutting-edge designs and sustainable living solutions to our clients.
          </p>
          <button className="bg-white text-propweb-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            View All Partners
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCollaborations;
