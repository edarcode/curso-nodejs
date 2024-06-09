import { users } from "../data/users.js";

export const updateUser = (id, data) => {
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex === -1) return undefined;
  const newUser = { ...users[userIndex], ...data };
  users[userIndex] = newUser;
  return newUser;
};
