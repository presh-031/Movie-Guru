import MovieCard from "../MovieCard/MovieCard";

import css from "./CurrentCategory.module.css";
const CurrentCategory = () => {
  return (
    <section className={css.container}>
      <p>Action</p>
      <div className={css.cards_container}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default CurrentCategory;
