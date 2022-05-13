import jwt from 'jsonwebtoken';
import config from '../config/config';
import { createError } from '../utils/error';

export const verifyToken = (req: any, res: any, next: any) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'You are not authenticated!'));
  }

  jwt.verify(token, config.JWT, (err: any, user: any) => {
    if (err) return next(createError(403, 'Token is not valid!'));
    req.user = user;
    next();
  });
};

export const verifyUser = (req: any, res: any, next: any) => {
  verifyToken(req, res, (next: any) => {
    if (req.user.id === req.params.id || req.user.isMember) {
      next();
    } else {
      return next(createError(403, 'You are not authorized!'));
    }
  });
};
