import { Router } from "express";
import { createDirector, findDirectorById, getAllDirectors } from "../controllers/directorControllers.js";

const directorRouter = Router();

directorRouter.post("/", createDirector);
directorRouter.get("/", getAllDirectors);
directorRouter.get("/:id", findDirectorById);

export default directorRouter;