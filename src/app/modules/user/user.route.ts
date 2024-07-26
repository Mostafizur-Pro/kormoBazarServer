// user.routes.ts
import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// create user
router.post("/create-user", userController.createUser);

export const userRouter = router;
