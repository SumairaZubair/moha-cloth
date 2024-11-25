"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import HeroSection from "@/app/hero/heroSection";
import ClothsBanner from "@/app/cloths/clothsBanner";
import Image from "next/image";
import Banner from "@/app/banner/banner";
import EmailBOx from "@/app/email/emailbox";
import Review from "@/app/review/review";
export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start autoplay
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
        }
      }, 5000); // Scroll every 3 seconds
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

  return (
    <>
    <div className="w-full h-10 text-center bg-black">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide flex items-center justify-center">
            <p className="font-serif lg:pt-2 pt-4 md:text-sm">
        Blessed Friday Sale Flat 30% &amp; 40% OFF
      </p>
          </div>
          <div className="embla__slide   flex items-center justify-center">
            <p className="font-serif lg:pt-2 pt-4 md:text-sm">
        Free Delivery above the order of RS 10000/- Nationwide
      </p>
          </div>
         
        </div>
      </div>
    </div>
    <HeroSection/>
    <ClothsBanner/>
   <Banner/>
   <EmailBOx/>
   <Review/>
    </>
  );
}
