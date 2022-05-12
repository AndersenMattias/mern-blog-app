import { Schema, model } from 'mongoose';
import IUser from '../interfaces/user';

import bcryptjs from 'bcryptjs';

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

UserSchema.virtual('locations', {
  ref: 'Location',
  localField: '_id',
  foreignField: 'owner',
});

// Hash the plain text password before saving
UserSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await Promise.resolve(bcryptjs.hash(user.password, 8));
  }

  next();
});

export default model<IUser>('User', UserSchema);
