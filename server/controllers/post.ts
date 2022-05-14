import { Request, Response, NextFunction } from 'express';
import Post from '../models/Post';
import { createError } from '../utils/error';

// Create a Post
export const createPost = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  const { title, bodyText, image, createdBy, categories } = req.body;

  const newPost = new Post({
    title,
    bodyText,
    image,
    createdBy,
    categories,
  });

  console.log(newPost);

  try {
    const savedPost = await newPost.save();
    res.status(201).send({ message: 'Post has been created!', savedPost });
  } catch (err) {
    console.log(err);
    next(createError(500, `Couldn't create post, try again.`));
  }
};

// update a location
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post?.createdBy === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).send({ message: 'Post has been updated', updatedPost });
      } catch (err) {
        next(createError(500, 'Invalid updates!'));
      }
    } else {
      res.status(401).send({ message: 'You can update only your post!' });
    }
  } catch (err) {
    next(createError(500, 'Something went wrong, try again!'));
  }
};

// delete a Post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post?.createdBy === req.body.username) {
      try {
        await post?.delete();
        res.status(200).send({ message: 'Post has been deleted..' });
      } catch (err) {
        next(createError(500, 'Something went wrong, try again'));
      }
    } else {
      res.status(401).send({ message: 'You can delete only your post!' });
    }
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};

// get one Post
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send({ message: 'Post found', post });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};

// get all Posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.find().lean();
    return res.status(200).send({ message: 'Posts found!', post });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};