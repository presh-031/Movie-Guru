import { useEffect } from "react";

import MovieCard from "../MovieCard/MovieCard";

import css from "./TrendingMovies.module.css";
const TrendingMovies = () => {
  useEffect(() => {
    const getTrendingMovies = async () => {
      console.log("getting the movies");

      const res = await fetch("/api/movies/top-rated");
      const data = await res.json();

      console.log(data);
    };
    getTrendingMovies();
  }, []);
  return (
    <section className={css.container}>
      <p>Trending Movies</p>
      <div className={css.cards_container}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default TrendingMovies;
