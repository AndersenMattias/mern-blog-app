import { Schema, model, Document } from 'mongoose';

export interface ILocation extends Document {
  title: string;
  imageUrl: string;
  description: string;
  year: number;
  place: string;
}

const locationSchema = new Schema<ILocation>(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ILocation>('Location', locationSchema);
