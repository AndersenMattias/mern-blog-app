import {   Router } from "express";
import { createMemory, getMemories, getMemory } from "../controllers/memory.controller";
import multer from "../libs/multer";


const router = Router()

router.route('/memories')
.get(getMemories)
.post(multer.single('image'), createMemory)

router.route('/memories/:id')
.get(getMemory)

export default router