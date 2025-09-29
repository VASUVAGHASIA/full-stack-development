// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from "./api/tmdb";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="px-4 md:px-8">
        <Banner />
        <section className="space-y-8 mt-8">
          <Row
            title="Netflix Originals"
            fetchUrl={fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={fetchTrending} />
          <Row title="Top Rated" fetchUrl={fetchTopRated} />
          <Row title="Action" fetchUrl={fetchActionMovies} />
          <Row title="Comedy" fetchUrl={fetchComedyMovies} />
          <Row title="Horror" fetchUrl={fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
        </section>
      </main>
    </div>
  );
}
