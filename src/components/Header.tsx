
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Helper function to determine active state
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-propweb-800">Prop<span className="text-propweb-500">Web</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-propweb-600' : 'text-gray-700 hover:text-propweb-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/about') ? 'text-propweb-600' : 'text-gray-700 hover:text-propweb-600'}`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/services') ? 'text-propweb-600' : 'text-gray-700 hover:text-propweb-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/career" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/career') ? 'text-propweb-600' : 'text-gray-700 hover:text-propweb-600'}`}
            >
              Career
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/contact') ? 'text-propweb-600' : 'text-gray-700 hover:text-propweb-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-propweb-600 text-propweb-600 hover:bg-propweb-50">
              Log In
            </Button>
            <Button className="bg-propweb-600 hover:bg-propweb-700">
              List Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-propweb-600 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-propweb-600 bg-gray-100' : 'text-gray-700 hover:text-propweb-600 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-propweb-600 bg-gray-100' : 'text-gray-700 hover:text-propweb-600 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-propweb-600 bg-gray-100' : 'text-gray-700 hover:text-propweb-600 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/career" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/career') ? 'text-propweb-600 bg-gray-100' : 'text-gray-700 hover:text-propweb-600 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-propweb-600 bg-gray-100' : 'text-gray-700 hover:text-propweb-600 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-propweb-600 text-propweb-600 hover:bg-propweb-50 w-full">
                  Log In
                </Button>
                <Button className="bg-propweb-600 hover:bg-propweb-700 w-full">
                  List Property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
