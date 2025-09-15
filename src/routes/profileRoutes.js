import { Router } from "express";
import { createProfile, deleteProfile, getAllProfile, getProfileById, updateProfile } from "../controllers/profileControllers.js";

const profileRouter = Router();

profileRouter.post("/", createProfile);
profileRouter.get("/", getAllProfile);
profileRouter.get("/:id", getProfileById);
profileRouter.put("/:id", updateProfile);
profileRouter.delete("/:id", deleteProfile);

export default profileRouter;