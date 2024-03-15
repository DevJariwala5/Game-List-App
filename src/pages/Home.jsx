import React, { useEffect, useState } from "react";
import SideNavGenreList from "../Components/SideNavGenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenereId from "../Components/GamesByGenereId";

const Home = () => {
  const [gameList, setgameList] = useState([]);
  const [gameListByGenres, setgameListByGenres] = useState([]);
  const [selectedGenre, setselectedGenre] = useState("Action");
  useEffect(() => {
    getallgames();
    getGameListById(4);
  }, []);
  const getallgames = () => {
    GlobalApi.getPopularGame.then((res) => {
      console.log("all games", res.data.results);
      setgameList(res.data.results);
    });
  };

  const getGameListById = (id) => {
    GlobalApi.getGameListByGenreId(id).then((res) => {
      console.log("genre", res.data.results);
      setgameListByGenres(res.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-7">
      <div className="hidden md:block ">
        <SideNavGenreList
          genreId={(genreId) => getGameListById(genreId)}
          selectedGenreName={(name) => setselectedGenre(name)}
        />
      </div>
      <div className="md:col-span-3 col-span-4 px-3 ">
        {gameList?.length > 0 && getGameListById?.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[7]} />
            <TrendingGames gameList={gameList} />
            <GamesByGenereId
              gameListGenre={gameListByGenres}
              selectedGenre={selectedGenre}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
