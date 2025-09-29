// src/api/tmdb.js
import axios from "axios";

const BASE = import.meta.env.VITE_TMDB_API_BASE_URL;
const KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: BASE,
  params: { api_key: KEY, language: "en-US" },
});

export const fetchTrending = () => tmdb.get("/trending/all/week");
export const fetchNetflixOriginals = () =>
  tmdb.get("/discover/tv", { params: { with_networks: 213 } });
export const fetchTopRated = () => tmdb.get("/movie/top_rated");
export const fetchActionMovies = () =>
  tmdb.get("/discover/movie", { params: { with_genres: 28 } });
export const fetchComedyMovies = () =>
  tmdb.get("/discover/movie", { params: { with_genres: 35 } });
export const fetchHorrorMovies = () =>
  tmdb.get("/discover/movie", { params: { with_genres: 27 } });
export const fetchRomanceMovies = () =>
  tmdb.get("/discover/movie", { params: { with_genres: 10749 } });
export const fetchDocumentaries = () =>
  tmdb.get("/discover/movie", { params: { with_genres: 99 } });

export const fetchMovieVideos = (movieId, mediaType = "movie") =>
  tmdb.get(`/${mediaType}/${movieId}/videos`, {
    params: { api_key: KEY, language: "en-US" },
  });

export default tmdb;
