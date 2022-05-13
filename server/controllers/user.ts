import { NextFunction, Request, Response } from 'express';

import User from '../models/User';

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
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.findByIdAndDelete(req.params.id).lean();
    res.status(200).json('User has been deleted.');
  } catch (err) {
    next(err);
  }
};
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.params.id).lean();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find().lean();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
