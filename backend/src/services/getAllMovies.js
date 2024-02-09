import { MovieDao } from "../data-access/index.js";

export async function getAllMovies() {
  const movies = await MovieDao.findAll();
  return movies.map((movie) => movieListItem(movie));
}

function movieListItem(movie) {
  return {
    _id: movie._id,
    title: movie.title,
    year: movie.year,
    director: movie.director,
    bildUrl: movie.poster,
    rating: movie.imdb.rating,
    genre: [movie.genre],
    text: movie.plot,
  };
}
