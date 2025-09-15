import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movieControllers.js";

const movieRouter = Router();

movieRouter.post("/", createMovie);
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

export default movieRouter;
