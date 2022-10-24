const express = require("express");
const router = express.Router();

const Movie = require("../models/movies");

// GET Top rated movies
router.get("/top-rated", async (req, res) => {
  try {
    const topRatedMovies = await Movie.find({ top_rated: true });

    res.status(200).json(topRatedMovies);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// GET trending movies
router.get("/trending", async (req, res) => {
  try {
    const trendingMovies = await Movie.find({ trending: true });

    res.status(200).json(trendingMovies);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

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

// POST a new movie
router.post("/", async (req, res) => {
  const { title, year, director, story, categories, image, trending, top_rated } = req.body;

  // add document to db
  try {
    const movie = await Movie.create({
      title,
      year,
      director,
      story,
      categories,
      image,
    });
    res.status(200).json(movie);
  } catch (err) {
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

  const Movie = await Movie.findOneAndUpdate(
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
router.delete("/:id", async (req, res) => {
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
});

//  GET movie categories
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await Movie.find({}, { categories });

//     res.status(200).json(categories);
//   } catch (err) {
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// });

//  GET all movies in a category

module.exports = router;
