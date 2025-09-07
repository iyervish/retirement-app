'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: '/hero-1.png', alt: 'Retirement Planning Hero 1' },
    { src: '/hero-2.png', alt: 'Retirement Planning Hero 2' },
    { src: '/hero-3.jpg', alt: 'Retirement Planning Hero 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          />
        ))}
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
