import { Schema, model, Document } from 'mongoose';

export interface ILocation extends Document {
  locationName: string;
  imageUrl: string;
  description: string;
  date: Date;
  createdBy: string;
  rating: number;
}

const locationSchema = new Schema<ILocation>(
  {
    locationName: {
      type: String,
      required: [true, 'What is the name of the location?'],
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'Please describe the location and experience.'],
      maxlength: 150,
    },
    date: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: String,
      required: [true, 'Which user is uploading this?'],
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model<ILocation>('Location', locationSchema);
