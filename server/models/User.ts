import mongoose from 'mongoose';
import { UserDocument } from '../interfaces/user';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
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
    avatar: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    isMember: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UserSchema.virtual('locations', {
  ref: 'Location',
  localField: '_id',
  foreignField: 'owner',
});

export default mongoose.model<UserDocument>('User', UserSchema);
