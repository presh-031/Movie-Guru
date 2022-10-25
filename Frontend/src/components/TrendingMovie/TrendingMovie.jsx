import { BsFillPlayFill } from "react-icons/bs";

import css from "./TrendingMovie.module.css";

const TrendingMovie = () => {
  return (
    <div className={css.movie_card}>
      <img src="https://image.tmdb.org/t/p/w500//aTovumsNlDjof7YVoU5nW2RHaYn.jpg" alt="" />
      <div>
        <div className={css.play_btn}>
          <BsFillPlayFill />
        </div>
        <p className={css.movie_name}>Pulp Fiction</p>
        <p className={css.movie_year}>1994</p>
      </div>
    </div>
  );
};

export default TrendingMovie;
