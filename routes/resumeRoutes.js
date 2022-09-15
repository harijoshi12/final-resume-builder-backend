import express from 'express'
import { getResume, createResume, updateResume } from '../controllers/resumeController.js'
const router = express.Router()

router.get('/', getResume)

router.post('/create', createResume)

router.put('/update', updateResume)

// router.delete('/delete', deleteResume)

export default router