import { useEffect, useState } from "react";

import MovieCard from "../MovieCard/MovieCard";

import css from "./TrendingMovies.module.css";
const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  useEffect(() => {
    const getTrendingMovies = async () => {
      // console.log("getting the movies");

      const res = await fetch("/api/movies/trending");
      const data = await res.json();

      if (res.ok) {
        setTrendingMovies(data);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <section className={css.container}>
      <p>Trending Movies</p>
      {trendingMovies && (
        <div className={css.cards_container}>
          {trendingMovies.map((trendingMovie) => {
            return (
              <MovieCard
                key={trendingMovie._id}
                image={trendingMovie.image}
                title={trendingMovie.title}
                year={trendingMovie.year}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TrendingMovies;
