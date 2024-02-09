import crypto from "crypto";
import { UserDao } from "../data-access/index.js";

// logic for hashing password
export function hash(inputStr) {
  return crypto.createHash("sha512").update(inputStr).digest("hex");
}

// logic for generating random hash "salt"
export function generateRandomSalt() {
  const BYTES_LENGTH = 64;
  return crypto.randomBytes(BYTES_LENGTH).toString("base64");
}

// logic for generating combination of passwordHash and "salt"
export function hashPassword(password, salt) {
  if (!password || !salt)
    throw new Error("password and salt must be defined for hashing");
  return hash(`${password}${salt}`);
}

// userInfo := { name*, email*, password*, bio, profilePictureUrl }
export async function registerUser({
  name,
  email,
  password,
  bio,
  profilePictureUrl,
}) {
  const passwordSalt = generateRandomSalt();
  const passwordHash = hashPassword(password, passwordSalt);

  const user = {
    name,
    email,
    passwordHash,
    passwordSalt,
    bio,
    profilePictureUrl,
  };
  return UserDao.insertOne(user);

  // return userToProfileInfo(user);
}

function userToProfileInfo({ name, email, bio, profilePictureUrl }) {
  return { name, email, bio, profilePictureUrl };
}
