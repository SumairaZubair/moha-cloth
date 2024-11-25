// "use client";

// import { useEffect, useRef, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
// import { FaBars } from "react-icons/fa";

// const HeroSection = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const intervalRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     // Start autoplay
//     const startAutoplay = () => {
//       intervalRef.current = setInterval(() => {
//         if (emblaApi) {
//           emblaApi.scrollNext();
//         }
//       }, 7000); // Scroll every 7 seconds
//     };

//     // Stop autoplay when the component is unmounted
//     const stopAutoplay = () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };

//     startAutoplay();
//     return stopAutoplay; // Cleanup on unmount
//   }, [emblaApi]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       {/* Fixed Logo and Icons */}
//       <div
//         className={`fixed top-10 w-full z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white p-2 -top-1 border-b border-gray-300 shadow-md"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-3">
//           {/* Hamburger Menu */}
//           <button>
//             <FaBars
//               className={`text-2xl ${
//                 isScrolled ? "text-black" : "text-black"
//               } hover:text-gray-900`}
//             />
//           </button>

//           {/* Logo */}
//           <div className="ml-48">

//           <Image
//             src="/images/mohagini.avif"
//             alt="Mohagni Logo"
//             width={110}
//             height={110}
//             objectFit="contain"
//             quality={100}
           
//           />
//           </div>

//           {/* Icons */}
//           <div className="flex space-x-6">
//             <button>
//               <FiSearch
//                 className={`text-2xl ${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-gray-900`}
//               />
//             </button>
//             <button>
//               <FiHeart
//                 className={`text-2xl ${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-gray-900`}
//               />
//             </button>
//             <button>
//               <FiShoppingCart
//                 className={`text-2xl ${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-gray-900`}
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Embla Carousel */}
//       <div className="embla" ref={emblaRef}>
//         <div className="embla__container">
//           {/* Slide 1 */}
//           <div className="embla__slide">
//             <div className="relative w-full h-screen">
//               <Image
//                 src="/images/hero-img-1.webp"
//                 alt="Slide 1"
//                 layout="fill"
//                 objectFit="cover"
//                 quality={100}
//                 className="absolute top-0 left-0"
//               />
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className="embla__slide">
//             <div className="relative w-full h-screen">
//               <Image
//                 src="/images/hero-img-2.webp"
//                 alt="Slide 2"
//                 layout="fill"
//                 objectFit="cover"
//                 quality={100}
//                 className="absolute top-0 left-0"
//               />
//             </div>
//           </div>
          
         
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default HeroSection;







"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const intervalRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Start autoplay
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
        }
      }, 7000); // Scroll every 7 seconds
    };

    // Stop autoplay when the component is unmounted
    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoplay();
    return stopAutoplay; // Cleanup on unmount
  }, [emblaApi]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Fixed Logo and Icons */}
      <div
         className={`fixed  w-full z-50 transition-all duration-300 ${
           isScrolled
             ? "bg-white p-2 -top-1 border-b border-gray-300 d"
             : "bg-transparent"
         }`}
       >
        <div className="flex items-center justify-between  lg:px-6 px-2 py-3">
          {/* Hamburger Menu */}
          <button>
            <FaBars
              className={`text-2xl md:text-lg ${isScrolled ? "text-black " : "text-white"} hover:text-gray-900`}
            />
          </button>

          {/* Logo */}
          <div className="ml-4">
            <Image
              src="/images/mohagini.avif"
              alt="Mohagni Logo"
              width={110}
              height={110}
              objectFit="cover"
              quality={100}
            />
          </div>

          {/* Icons */}
          <div className="flex lg:space-x-6">
            <button>
              <FiSearch
                className={`text-2xl  md:text-lg ${isScrolled ? "text-black" : "text-white"} hover:text-gray-900 hidden md:block`}
              />
            </button>
            <button>
              <FiHeart
                className={`text-2xl md:text-lg ${isScrolled ? "text-black" : "text-white"} hover:text-gray-900 hidden md:block`}
              />
            </button>
            <button>
              <FiShoppingCart
                className={`text-2xl md:text-lg ${isScrolled ? "text-black" : "text-white"} hover:text-gray-900`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {/* Slide 1 */}
          <div className="embla__slide">
            <div className="relative w-full h-screen ">
              <Image
                src="/images/hero-img-1.webp"
                alt="Slide 1"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute top-0 left-0 lg:block hidden"
              />
               <Image
                src="/images/mobile.webp"
                alt="Slide 1"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute  top-0 left-0 lg:hidden"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="embla__slide">
            <div className="relative w-full h-screen ">
              <Image
                src="/images/hero-img-2.webp"
                alt="Slide 2"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute top-0 left-0 lg:block hidden  "
              />
               <Image
                src="/images/mobile2.webp"
                alt="Slide 1"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute  top-0 left-0  block "
              />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default HeroSection;
