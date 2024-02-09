import express from "express";
import { MovieService } from "../services/index.js";

const movieRouter = express.Router();

// get all movies
movieRouter.get("/", async function getAllMoviesCtrl(_, res) {
  try {
    const movies = await MovieService.getAllMovies();
    res.json({ success: true, result: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not recieve movies",
    });
  }
});

// get all fav
movieRouter.get("/fav", async function getAllFavCtrl(_, res) {
  try {
    const movies = await MovieService.getAllFav();
    res.json({ success: true, result: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not recieve fav movies",
    });
  }
});

// add a fav
movieRouter.post(
  "/addFav",
  express.json(),
  async function postAddNewFav(req, res) {
    try {
      const movieId = req.params.movieId;
      const foundMovie = await MovieService.getOneMovie(movieId);
      const result = await MovieService.addFav(foundMovie);
      res.status(201).json({ success: true, result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error,
        message: error.message || "Could not add fav movie",
      });
    }
  }
);

// get one movie
movieRouter.get("/:movieId", async function getOneMovieCtrl(req, res) {
  try {
    const movieId = req.params.movieId;
    const result = await MovieService.getOneMovie(movieId);
    console.log(result);
    res.json({ success: true, result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not recieve Movie",
    });
  }
});

export default movieRouter;
