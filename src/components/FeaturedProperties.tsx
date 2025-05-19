
import React from 'react';
import PropertyCard from './PropertyCard';
import { Button } from "@/components/ui/button";

const FeaturedProperties = () => {
  const properties = [
    {
      id: '1',
      title: 'Luxury Villa in Palm Meadows',
      location: 'Palm Meadows, Los Angeles',
      price: '$2,500,000',
      bedrooms: 5,
      bathrooms: 4,
      area: 3200,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
      propertyType: 'Villa',
      isNew: true
    },
    {
      id: '2',
      title: 'Modern Apartment in Downtown',
      location: 'Downtown, New York',
      price: '$820,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      propertyType: 'Apartment'
    },
    {
      id: '3',
      title: 'Spacious Family House with Garden',
      location: 'Willow Creek, San Francisco',
      price: '$1,350,000',
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      propertyType: 'House',
      isNew: true
    },
    {
      id: '4',
      title: 'Waterfront Penthouse with Stunning Views',
      location: 'Marina District, San Diego',
      price: '$3,850,000',
      bedrooms: 3,
      bathrooms: 3.5,
      area: 2800,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      propertyType: 'Penthouse'
    },
    {
      id: '5',
      title: 'Renovated Loft in Historic Building',
      location: 'Tribeca, New York',
      price: '$1,750,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      propertyType: 'Loft'
    },
    {
      id: '6',
      title: 'Country Estate with 5 Acres',
      location: 'Rolling Hills, Connecticut',
      price: '$4,200,000',
      bedrooms: 6,
      bathrooms: 5,
      area: 4500,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      propertyType: 'Estate',
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-gray-600 mt-2">Explore our handpicked selection of premium properties</p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex border-propweb-600 text-propweb-600 hover:bg-propweb-50">
            View All Properties
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="border-propweb-600 text-propweb-600 hover:bg-propweb-50">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
