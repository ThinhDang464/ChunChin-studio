import React from "react";
import { Link } from "react-router-dom"; // Assuming you'll add links
import photographyImage from "/src/assets/photography.jpg";

const InfoBlock = () => {
  return (
    // 1. Change the parent to a grid container
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Column 1 */}
      <div className="border border-t-0 md:border-r-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center justify-center text-center">
        <p className="mb-10 text-sm md:text-3xl">
          Planning a wedding can be overwhelming — we're here to share helpful
          tips, behind-the-scenes stories, pros and cons, and thoughts on
          everything from choosing outfits to shaping the mood of your shoot.
        </p>
        <Link
          to="/journal"
          className="border text-sm
            px-4 py-2 md:px-10 md:py-3 rounded-lg md:text-xl"
        >
          JOURNAL
        </Link>
      </div>

      {/* Column 2 (Image) */}
      <div className="border border-t-0 sm:px-30 sm:py-30">
        {/* 2. Make the image fill its container gracefully */}
        <img
          src={photographyImage}
          alt="A sample of our photography work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Column 3 */}
      <div className="border border-t-0 md:border-l-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center justify-center text-center md:gap-20">
        <p className="mb-10 md:text-4xl">
          Still figuring things out? These FAQs cover the basics — and a bit
          more.
        </p>
        <Link
          to="/faq"
          className="border text-sm px-4 py-2 md:px-10 md:py-3 rounded-lg md:text-xl"
        >
          FAQs
        </Link>
      </div>
    </div>
  );
};

export default InfoBlock;
