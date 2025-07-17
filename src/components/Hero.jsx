import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className="px-8 py-8 relative border-b">
      <img className="w-full h-full object-cover" src={heroimg} />
      <Link
        to="/portfolio"
        className="
          absolute bottom-20 right-40 
          text-white text-xl  
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
