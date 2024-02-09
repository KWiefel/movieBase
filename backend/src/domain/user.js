export function makeUser({
  name,
  email,
  passwordHash,
  passwordSalt,
  bio,
  profilePictureUrl,
}) {
  if (!name || typeof name !== "string") {
    throw new Error("Please add missing information");
  }

  const user = {
    name,
    email,
    passwordHash,
    passwordSalt,
    bio,
    profilePictureUrl,
  };
  return user;
}
