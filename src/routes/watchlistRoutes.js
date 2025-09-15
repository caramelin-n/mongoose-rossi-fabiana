import { Router } from "express";
import { addMovieToUser, createWatchlist, deleteWatchlist, getAllWatchlist, getWatchlistById, updateWatchlist } from "../controllers/watchlistControllers.js";

const wlRouter = Router();

wlRouter.post("/", createWatchlist);
wlRouter.get("/", getAllWatchlist);
wlRouter.get("/:id", getWatchlistById);
wlRouter.put("/:id", updateWatchlist);
wlRouter.delete("/:id", deleteWatchlist);
wlRouter.post("/", addMovieToUser);

export default wlRouter;