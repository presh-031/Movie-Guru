const express = require("express");

const router = express.Router();

const {
  getTopRated,
  getTrendingMovies,
  getAllCategories,
  getMoviesInACategory,
  getAMovie,
  postAMovie,
  updateAMovie,
  deleteAMovie,
} = require("../controllers/moviesControllers");

// GET Top rated movies
router.get("/top-rated", getTopRated);

// GET trending movies
router.get("/trending", getTrendingMovies);

//  GET movie categories
router.get("/categories", getAllCategories);

//  GET all movies in a category
router.get("/:category", getMoviesInACategory);

// GET a movie
router.get("/:id", getAMovie);

// POST a new movie
router.post("/", postAMovie);

// UPDATE a movie
router.patch("/:id", updateAMovie);

//  DELETE a movie
router.delete("/:id", deleteAMovie);

module.exports = router;
