import express from "express"
import createContactForm from "../controllers/contactFormController.js"

const router = express.Router()

router.post('/', createContactForm)

export default router