import express from 'express';
import { login, register } from '../controllers/auth';

import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user';
import { upload } from '../middleware/multer';

import { verifyUser } from '../utils/verifyAuth';

const router = express.Router();

//Create
// router.post('/users', createUser);

//Update
router.put('/users/:id', verifyUser, updateUser);

//Delete
router.delete('/users/:id', verifyUser, deleteUser);

//Get One
router.post('/users', getUser);

//Get All
router.get('/users', getUsers);

// Register User
router.post(
  '/users/register',
  upload('images-for-application').single('avatar'),
  register
);

// Login User
router.post('/users/login', login);

export default router;
