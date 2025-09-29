import React, { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import TrailerModal from "./TrailerModal";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const scrollerRef = useRef();

  useEffect(() => {
    async function load() {
      const res = await fetchUrl();
      setItems(res.data.results);
    }
    load();
  }, [fetchUrl]);

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div
        ref={scrollerRef}
        className="row-container"
      >
        {items.map((it) => (
          <MovieCard
            key={it.id}
            item={it}
            onClick={(m) => setSelected(m)}
            large={isLargeRow}
          />
        ))}
      </div>
      {selected && (
        <TrailerModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
