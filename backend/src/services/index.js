import { getAllMovies } from "./getAllMovies.js";
import { getOneMovie } from "./getOneMovie.js";
import { getAllFav } from "./getAllFav.js";
import { registerUser } from "./registerUser.js";

export const MovieService = {
  getAllMovies,
  getOneMovie,
  getAllFav,
};

export const UserService = {
  registerUser,
};
