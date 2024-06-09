import zod from "zod";

export const userSchema = zod.object({
  name: zod.string({
    invalid_type_error: "usuario debería ser un string",
    required_error: "nombre de usuario es requerido",
  }),
  state: zod.boolean(),
  role: zod.string(),
});
