import express from "express";
const router = express.Router()
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

// Route level middleware - to protect route
router.use('/change-password', checkUserAuth)
router.use('/logged-user', checkUserAuth)

// Public Routes
router.post('/register', UserController.userRegistration)
router.post("/login", UserController.userLogin)
router.post('/reset-password-email-link', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes
router.post('/change-password', UserController.changeUserPassword)
router.get('/logged-user', UserController.loggedUser)

export default router

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MmY4YzdiZTc2YjY1ZGJkOGQ0ZTE1YTUiLCJpYXQiOjE2NjA0NzEyNzUsImV4cCI6MTY2MDkwMzI3NX0.IalcGSwYfIMrbiIIYIAayvCLH7EiJtkQX2_vXgjs3ts