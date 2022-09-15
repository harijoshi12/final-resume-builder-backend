import express from "express";
import { currentUser, getUser } from "../controllers/userController.js";
const router = express.Router()
// import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

router.get("/", getUser)

router.patch("/current-user", currentUser)


export default router
