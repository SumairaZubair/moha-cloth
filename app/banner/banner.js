import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/banner.webp"
        alt="Slide 1"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
       <Image
                src="/images/mobile3.webp"
                alt="Slide 1"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute  top-0 left-0 lg:hidden"
              />
      {/* You can add content like text or buttons here */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
        <p>Welcome to Our Website</p>
      </div> */}
    </div>
  );
};

export default Banner;
