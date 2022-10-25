import MovieCard from "../MovieCard/MovieCard";

import css from "./TrendingMovies.module.css";
const TrendingMovies = () => {
  return (
    <section className={css.container}>
      <p>Trending Movies</p>
      <div className={css.cards_container}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <p>Top Rated</p>
      <div className={css.cards_container}>
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default TrendingMovies;
