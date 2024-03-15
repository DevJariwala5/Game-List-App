/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const SideNavGenreList = ({ genreId, selectedGenreName }) => {
  const [gameList, setGameList] = useState([]);
  const [activeIndex, setactiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      console.log(res.data.results);
      setGameList(res.data.results);
    });
  };
  return (
    <div className=" ">
      <h2 className="text-[30px] font-bold dark:text-white mb-5">Genres</h2>
      {gameList.map((item, idx) => (
        <div
          onClick={() => {
            setactiveIndex(idx);
            genreId(item.id);
            selectedGenreName(item.name);
          }}
          key={idx}
          className={`flex gap-3 items-center mb-2 cursor-pointer
        hover:bg-gray-300 p-3 rounded-lg dark:hover:bg-gray-600 
        group mr-6
        ${activeIndex == idx ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            className={`w-[48px] h-[48px] 
                object-cover rounded-lg group-hover:scale-110  
                transition-all duration-300 ${
                  activeIndex == idx ? "scale-110" : null
                } `}
          />
          <h3
            className={`text-[20px] group-hover:font-bold   dark:text-white
                transition-all duration-300 ${
                  activeIndex == idx ? "font-bold" : null
                }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SideNavGenreList;
