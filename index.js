import express from "express";
import { createUser } from "./utils/createUser.js";
import { getUsers } from "./utils/getUsers.js";
import { getUsersById } from "./utils/getUsersById.js";
import { getUsersByName } from "./utils/getUsersByName.js";
import { updateUser } from "./utils/updateUser.js";
import { validCreateUser } from "./utils/validCreateUser.js";
import { validUpdateUser } from "./utils/validUpdateUser.js";

const api = express();
const PORT = process.env.PORT || 3000;

api.disable("x-powered-by");
api.use(express.json());

api.listen(PORT, () => {
  console.log(`Server up in http://localhost:${PORT}`);
});

//  Rutas

api.get("/", (_, res) => {
  res.json({ msg: "hola edar" });
});

api.get("/users", (req, res) => {
  const { name } = req.query;
  if (name) return res.json(getUsersByName(name));
  res.json(getUsers());
});

api.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = getUsersById(Number(id));
  res.json(user);
});

api.post("/users", (req, res) => {
  const { success, data, error } = validCreateUser(req.body);
  if (!success) return res.status(400).json({ error });
  createUser(data);
  res.status(201).json();
});

api.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { success, data, error } = validUpdateUser(req.body);
  if (!id || !success) return res.status(400).json({ error });

  const userUpdared = updateUser(id, data);
  if (!userUpdared) return res.status(400).json();
  res.status(200).json(userUpdared);
});

api.use((_, res) => {
  res.status(404).json({ msg: "Error 404" });
});
