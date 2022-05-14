import { Schema, model, Document } from 'mongoose';
import { IPost } from '../interfaces/post';

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    bodyText: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdBy: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default model<IPost>('Post', PostSchema);
