import User from '../models/User';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error';
import jwt from 'jsonwebtoken';
import config from '../config/config';

export const register = async (req: any, res: any, next: any) => {
  const { username, email, country } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
      avatar: req.file.location,
      country,
    });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (err) {
    next(err);
  }
};
export const login = async (req: any, res: any, next: any) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or username!'));

    const token = jwt.sign(
      { id: user._id, isMember: user.isMember },
      config.JWT
    );

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: 'logged in' });
  } catch (err) {
    next(err);
  }
};
