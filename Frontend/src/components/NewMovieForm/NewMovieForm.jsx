import { useState } from "react";

import css from "./NewMovieForm.module.css";

const NewMovieForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [story, setStory] = useState("");

  const [action, setAction] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [drama, setDrama] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [horror, setHorror] = useState(false);
  const [romance, setRomance] = useState(false);
  const [thriller, setThriller] = useState(false);

  console.count("times : ");

  // Handler for form submission
  async function handleFormSubmit(e) {
    e.preventDefault();

    const newMovieInfo = {
      title,
      director,
      year,
      imageUrl,
      story,
      trending,
      top_rated
      categories: {
        action,
        comedy,
        drama,
        fantasy,
        horror,
        romance,
        thriller,
      },
    };

    console.log(newMovieInfo);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovieInfo),
    };
    const res = await fetch("/api/movies", options);
    const data = await res.json();

    if (res.ok) {
    }
  }

  // Handlers for text inputs and textareas.
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDirectorChange(e) {
    setDirector(e.target.value);
  }
  function handleYearChange(e) {
    setYear(e.target.value);
  }
  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }
  function handleStoryChange(e) {
    setStory(e.target.value);
  }

  // Handlers for checkboxes
  function handleActionChange() {
    console.log(!action);
    setAction((prevChecked) => {
      return !prevChecked;
    });
  }

  function handleComedyChange() {
    console.log(!comedy);
    setComedy((prevChecked) => {
      return !prevChecked;
    });
  }
  function handleDramaChange() {
    console.log(!drama);
    setDrama((prevChecked) => {
      return !prevChecked;
    });
  }
  function handleFantasyChange() {
    console.log(!fantasy);
    setFantasy((prevChecked) => {
      return !prevChecked;
    });
  }
  function handleHorrorChange() {
    console.log(!horror);
    setHorror((prevChecked) => {
      return !prevChecked;
    });
  }
  function handleRomanceChange() {
    console.log(!romance);
    setRomance((prevChecked) => {
      return !prevChecked;
    });
  }

  function handleThrillerChange() {
    console.log(!thriller);
    setThriller((prevChecked) => {
      return !prevChecked;
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={css.first_section}>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={handleTitleChange} type="text" name="title" id="title" />

        <label htmlFor="director">Director</label>
        <input value={director} onChange={handleDirectorChange} type="text" name="director" id="director" />

        <label htmlFor="year">Year</label>
        <input value={year} onChange={handleYearChange} type="number" name="year" id="year" />

        <label htmlFor="image">Image URL</label>
        <input value={imageUrl} onChange={handleImageChange} type="text" name="image" id="image" />

        <label htmlFor="story">story</label>
        <textarea value={story} onChange={handleStoryChange} name="story" id="story" rows="10"></textarea>
      </div>

      {/* Checkboxes section */}
      <p>Categories</p>
      <div className={css.second_section}>
        <div>
          <input checked={action} onChange={handleActionChange} type="checkbox" name="action" id="action" />
          <label htmlFor="action">Action</label>
        </div>

        <div>
          <input checked={comedy} onChange={handleComedyChange} type="checkbox" name="comedy" id="comedy" />
          <label htmlFor="comedy">Comedy</label>
        </div>

        <div>
          <input checked={drama} onChange={handleDramaChange} type="checkbox" name="drama" id="drama" />
          <label htmlFor="drama">Drama</label>
        </div>

        <div>
          <input checked={fantasy} onChange={handleFantasyChange} type="checkbox" name="fantasy" id="fantasy" />
          <label htmlFor="fantasy">Fantasy</label>
        </div>

        <div>
          <input checked={horror} onChange={handleHorrorChange} type="checkbox" name="horror" id="horror" />
          <label htmlFor="horror">Horror</label>
        </div>

        <div>
          <input checked={romance} onChange={handleRomanceChange} type="checkbox" name="romance" id="romance" />
          <label htmlFor="romance">Romance</label>
        </div>

        <div>
          <input checked={thriller} onChange={handleThrillerChange} type="checkbox" name="thriller" id="thriller" />
          <label htmlFor="thriller">Thriller</label>
        </div>
      </div>
      <button>Save movie</button>
    </form>
  );
};

export default NewMovieForm;
