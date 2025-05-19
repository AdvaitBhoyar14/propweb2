
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface CategoryProps {
  title: string;
  image: string;
  count: number;
  link: string;
}

const CategoryCard = ({ title, image, count, link }: CategoryProps) => {
  return (
    <Link to={link}>
      <Card className="overflow-hidden h-full property-card-shadow">
        <div className="relative h-48">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm opacity-90">{count} Properties</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const PropertyCategories = () => {
  const categories = [
    {
      title: 'Apartments',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      count: 1245,
      link: '/properties?category=apartments'
    },
    {
      title: 'Villas',
      image: 'https://images.unsplash.com/photo-1613977257363-707004c0eb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      count: 632,
      link: '/properties?category=villas'
    },
    {
      title: 'Houses',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      count: 853,
      link: '/properties?category=houses'
    },
    {
      title: 'Office Spaces',
      image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      count: 376,
      link: '/properties?category=offices'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Category</h2>
          <p className="text-gray-600 mt-2">Explore our extensive collection of properties by category</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
