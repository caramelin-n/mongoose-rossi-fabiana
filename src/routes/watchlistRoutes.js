import { Router } from "express";
import { createWatchlist, deleteWatchlist, getAllWatchlist, getWatchlistById, updateWatchlist } from "../controllers/watchlistControllers.js";

const wlRouter = Router();

wlRouter.post("/", createWatchlist);
wlRouter.get("/", getAllWatchlist);
wlRouter.get("/", getWatchlistById);
wlRouter.put("/", updateWatchlist);
wlRouter.delete("/", deleteWatchlist);

export default wlRouter;