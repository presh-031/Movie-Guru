const express = require("express");
const router = express.Router();

// GET a movie
router.get("/", (req, res) => {
  res.send({
    message: "WORKS",
  });
});

// GET Top rated movies

// GET trending movies

// POST a new movie

// UPDATE a movie

//  DELETE a movie

//  GET movie categories

//  GET all movies in a category

module.exports = router;
