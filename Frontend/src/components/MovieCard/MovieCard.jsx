import { BsFillPlayFill } from "react-icons/bs";

import css from "./MovieCard.module.css";

const MovieCard = ({ image, title, year }) => {
  return (
    <div className={css.movie_card}>
      <div className={css.poster_container}>
        <img src={image} alt="movie-poster" />
      </div>
      <div className={css.card_info}>
        <div className={css.play_btn}>
          <BsFillPlayFill size={35} style={{ color: "black", opacity: 0.8 }} />
        </div>
        <div>
          <p className={css.movie_name}>{title}</p>
          <p className={css.movie_year}>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
