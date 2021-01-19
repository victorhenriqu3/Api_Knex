const express = require("express");
const routes = express.Router();

const useController = require("./controllers/useController");

routes.get("/users", useController.index);
routes.post("/users", useController.create);
routes.put("/users/:id", useController.update);
routes.delete("/users/:id", useController.delete);

module.exports = routes;
