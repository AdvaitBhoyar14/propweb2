
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-propweb-800 to-propweb-600 relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-white opacity-90">
              Join thousands of satisfied customers who found their perfect home with PropWeb
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-propweb-800 hover:bg-gray-100">
              List Your Property
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact an Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
