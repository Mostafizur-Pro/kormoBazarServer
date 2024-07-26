// user.controller.ts
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { responseForData } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { userService } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await userService.createUser(userData);
  const { password, ...others } = result.toObject();
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: others,
  });
});

export const userController = {
  createUser,
};
