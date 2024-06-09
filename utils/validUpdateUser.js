import { userSchema } from "../schemas/userSchema.js";

export const validUpdateUser = (obj) => {
  return userSchema.partial().safeParse(obj);
};
