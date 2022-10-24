const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  top_rated: {
    type: Boolean,
    required: true,
  },
  trending: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
