import React, { useEffect, useState } from "react";
import { fetchNetflixOriginals } from "../api/tmdb";

export default function Banner() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function load() {
      const res = await fetchNetflixOriginals();
      const items = res.data.results;
      setMovie(items[Math.floor(Math.random() * items.length)]);
    }
    load();
  }, []);

  if (!movie) return <div className="h-96 bg-gray-900 animate-pulse" />;

  const bgUrl = `https://image.tmdb.org/t/p/original${
    movie.backdrop_path || movie.poster_path
  }`;

  return (
    <header className="relative h-96 rounded overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
      <img
        src={bgUrl}
        className="w-full h-full object-cover"
        alt={movie.title || movie.name}
      />
      <div className="absolute bottom-8 left-6 max-w-xl">
        <h1 className="text-3xl font-bold mb-2">{movie.title || movie.name}</h1>
        <p className="line-clamp-3 text-sm opacity-90">{movie.overview}</p>
      </div>
    </header>
  );
}
