import MovieCard from "../MovieCard/MovieCard";

import { useState, useEffect } from "react";
import css from "./TopRatedMovies.module.css";

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  useEffect(() => {
    const getTopRatedMovies = async () => {
      // console.log("getting the movies");

      const res = await fetch("/api/movies/top-rated");
      const data = await res.json();

      if (res.ok) {
        setTopRatedMovies(data);
      }
    };
    getTopRatedMovies();
  }, []);
  return (
    <section className={css.container}>
      <p>Top Rated</p>
      {topRatedMovies && (
        <div className={css.cards_container}>
          {topRatedMovies.map((topRatedMovie) => {
            return (
              <MovieCard
                key={topRatedMovie._id}
                image={topRatedMovie.image}
                title={topRatedMovie.title}
                year={topRatedMovie.year}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TopRatedMovies;
