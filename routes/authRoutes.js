import express from "express";
import { adminlogin } from "../controller/authController.js";
 

const authRouter = express.Router();

authRouter.post('/login',adminlogin);
 

export default authRouter;