import { userSchema } from "../schemas/userSchema.js";

export const validCreateUser = (obj) => {
  return userSchema.safeParse(obj);
};
