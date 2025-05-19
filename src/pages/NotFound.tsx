
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-propweb-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
          </p>
          <Button asChild className="bg-propweb-600 hover:bg-propweb-700">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
