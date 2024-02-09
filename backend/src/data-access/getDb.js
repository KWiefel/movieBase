import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// const url = process.env.MONGODB_URL;
const client = new MongoClient(
  "mongodb+srv://devkwiefel427:0000@cluster0.fxno5st.mongodb.net/"
);

let _db;

export async function getDb() {
  if (_db && _db instanceof Db) return _db;
  await client.connect();
  const db = client.db("video");
  _db = db;
  return db;
}
