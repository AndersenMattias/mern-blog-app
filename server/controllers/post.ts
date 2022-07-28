import { Request, Response, NextFunction } from 'express';
import { generateUploadURL } from '../middleware/s3';
import Post from '../models/Post';
import { createError } from '../utils/error';

// Upload image
export const getUrl = async (req: any, res: Response, next: NextFunction) => {
  try {
    const url = await generateUploadURL();
    res.send({ url });
  } catch (e) {
    next(createError(500, `Something went wrong, try again.`));
  }
};

// Create a Post
export const createPost = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { title, bodyText, image, author, createdAt, categories } = req.body;

  const newPost = new Post({
    title,
    bodyText,
    image,
    author,
    createdAt,
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

// update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post?.author === req.body.username) {
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
    if (post?.author === req.body.username) {
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
export const deletePosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    try {
      await Post.deleteMany();
      res.status(200).send({ message: 'Post has been deleted..' });
    } catch (err) {
      next(createError(500, 'Something went wrong, try again'));
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
    const post = await Post.find({});
    console.log(post);
    return res.status(200).send({ message: 'Posts found!', post });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};
