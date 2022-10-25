const { default: mongoose } = require("mongoose");

const Movie = require("../models/movies");

const getTopRated = async (req, res) => {
  try {
    const topRatedMovies = await Movie.find({ top_rated: true });

    res.status(200).json(topRatedMovies);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getTrendingMovies = async (req, res) => {
  try {
    const trendingMovies = await Movie.find({ trending: true });

    res.status(200).json(trendingMovies);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Movie.find({}, { categories: 1 });

    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getMoviesInACategory = async (req, res) => {
  const category = req.params.category;

  const movies = await Movie.find({ categories: category.toString() });

  if (!movies) {
    return res.status(404).json({
      error: "No movie",
    });
  }
  res.status(200).json(movies);
};

const getAMovie = async (req, res) => {
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
};

const postAMovie = async (req, res) => {
  const { title, year, director, story, categories, image, trending, top_rated, posted } = req.body;

  // add document to db
  try {
    const movie = await Movie.create({
      title,
      year,
      director,
      story,
      categories,
      image,
      trending,
      top_rated,
      posted: true,
    });
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const updateAMovie = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such movie",
    });
  }

  const movie = await Movie.findOneAndUpdate(
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
};

const deleteAMovie = async (req, res) => {
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

module.exports = {
  getTopRated,
  getTrendingMovies,
  getAllCategories,
  getMoviesInACategory,
  getAMovie,
  postAMovie,
  updateAMovie,
  deleteAMovie,
};
