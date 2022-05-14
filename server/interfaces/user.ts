import mongoose from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  isMember: boolean;
  isAdmin: boolean;
}

export interface UserDocument extends IUser, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
