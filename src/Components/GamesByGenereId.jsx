/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const GamesByGenereId = ({ gameListGenre, selectedGenre }) => {
  useEffect(() => {
    console.log("ok", gameListGenre);
  }, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenre} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameListGenre.map((item) => (
          <div
            key={item.id}
            className=" hover:scale-105 cursor-pointer transition-all duration-300  bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <div>
              <h2 className="text-[20px] dark:text-white font-bold">
                {item.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {item.metacritic}
                </span>
              </h2>
              <h2 className="text-gray-500 ">
                ⭐{item.rating} 💬{item.reviews_count} 🔥
                {item.suggestions_count}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenereId;
