import express from 'express';
import { login, register } from '../controllers/auth';

import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user';
import { upload } from '../middleware/multer';

import { verifyUser } from '../utils/verifyAuth';

const router = express.Router();

//Update
router.put('/users/:id', updateUser);

//Delete
router.delete('/users/:id', deleteUser);

//Get One
router.get('/users/:id', getUser);

//Get All
router.get('/users', getUsers);

// Register User
router.post(
  '/users/register',
  upload('images-for-application').single('profilePic'),
  register
);

// Login User
router.post('/users/login', login);

export default router;
