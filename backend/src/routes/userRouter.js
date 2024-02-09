import express from "express";
import { UserService } from "../services/index.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  express.json(), // body parser, für die user infos im body
  async function postRegisterUserCtrl(req, res) {
    try {
      const result = await UserService.registerUser(req.body);
      res.json({ success: true, result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error,
        message: error.message || "Could not register user",
      });
    }
  }
);

export default userRouter;
