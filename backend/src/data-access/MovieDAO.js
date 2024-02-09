import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

export async function findAll() {
  const db = await getDb();
  const movieArray = await db.collection("movieDetails").find({}).toArray();
  return movieArray;
}

export async function findFav() {
  const db = await getDb();
  const movieArray = await db.collection("movieFav").find({}).toArray();
  return movieArray;
}

export async function insertOne(movieInfo) {
  const db = await getDb();
  const { acknowledged, insertedId } = await db
    .collection("movieFav")
    .insertOne(movieInfo);
  if (acknowledged) return movieListItem({ ...movieInfo, _id: insertedId });
  else return null;
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

export async function findById(movieId) {
  console.log(movieId);
  const db = await getDb();
  const movie = await db
    .collection("movieDetails")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });
  if (!movie) throw new Error("Movie with this _id doesn't exist");
  return movie;
}
