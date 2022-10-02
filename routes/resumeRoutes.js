import express from 'express'
import { getOrCreateResume } from '../controllers/resumeController.js'
// import { app } from 'firebase-admin'
import { getResume, createResume, updateResume } from '../controllers/resumeController.js'
import findOrCreateUser from '../middlewares/auth-middleware.js'
const router = express.Router()


router.use(findOrCreateUser)

router.get('/get', getResume)

router.post('/get-or-create', getOrCreateResume)

router.put('/update', updateResume)

// router.delete('/delete', deleteResume)

export default router