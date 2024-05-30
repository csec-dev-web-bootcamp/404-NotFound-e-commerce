import express from "express";
import { asyncHandler } from "../common/async-handler";
import { createUser, loginUser } from "./auth.service";
import generateJwtToken from "./jwt/generate-jwt-token";
import { validationPipe } from "../common/validation.pipe";
import { loginSchema, registerSchema } from "./auth.schema";

const authController = express.Router();

authController.post(
  "/register",
  validationPipe(registerSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    console.log({ data });
    const user = await createUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  })
);

authController.post(
  "/login",
  validationPipe(loginSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await loginUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  })
);
authController.get(
  "signout",
  asyncHandler(async (req, res) => {
    try {
      res.clearCookie("accessToken");
      res.sendStatus(200).json("User has logged out");
    } catch (error) {}
  })
);

export default authController;
