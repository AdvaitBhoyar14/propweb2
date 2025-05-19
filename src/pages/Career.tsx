
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "New York, NY (Hybrid)",
      description: "Join our engineering team to develop innovative solutions for our property platform."
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      description: "Create beautiful and intuitive user experiences for our web and mobile applications."
    },
    {
      id: 3,
      title: "Real Estate Analyst",
      department: "Market Research",
      location: "Chicago, IL",
      description: "Analyze property market trends and provide insights to improve our platform."
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Support",
      location: "Miami, FL (Hybrid)",
      description: "Ensure our clients achieve their goals and have an exceptional experience with PropWeb."
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      description: "Lead our digital marketing efforts to grow our user base and increase engagement."
    },
  ];

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Collaborative Culture",
      description: "Work in a supportive environment where teamwork and innovation thrive."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      title: "Flexible Hours",
      description: "We understand the importance of work-life balance and offer flexible working arrangements."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
      title: "Career Growth",
      description: "Opportunities for professional development, mentorship, and advancement."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propweb-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: "Competitive Benefits",
      description: "Comprehensive healthcare, retirement plans, and other perks to support your wellbeing."
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg opacity-90 mb-8">
                Build your career with PropWeb and help transform the real estate industry
              </p>
              <Button asChild className="bg-white text-propweb-800 hover:bg-gray-100">
                <a href="#job-openings">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-propweb-800">Why Join PropWeb?</h2>
                <p className="text-gray-600 mb-4">
                  At PropWeb, we're not just building a real estate platform; we're revolutionizing how people find and purchase their dream homes. Our team is composed of passionate individuals who combine their expertise in technology, real estate, and customer service to create exceptional experiences.
                </p>
                <p className="text-gray-600 mb-4">
                  We value innovation, collaboration, and growth. As a team member, you'll have the opportunity to work on challenging projects, develop your skills, and make a real impact on millions of users.
                </p>
                <p className="text-gray-600">
                  Whether you're a seasoned professional or just starting your career, PropWeb offers a supportive environment where your ideas are valued and your growth is prioritized.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="PropWeb Office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Employee Benefits</h2>
              <p className="text-gray-600">
                We take care of our team so they can focus on doing their best work
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-propweb-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-propweb-800">{benefit.title}</h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="job-openings" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Current Openings</h2>
              <p className="text-gray-600">
                Explore our available positions and find your perfect role
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-propweb-800">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                        <span className="text-sm text-propweb-600">{job.department}</span>
                        <span className="hidden sm:inline text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{job.location}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-propweb-600 hover:bg-propweb-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Don't see a role that matches your skills?</p>
              <Button variant="outline" className="border-propweb-600 text-propweb-600 hover:bg-propweb-50">
                Submit General Application
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-propweb-800">Our Culture</h2>
              <p className="text-gray-600">
                A glimpse into life at PropWeb
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg h-40 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Office Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80" 
                  alt="Team Working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1470&q=80" 
                  alt="Office Celebration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-propweb-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Join our talented team and help shape the future of real estate.
            </p>
            <Button asChild className="bg-white text-propweb-800 hover:bg-gray-100">
              <a href="#job-openings">Explore Opportunities</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
