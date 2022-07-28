import express from 'express';
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  getUrl,
  deletePosts,
} from '../controllers/post';
import { upload } from '../middleware/s3';

import { verifyUser } from '../utils/verifyAuth';

const router = express.Router();

//   upload('images-for-application').single('image'),

router.get('/s3Url', upload('portfolio').single('image'), getUrl);

// Create post with image
router.post(
  '/posts/',

  createPost
);

//Update
router.put('/posts/:id', updatePost);

//Delete all posts
router.delete('/posts/:id', deletePost);
router.delete('/posts', deletePosts);

//Get One
router.get('/posts/:id', getPost);

//Get All
router.get('/posts/', getPosts);

export default router;
