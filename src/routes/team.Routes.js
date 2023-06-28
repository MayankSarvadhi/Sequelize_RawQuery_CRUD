import express from "express";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { TeamController } from "../controller/index.controller.js";
export const TeamRouter = express.Router();

TeamRouter.post("/", asyncWrapper(TeamController.insert));
TeamRouter.delete("/:id", asyncWrapper(TeamController.destroys));
TeamRouter.put("/:id", asyncWrapper(TeamController.updatesData));
