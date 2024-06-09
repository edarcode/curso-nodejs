import { users } from "../data/users.js";

export const getUsersByName = (name) => {
  const newUsers = users.filter((user) => user.name.includes(name));
  return newUsers;
};
