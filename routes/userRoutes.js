import express from "express";
import { currentUser, getUser } from "../controllers/userController.js";
const router = express.Router();
import findOrCreateUser from "../middlewares/auth-middleware.js";

router.get("/", getUser)

router.post("/current-user", findOrCreateUser, currentUser)


export default router
