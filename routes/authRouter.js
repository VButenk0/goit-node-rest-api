import express from "express";

import authController from "../controllers/authController.js";

import validateBody from "../helpers/validateBody.js";

import {
  signupSchema,
  signinSchema,
  verifySchema,
} from "../schemas/userSchemas.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(signupSchema), authController.signup);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
  "/verify",
  validateBody(verifySchema),
  authController.resendVerify
);

authRouter.post("/login", validateBody(signinSchema), authController.signin);

authRouter.get("/current", authenticate, authController.current);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.patch("/avatars", authenticate, authController.changeAvatar);

export default authRouter;
