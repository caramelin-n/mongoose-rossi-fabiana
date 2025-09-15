import { Router } from "express";
import { addMovieToUser, createWatchlist, deleteWatchlist, getAllWatchlist, getWatchlistById, updateWatchlist } from "../controllers/watchlistControllers.js";

const wlRouter = Router();

wlRouter.post("/", createWatchlist);
wlRouter.get("/", getAllWatchlist);
wlRouter.get("/", getWatchlistById);
wlRouter.put("/", updateWatchlist);
wlRouter.delete("/", deleteWatchlist);
wlRouter.post("/api/addmovie", addMovieToUser);

export default wlRouter;