import express from 'express';
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
} from '../controllers/post';

import { upload } from '../middleware/multer';
import { verifyUser } from '../utils/verifyAuth';

const router = express.Router();

// upload('images-for-application').single('image'),

// Create post with image
router.post(
  '/posts',

  createPost
);

//Update
router.put('/posts/:id', updatePost);

//Delete
router.delete('/posts/:id', deletePost);

//Get One
router.get('/posts/:id', getPost);

//Get All
router.get('/posts', getPosts);

export default router;
