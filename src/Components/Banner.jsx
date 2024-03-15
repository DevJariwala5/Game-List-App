/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const Banner = ({ gameBanner }) => {
  useEffect(() => {
    console.log(gameBanner);
  }, []);
  return (
    <div className="relative cursor-pointer hover:scale-105 transition-all duration-300 cursor-pointer">
      <div
        className="absolute bottom-0  bg-gradient-to-t w-full
        pb-10 from-slate-900 to-transparent p-5 rounded-xl"
      >
        <h2 className="text-[30px] text-white font-bold ">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-2">Get Now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className="  h-[200px] md:h-[400px] w-full object-cover  rounded-xl"
      />
    </div>
  );
};

export default Banner;
