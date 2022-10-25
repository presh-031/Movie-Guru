import { BsFillPlayFill } from "react-icons/bs";

import css from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={css.movie_card}>
      <div className={css.poster_container}>
        <img src="https://image.tmdb.org/t/p/w500//aTovumsNlDjof7YVoU5nW2RHaYn.jpg" alt="" />
      </div>
      <div className={css.card_info}>
        <div className={css.play_btn}>
          <BsFillPlayFill size={35} style={{ color: "black", opacity: 0.8 }} />
        </div>
        <div>
          <p className={css.movie_name}>Pulp Fiction</p>
          <p className={css.movie_year}>1994</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
