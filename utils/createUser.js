import { randomUUID } from "node:crypto";
import { users } from "../data/users.js";

export const createUser = ({ name, state, role }) => {
  const newUser = { id: randomUUID(), name, state, role };
  users.push(newUser);
  return newUser;
};
