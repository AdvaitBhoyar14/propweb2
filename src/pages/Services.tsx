
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Property Listings",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      description: "Showcase your property with high-quality photos, detailed descriptions, and virtual tours to attract qualified buyers.",
      features: [
        "Professional photography services",
        "Virtual 3D home tours",
        "SEO-optimized property descriptions",
        "Featured placement opportunities"
      ]
    },
    {
      id: 2,
      title: "Buyer Assistance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      description: "Find your dream home with our comprehensive buyer support services, from search to closing.",
      features: [
        "Personalized property matches",
        "Neighborhood insights and statistics",
        "Guided property viewings",
        "Negotiation and offer support"
      ]
    },
    {
      id: 3,
      title: "Market Analysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      description: "Get data-driven insights into property values, market trends, and investment opportunities.",
      features: [
        "Comparative market analysis",
        "Property value estimations",
        "Local market trend reports",
        "Investment opportunity identification"
      ]
    },
    {
      id: 4,
      title: "Agent Services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      description: "Enhance your real estate business with our premium tools and marketing resources for agents.",
      features: [
        "Dedicated agent profiles",
        "Lead generation tools",
        "CRM integration",
        "Marketing automation services"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential tools for property exploration",
      features: [
        "Basic property search",
        "Save favorite properties",
        "Email alerts for new listings",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Premium",
      price: "$29",
      period: "/month",
      description: "Enhanced features for serious property seekers",
      features: [
        "Advanced search filters",
        "Market analytics dashboard",
        "Priority customer support",
        "Neighborhood insights",
        "Price history and comparisons"
      ],
      buttonText: "Start Premium",
      buttonVariant: "default",
      highlighted: true
    },
    {
      name: "Agent Pro",
      price: "$99",
      period: "/month",
      description: "Professional tools for real estate agents",
      features: [
        "Unlimited property listings",
        "Featured agent profile",
        "Lead management tools",
        "Marketing automation",
        "Client relationship management",
        "Performance analytics"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-propweb-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg opacity-90 mb-8">
                Comprehensive real estate solutions for buyers, sellers, and agents
              </p>
              <Button asChild className="bg-white text-propweb-800 hover:bg-gray-100">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">What We Offer</h2>
              <p className="text-gray-600">
                End-to-end solutions designed to make real estate transactions simpler and more efficient
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-propweb-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">How It Works</h2>
              <p className="text-gray-600">
                Our streamlined process makes finding or selling property easier than ever
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Sign Up & Define Needs",
                  description: "Create your free account and specify your property requirements or listing details."
                },
                {
                  step: "02",
                  title: "Browse or List",
                  description: "Search for properties that match your criteria or create your property listing with detailed information."
                },
                {
                  step: "03",
                  title: "Connect & Transact",
                  description: "Connect with buyers, sellers, or agents and finalize your real estate transaction."
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
                    <div className="text-4xl font-bold text-propweb-100 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-propweb-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-0">
                      <svg className="h-8 w-8 text-propweb-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Pricing Plans</h2>
              <p className="text-gray-600">
                Choose the plan that best fits your real estate needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative rounded-lg overflow-hidden ${plan.highlighted ? 'ring-2 ring-propweb-600' : 'border border-gray-200'}`}>
                  {plan.highlighted && (
                    <div className="bg-propweb-600 text-white text-xs font-semibold py-1 text-center">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2 text-propweb-800">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-propweb-800">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.buttonVariant as any} 
                      className={`w-full ${plan.highlighted ? 'bg-propweb-600 hover:bg-propweb-700' : 'border-propweb-600 text-propweb-600 hover:bg-propweb-50'}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Client Success Stories</h2>
              <p className="text-gray-600">
                See what our clients have to say about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "PropWeb made selling my home incredibly easy. Their marketing tools and agent network helped me get multiple offers above asking price.",
                  author: "Sarah T.",
                  role: "Home Seller"
                },
                {
                  quote: "As a first-time homebuyer, I was nervous about the process. The PropWeb team guided me every step of the way, and I'm now happily settled in my dream home.",
                  author: "Marcus L.",
                  role: "Home Buyer"
                },
                {
                  quote: "I've been a real estate agent for 15 years, and the tools PropWeb provides have revolutionized my business. My client base has grown by 40% since joining.",
                  author: "Jennifer K.",
                  role: "Real Estate Agent"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-propweb-300" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M14 8h-6c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h4v4c0 1.1 0.9 2 2 2h2v-14c0-1.1-0.9-2-2-2zM8 14v-4h6v6h-4c-1.1 0-2-0.9-2-2z"></path>
                      <path d="M30 8h-6c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h4v4c0 1.1 0.9 2 2 2h2v-14c0-1.1-0.9-2-2-2zM24 14v-4h6v6h-4c-1.1 0-2-0.9-2-2z"></path>
                    </svg>
                  </div>
                  <blockquote className="mb-4 text-gray-600">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold text-propweb-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-propweb-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Join thousands of satisfied clients who have found success with PropWeb's services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-propweb-800 hover:bg-gray-100">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
