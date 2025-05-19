
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

const Contact = () => {
  const officeLocations = [
    {
      city: "New York",
      address: "350 Fifth Avenue, 34th floor, New York, NY 10118",
      phone: "+1 (212) 555-6789",
      email: "nyc@propweb.com",
      hours: "Mon-Fri: 9AM - 6PM"
    },
    {
      city: "Los Angeles",
      address: "9454 Wilshire Boulevard, Beverly Hills, CA 90212",
      phone: "+1 (310) 555-1234",
      email: "la@propweb.com",
      hours: "Mon-Fri: 8AM - 5PM"
    },
    {
      city: "Chicago",
      address: "233 S Wacker Dr, Chicago, IL 60606",
      phone: "+1 (312) 555-7890",
      email: "chicago@propweb.com",
      hours: "Mon-Fri: 8:30AM - 5:30PM"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-propweb-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg opacity-90 mb-4">
                We're here to help with all your real estate needs
              </p>
              <p className="opacity-75">
                Our team of experts is always ready to assist you with any questions or inquiries
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="rounded-lg overflow-hidden shadow-lg p-8 bg-white">
                <h2 className="text-2xl font-bold mb-6 text-propweb-800">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input id="phone" placeholder="+1 (123) 456-7890" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      className="min-h-[120px]" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="bg-propweb-600 hover:bg-propweb-700 w-full">Send Message</Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-propweb-800">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about buying or selling a home? Need help with your property search? Our team is ready to assist you. Contact us today and let us help you find your dream home.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-propweb-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-propweb-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-propweb-800">Phone</h3>
                      <p className="text-gray-600">+1 (800) 555-PROP</p>
                      <p className="text-gray-600">+1 (212) 555-6789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-propweb-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-propweb-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-propweb-800">Email</h3>
                      <p className="text-gray-600">info@propweb.com</p>
                      <p className="text-gray-600">support@propweb.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-propweb-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-propweb-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-propweb-800">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-propweb-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-propweb-100 p-2 rounded-full text-propweb-600 hover:bg-propweb-200 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-propweb-100 p-2 rounded-full text-propweb-600 hover:bg-propweb-200 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-propweb-100 p-2 rounded-full text-propweb-600 hover:bg-propweb-200 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-propweb-100 p-2 rounded-full text-propweb-600 hover:bg-propweb-200 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Our Offices</h2>
              <p className="text-gray-600">
                Visit us at one of our office locations across the country
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    <img 
                      src={`https://source.unsplash.com/random/800x600/?city,${office.city}`} 
                      alt={`${office.city} Office`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-propweb-800">{office.city} Office</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-propweb-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-propweb-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-propweb-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-propweb-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{office.hours}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="mt-6 w-full border-propweb-600 text-propweb-600 hover:bg-propweb-50"
                    >
                      Get Directions
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Find answers to common questions about our services
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How quickly will I receive a response to my inquiry?",
                    answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our customer service line directly."
                  },
                  {
                    question: "Do you offer virtual consultations?",
                    answer: "Yes, we offer virtual consultations via Zoom, Google Meet, or your preferred video conferencing platform. Simply request a virtual meeting when you contact us."
                  },
                  {
                    question: "How can I become a PropWeb agent?",
                    answer: "If you're interested in joining our team of real estate professionals, please visit our Careers page and apply for available agent positions, or send your resume to careers@propweb.com."
                  },
                  {
                    question: "I'm experiencing technical issues with the website. Who should I contact?",
                    answer: "For technical support, please email support@propweb.com with details about the issue you're experiencing, including screenshots if possible."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-propweb-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Don't see your question here?</p>
                <Button asChild className="bg-propweb-600 hover:bg-propweb-700">
                  <a href="#top">Contact Us Directly</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
