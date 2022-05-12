import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: number | string;
  imageUrl: string;
}

const userSchema = new Schema<IUser>(
  {
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
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.virtual('locations', {
  ref: 'Location',
  localField: '_id',
  foreignField: 'owner',
});

export default model<IUser>('User', userSchema);
