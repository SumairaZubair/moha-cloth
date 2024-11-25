// import React from "react";
// import { FaStar } from "react-icons/fa";

// const Review = () => {
//   return (
//     <div className="flex text-black bg-slate-400 items-center justify-center p-4">
//       <p>Let customers speak for us</p>{" "}

//     </div>
//   );
// };

// export default Review;

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import {
  FaStar,
  FaStarHalfAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";
import React from "@heroicons/react";

const reviews = [
  {
    name: "Mrs Farhana Irfan",
    stuff: "accomodating staff",
    img: "/images/suit-1.webp",
    review:
      "Mohagani is such a nice brand.i always love their clothes . i ordered a dress but..",
    stars: 5,
  },
  {
    name: "Mrs Rahima Kazmi",
    stuff: "accomodating staff",
    img: "/images/suit-2.webp",
    review: "Great customer service and beautiful design.",
    stars: 4.5,
  },
  {
    name: "Mrs Alexa Haider",
    stuff: "accomodating staff",
    img: "/images/suit-3.webp",
    review: "Affordable prices and excellent material.",
    stars: 4,
  },
];

const policies = [
  "Return and Exchange Policy",
  "Shipping Policy",
  "International Shipping Rates",
  "Privacy Policy",
  "Order Cancelation Policy",
  "FAQ's",
  "Terms of Service",
  "Refund Policy",
  "Terms and Condition",
  "Order Delivery Policy",
  "Facebook",
];

const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };
  return (
    <>
      <div className="flex flex-col items-center text-black  p-4 space-y-2">
        <p className="text-lg font-medium">Let customers speak for us</p>
        <div className="flex space-x-1">
          {/* Render stars dynamically */}
          {[...Array(4)].map((_, index) => (
            <FaStar key={index} className="text-cyan-700 text-xl" />
          ))}
          <FaStarHalfAlt className="text-cyan-700 text-xl" />
          {/* <p>from 267 reviews</p> */}
        </div>
        <p>from 267 reviews</p>
        <div className="lg:w-1/4  w-full py-10">
          {/* <h2 className="text-center text-2xl font-bold mb-6">Let Customers Speak for Us</h2> */}
          <div className="embla relative" ref={emblaRef}>
            <div className="embla__container flex space-x-4">
              {reviews.map((review, index) => (
                <div
                  className="embla__slide flex flex-col items-center   p-6 "
                  key={index}
                >
                  {/* <p className="text-lg font-semibold mb-2">{review.name}</p> */}
                  <div className="flex space-x-1 mb-3">
                    {/* Render full stars */}
                    {[...Array(Math.floor(review.stars))].map((_, i) => (
                      <FaStar key={i} className="text-cyan-700 text-xl" />
                    ))}
                    {/* Render half star if applicable */}
                    {review.stars % 1 !== 0 && (
                      <FaStarHalfAlt className="text-cyan-700 text-xl" />
                    )}
                  </div>
                  <p className="font-serif text-black text-base font-semibold ">
                    {review.stuff}
                  </p>

                  <p className="font-serif text-black text-base font-light">
                    {review.review}
                  </p>
                  <p className="font-serif text-black text-base font-light mb-2">
                    {review.name}
                  </p>
                  <Image
                    src={review.img}
                    alt="Mohagni Logo"
                    width={60}
                    height={40}
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <div className=" flex items-center gap-2 justify-center ">
              <button
                onClick={scrollPrev}
                className="  bg-gray-400 text-white p-2 rounded-full hover:bg-gray-600"
              >
                <FaArrowLeft className="text-lg" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={scrollNext}
                className="bg-gray-400 text-white p-2 rounded-full hover:bg-gray-600"
              >
                <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 pt-10 p-4 ">
          {policies.map((policy, index) => (
            <div key={index} className="flex items-center">
              <p
                href={`#${policy.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-gray-400 hover:underline hover:text-black text-sm"
              >
                {policy}
              </p>
              {index < policies.length - 1 && (
                <span className="text-gray-400 mx-1">|</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center pt-10 justify-center gap-4">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </div>
      </div>
      <div className="w-full p-2 lg:text-base text-sm  text-center h-9 mt-10 bg-black ">
          <small className="">
            © 2024,{" "}
            <p href="/" title="">
              MOHAGNI
            </p> 
          </small>
          <small className=" cursor-pointer capitalize">
            <strong > DEVELOPED &amp; MANAGED BY:</strong>{" "}
            <p href="https://www.ecomatives.com/" >
              <strong className="text-cyan-700">ECOMATIVES</strong>
            </p>
          </small>
        </div>{" "}
        <div className="p-3 flex items-center justify-center">
        <Image
              src="/images/logo.svg"
              alt="Mohagni Logo"
              width={110}
              height={110}
              objectFit="cover"
              quality={100}
            />
        </div>
    </>
  );
};

export default Review;
