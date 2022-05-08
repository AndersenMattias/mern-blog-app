import {   Router } from "express";
import { createMemory, getMemory } from "../controllers/memory.controller";
import multer from "../libs/multer";


const router = Router()

router.route('/memories').post(multer.single('image'), createMemory)

router.route('/memories/:id')
.get(getMemory)

export default router