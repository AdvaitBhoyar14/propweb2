
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-propweb-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About PropWeb</h1>
              <p className="text-lg opacity-90 mb-8">
                The leading real estate platform connecting buyers and sellers since 2010.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-propweb-800">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, PropWeb began with a simple mission: to make property search and transactions more accessible, transparent, and efficient for everyone involved. 
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small team of real estate enthusiasts has grown into the country's most trusted property platform, connecting millions of buyers, sellers, and agents.
                </p>
                <p className="text-gray-600">
                  Our journey has been defined by innovation, customer-centricity, and a deep understanding of the real estate market's evolving needs. Today, PropWeb continues to lead the industry with cutting-edge technology and personalized service.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="PropWeb Office Building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Our Values</h2>
              <p className="text-gray-600">
                These core principles guide everything we do at PropWeb
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-propweb-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-propweb-800">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in every property listing, transaction, and customer interaction.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-propweb-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-propweb-800">Innovation</h3>
                <p className="text-gray-600">
                  We constantly strive to improve our platform and services through technology and creative solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-propweb-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-propweb-800">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers' needs drive every decision we make, ensuring we deliver value at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Meet Our Leadership</h2>
              <p className="text-gray-600">
                The visionaries driving PropWeb's mission forward
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 30}.jpg`}
                    alt={`Team Member ${item}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1 text-propweb-800">
                      {item === 1 ? 'Sarah Johnson' : item === 2 ? 'Michael Chen' : item === 3 ? 'Priya Sharma' : 'David Wilson'}
                    </h3>
                    <p className="text-propweb-600 mb-3">
                      {item === 1 ? 'CEO & Founder' : item === 2 ? 'CTO' : item === 3 ? 'COO' : 'VP of Sales'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item === 1 
                        ? 'Founded PropWeb with 15+ years of real estate experience.' 
                        : item === 2 
                          ? 'Leads our technology team with innovative solutions.' 
                          : item === 3 
                            ? 'Oversees all operations and customer experience.' 
                            : 'Drives our sales strategy and agent partnerships.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-propweb-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Be part of the PropWeb story as we continue to transform the real estate industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-propweb-800 hover:bg-gray-100">
                <a href="/services">Our Services</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
