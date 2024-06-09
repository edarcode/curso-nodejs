import { users } from "../data/users.js";

export const getUsersById = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};
