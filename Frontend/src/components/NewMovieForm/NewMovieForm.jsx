import css from "./NewMovieForm.module.css";

const NewMovieForm = () => {
  return (
    <form>
      <div className={css.first_section}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" id="director" />

        <label htmlFor="year">Year</label>
        <input type="number" name="year" id="year" />

        <label htmlFor="image">Image URL</label>
        <input type="text" name="image" id="image" />

        <label htmlFor="synopsis">Synopsis</label>
        <textarea name="synopsis" id="synopsis" rows="10"></textarea>
      </div>
      <p>Categories</p>
      <div className={css.second_section}>
        <input type="checkbox" name="action" id="action" />
        <label htmlFor="action">Action</label>

        <input type="checkbox" name="comedy" id="comedy" />
        <label htmlFor="comedy">Comedy</label>

        <input type="checkbox" name="drama" id="drama" />
        <label htmlFor="drama">Drama</label>

        <input type="checkbox" name="fantasy" id="fantasy" />
        <label htmlFor="fantasy">Fantasy</label>

        <input type="checkbox" name="horror" id="horror" />
        <label htmlFor="horror">Horror</label>

        <input type="checkbox" name="romance" id="romance" />
        <label htmlFor="romance">Romance</label>

        <input type="checkbox" name="thriller" id="thriller" />
        <label htmlFor="thriller">Thriller</label>
      </div>{" "}
    </form>
  );
};

export default NewMovieForm;