import React from "react";

import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg2.jpg";
const Hero2 = () => {
  return (
    <section className="md:px-30 md:py-15 relative border-b">
      <img className="w-full h-full object-cover" src={heroimg} />
      <Link
        to="/portfolio"
        className="
            text-sm
            px-4 py-2
            border md:px-10 md:py-4 rounded-2xl
            top-[calc(50%+3rem)]
            absolute md:top-[calc(50%+10rem)] left-1/2 -translate-x-1/2 -translate-y-1/2
            text-white md:text-2xl  
            transition-all duration-300
          "
      >
        PORTFOLIO
      </Link>
    </section>
  );
};

export default Hero2;
