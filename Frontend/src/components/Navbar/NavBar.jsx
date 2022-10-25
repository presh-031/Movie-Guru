import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header className={css.header}>
      <p>MOVIE GURU</p>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/add-movie">Add Movie</NavLink>
      </div>
    </header>
  );
};

export default NavBar;
