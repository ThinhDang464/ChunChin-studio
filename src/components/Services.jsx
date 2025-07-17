import React, { useState } from "react";

import photographyImage from "/src/assets/photography.jpg";
import videographyImage from "/src/assets/videography.jpg";

const services = [
  {
    name: "01. Photography",
    image: photographyImage,
    alt: "A couple embracing during their wedding photoshoot",
  },
  {
    name: "02. Videography",
    image: videographyImage,
    alt: "A cinematic shot from a wedding video",
  },
  {
    name: "03. Bridal",
    image: photographyImage, // Replace with another image
    alt: "A bride having her makeup done",
  },
  {
    name: "04. Makeup",
    image: videographyImage, // Replace with another image
    alt: "A couple during their engagement photoshoot",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white md:py-24 border-b">
      {/* The Image Container*/}
      {/*Abosulute item needs w and h, use h-[90%] for paddding cause absolute does not care ab parent padding*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[800px] h-[90%]">
        {services.map((service, index) => (
          <img
            key={service.index}
            src={service.image}
            alt={service.alt}
            /*typical class tailwind to make image fill parent container*/
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-300 ease-in-out
              ${activeService === service.name ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Service List: Sits on top of the image stage using z-10. */}
      <div className="z-10 text-center">
        {services.map((service) => (
          <div
            key={service.name}
            onMouseEnter={() => setActiveService(service.name)}
            onMouseLeave={() => setActiveService(null)}
            className={`
              py-5 lg:py-15 cursor-pointer 
              transition-all duration-700 ease-in-out
              ${
                activeService && activeService !== service.name
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          >
            <p
              className={`
                text-xl
                md:text-6xl
                lg:text-8xl 
                transition-all duration-500 ease-in-out
                ${
                  activeService === service.name
                    ? "text-white font-serif font-medium" // Active: White, Serif, Medium weight
                    : "text-gray-800 font-sans font-normal" // Inactive: Gray, Sans-serif, Normal weight
                }
              `}
            >
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
