import MovieCard from "../MovieCard/MovieCard";

import css from "./TopRatedMovies.module.css";

const TopRatedMovies = () => {
  return (
    <section className={css.container}>
      <p>Top Rated</p>
      <div className={css.cards_container}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default TopRatedMovies;
