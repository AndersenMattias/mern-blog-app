import { NextFunction, Request, Response } from 'express';

import User from '../models/User';
import { createError } from '../utils/error';

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).lean();
    res.status(200).send({ message: 'User has been updated!', updatedUser });
  } catch (err) {
    next(createError(500, `Couldn't update user, try again.`));
  }
};
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.findByIdAndDelete(req.params.id).lean();
    res.status(200).send({ message: 'User has been deleted..' });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again!'));
  }
};
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.params.id).lean();
    res.status(200).send({ message: 'User found!', user });
  } catch (err) {
    next(createError(500, `Couldn't find user, try again.`));
  }
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find().lean();
    res.status(200).send({ message: 'Users found!', users });
  } catch (err) {
    next(createError(500, `Couldn't get users, try again.`));
  }
};
