import { Router } from "express";
import { createUser } from "../controllers/user";

const router = Router();

router.route('/users')
.post( createUser)

export default router