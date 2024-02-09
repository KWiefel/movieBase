import { MovieDao } from "../data-access/index.js";

export async function getOneMovie(movieId) {
  const foundMovie = await MovieDao.findById(movieId);
  if (!foundMovie) throw new Error("Could not find Movie " + movieId);
  return movieListItem(foundMovie);
}

function movieListItem(movie) {
  return {
    _id: movie._id,
    title: movie.title,
    year: movie.year,
    director: movie.director,
    bildUrl: movie.poster,
    rating: movie.imdb.rating,
    genres: movie.genres,
    text: movie.plot,
    runtime: movie.runtime,
  };
}
