import React, { useEffect, useState } from "react";
import { fetchMovieVideos } from "../api/tmdb";
import ReactPlayer from "react-player";

export default function TrailerModal({ item, onClose }) {
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function load() {
    try {
      setLoading(true);

      // Decide media type safely
      const type = item.media_type
        ? item.media_type
        : item.name
        ? "tv"
        : "movie";

      console.log("Fetching trailer for:", item.id, "as type:", type);

      const res = await fetchMovieVideos(item.id, type);
      const vids = res.data?.results || [];

      if (vids.length === 0) {
        setVideoKey(null);
      } else {
        // Prefer official trailer
        const trailer =
          vids.find(
            (v) => v.type === "Trailer" && v.site === "YouTube"
          ) || vids.find((v) => v.site === "YouTube");

        setVideoKey(trailer?.key || null);
      }
    } catch (err) {
      console.error("Error fetching trailer:", err);
      setVideoKey(null);
    } finally {
      setLoading(false);
    }
  }

  if (item?.id) load();
}, [item]);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-black rounded-lg shadow-lg max-w-4xl w-full p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg">{item.title || item.name}</h3>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        {loading ? (
          <div className="p-12 text-center text-gray-400 animate-pulse">
            ⏳ Loading trailer...
          </div>
        ) : videoKey ? (
          <div className="aspect-video">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              width="100%"
              height="100%"
              controls
              playing
            />
          </div>
        ) : (
          <div className="p-12 text-center text-gray-400">
            🚫 Trailer not available
          </div>
        )}
      </div>
    </div>
  );
}
