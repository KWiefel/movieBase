import { makeUser } from "../domain/index.js";
import { getDb } from "./getDb.js";

export async function insertOne(newUser) {
  const db = await getDb();
  const { acknowledged, insertedId } = await db
    .collection("user")
    .insertOne(newUser);
  if (acknowledged) return makeUser({ ...newUser, _id: insertedId });
  else return null;
}
