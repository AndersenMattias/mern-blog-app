import { Router } from "express";
import { createUser } from "../controllers/user.controllers";

const router = Router();

router.route('/users')
.post(createUser)

export default router