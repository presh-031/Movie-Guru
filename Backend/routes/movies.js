const express = require("express");
const router = express.Router();

// GET a movie
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such movie",
    });
  }

  const movie = await Movie.findById(id);

  if (!movie) {
    return res.status(404).json({
      error: "No such movie",
    });
  }
  res.status(200).json(movie);
});

// GET Top rated movies
router.get("/top-rated", async (req, res) => {
  try {
    const topRatedMovies = await Workout.find({ "top-rated": true }).sort({ createdAt: -1 });

    res.status(200).json(topRatedMovies);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// GET trending movies

// POST a new movie
router.post("/", async (req, res) => {
  const { title, year, director, story, categories, image } = req.body;

  // add document to db
  try {
    const movie = await Movie.create({
      title,
      year,
      director,
      story,
      categories,
      image,
    }); //It returns the new document created (along with an _id)
    res.status(200).json(movie);
  } catch (err) {
    // console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
});

// UPDATE a movie
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such movie",
    });
  }

  const workout = await Movie.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!movie) {
    return res.status(400).json({
      error: "No such movie to update",
    });
  }

  res.status(200).json(movie);
});

//  DELETE a movie
const deleteMovie = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such movie",
    });
  }

  const movie = await Movie.findOneAndDelete({ _id: id });

  if (!movie) {
    return res.status(400).json({
      error: "No such movie available",
    });
  }

  res.status(200).json(movie);
};

//  GET movie categories

//  GET all movies in a category

module.exports = router;
