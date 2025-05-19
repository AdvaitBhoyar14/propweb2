import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      {/* Headline and CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 lg:mt-24 text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9]">
          TRUST<br />EXPLORE<br />BUY
        </h1>
        <div className="mt-4">
          <a
            href="#"
            className="text-sm md:text-base italic hover:underline"
          >
            Explore Our Offers →
          </a>
        </div>
      </div>

      {/* Hero Image with Quote */}
      <div className="relative mt-8 sm:mt-10 md:mt-12">
        <img
          src="/banner.jpg"
          alt="Scenic coastline"
          className="w-full object-cover h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 lg:px-8">
          <blockquote className="text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-right drop-shadow-lg bg-black/30 p-3 md:p-4 rounded">
            <p className="text-xs sm:text-sm md:text-base italic">
              "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."
            </p>
            <footer className="mt-1 md:mt-2 text-xs sm:text-sm">— Franklin D. Roosevelt</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hero;