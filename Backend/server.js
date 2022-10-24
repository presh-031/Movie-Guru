const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

// routes imports
const moviesRoutes = require("./routes/movies");

// middleware
app.use(express.json());
app.use(morgan("dev"));

// connect to db
mongoose
  .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Listen for requests
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Connected to db & Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.use("/api/movies", moviesRoutes);
