import express from "express";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { AppError } from "../utils/AppError.js";
export const router = express.Router();

import { TeamRouter } from "./team.Routes.js";
import { PlayerRouter } from "./player.routes.js";

router.use("/Team", TeamRouter);
router.use("/Player", PlayerRouter);


const invalidedRouter = asyncWrapper((req, res, next) => {
  return next(new AppError(`${req.url} - Bad Request`, 400));
});
router.all("*", invalidedRouter);
