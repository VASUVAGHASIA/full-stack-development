import React from "react";

export default function MovieCard({ item, onClick, large }) {
  const img = `https://image.tmdb.org/t/p/w500${
    large ? item.poster_path : item.backdrop_path || item.poster_path
  }`;
  return (
    <div
      className="inline-block mr-3 transform transition-transform hover:scale-105 cursor-pointer"
      onClick={() => onClick(item)}
    >
      <img
        src={img}
        alt={item.title || item.name}
        className={`rounded ${large ? "h-auto" : "h-auto"}`}
      />
    </div>
  );
}
