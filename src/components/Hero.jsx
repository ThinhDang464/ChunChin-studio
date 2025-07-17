import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className="sm:px-8 sm:py-8 relative border-b">
      <img className="w-full h-full object-cover" src={heroimg} />
      <Link
        to="/portfolio"
        className="
          text-sm
          bottom-5 right-5
          absolute sm:bottom-20 sm:right-40 
          text-white sm:text-xl  
          hover:underline underline-offset-4
          transition-all duration-300
        "
      >
        View Portfolio
      </Link>
    </section>
  );
};

export default Hero;
