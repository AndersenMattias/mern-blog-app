import {   Router } from "express";
import { createMemory, getMemories, getMemory } from "../controllers/memory";
import { upload } from "../middleware/multer";



const router = Router()

router.route('/memories')
.get(getMemories)
.post(upload('images-for-application').single('image'), createMemory)

router.route('/memories/:id')
.get(getMemory)

export default router