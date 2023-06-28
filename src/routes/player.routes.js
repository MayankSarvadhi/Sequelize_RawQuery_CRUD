import express from "express";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { PlayerController } from "../controller/index.controller.js";
export const PlayerRouter = express.Router();

PlayerRouter.post("/", asyncWrapper(PlayerController.insert));
PlayerRouter.delete("/:id", asyncWrapper(PlayerController.destroys));
PlayerRouter.put("/:id", asyncWrapper(PlayerController.updatesData));
