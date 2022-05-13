import { Schema, model, Document } from 'mongoose';

interface ILocation extends Document {
  title: string;
  locationName: string;
  country: string;
  city: string;
  description: string;
  date: Date;
  image: string;
  createdBy: string;
  rating: number;
}

const LocationSchema = new Schema<ILocation>(
  {
    title: {
      type: String,
      required: true,
    },
    locationName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      maxlength: 300,
    },
    date: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
    },
    createdBy: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

export default model<ILocation>('Location', LocationSchema);
