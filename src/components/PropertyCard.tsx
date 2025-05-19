
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  propertyType: string;
  isNew?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  propertyType,
  isNew = false
}: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden h-full property-card-shadow">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-propweb-600 hover:bg-propweb-700">{propertyType}</Badge>
            {isNew && <Badge className="ml-2 bg-green-600 hover:bg-green-700">New</Badge>}
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-propweb-800 hover:bg-propweb-900">{price}</Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">{location}</p>
          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              <span>{area} sq.ft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
