import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg2.jpg";
const Hero2 = () => {
  return (
    <section className="px-30 py-15 relative border-b">
      <img className="w-full h-full object-cover" src={heroimg} />
      <Link
        to="/portfolio"
        className="
            border px-10 py-4 rounded-2xl
            absolute top-[calc(50%+10rem)] left-1/2 -translate-x-1/2 -translate-y-1/2
            text-white text-2xl  
            transition-all duration-300
          "
      >
        PORTFOLIO
      </Link>
    </section>
  );
};

export default Hero2;
