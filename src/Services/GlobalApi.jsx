import axios from "axios";

const key = "ebc91fdcc50645e7bcf964f99bf35092";

const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = axioCreate.get("/genres?key=" + key);
const getPopularGame = axioCreate.get("/games?key=" + key);
const getMovieDetails = (id) => axioCreate.get("/games/" + id + "/movies");
const getGameListByGenreId = (id) =>
  axioCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getPopularGame,
  getMovieDetails,
  getGameListByGenreId,
};
