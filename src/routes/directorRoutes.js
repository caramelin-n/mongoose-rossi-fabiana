import { Router } from "express";
import { createDirector, deleteDirector, findDirectorById, getAllDirectors, updateDirector } from "../controllers/directorControllers.js";

const directorRouter = Router();

directorRouter.post("/", createDirector);
directorRouter.get("/", getAllDirectors);
directorRouter.get("/:id", findDirectorById);
directorRouter.put("/:id", updateDirector);
directorRouter.delete("/:id", deleteDirector);

export default directorRouter;