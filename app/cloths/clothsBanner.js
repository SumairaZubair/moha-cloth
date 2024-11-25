import Image from "next/image";
import React from "react";

// Define an array of objects for the images and their text or button content
const items = [
  { src: "/images/suit-1.webp", alt: "WINTER", buttonText: "Shop Now" },
  { src: "/images/suit-2.webp", alt: "FORMAL", buttonText: "Shop Now" },
  { src: "/images/suit-3.webp", alt: "HOOR", buttonText: "Shop Now" },
  { src: "/images/suit-4.webp", alt: "TULIP", buttonText: "Shop Now" },
];

const ClothsBanner = () => {
  return (
    <div className="w-full h-auto bg-gray-100 p-8 flex justify-center items-center">
      {/* Grid layout for mobile (1 column) and larger screens (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg h-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full overflow-hidden"
          >
            <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
              <Image
                src={item.src}
                alt={item.alt}
                width={550}
                height={550}
                objectFit="cover"
                quality={100}
                className="cursor-pointer"
              />
              {/* Overlay text or button */}
              <div className="absolute lg:bottom-8 bottom-10 left-1/2 transform -translate-x-1/2 translate-y-6 text-white font-serif text-center">
                <p className="font-sans text-xl sm:text-2xl font-bold">{item.alt}</p>
                <button className="mt-2 px-4 py-2 bg-black text-white font-serif text-sm sm:text-base">
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothsBanner;
