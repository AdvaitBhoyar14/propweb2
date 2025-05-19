
import React from 'react';
import { Users } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <Users className="h-6 w-6 text-propweb-600 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Us</h2>
          </div>
          <p className="text-gray-600 mt-2">Learn more about PropWeb and our mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-propweb-700">Your Trusted Real Estate Partner</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2010, PropWeb has grown from a small startup to one of the leading real estate platforms in the country. 
              Our mission is to make property buying, selling, and renting as simple and stress-free as possible.
            </p>
            <p className="text-gray-700 mb-6">
              We combine industry expertise with cutting-edge technology to provide our clients with the best possible service. 
              Whether you're a first-time homebuyer, a seasoned investor, or a property developer, PropWeb is here to help you achieve your real estate goals.
            </p>
            <button className="text-propweb-600 font-medium flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="PropWeb Team" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -right-5 bg-propweb-50 p-6 rounded-lg shadow-md border border-propweb-100">
              <div className="text-propweb-700 font-bold text-4xl">12+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
