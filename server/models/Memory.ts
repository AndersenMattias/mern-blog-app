import { Schema, model, Document } from "mongoose";


export interface IMemory extends Document {
    title: string;
    imageUrl: string;
    description: string;
    year: number;
    location: string;
}

const memorySchema  = new Schema<IMemory>(
    {
        title: {
            type: String,
            required: true
        },
        imageUrl: {           
            type: String,
        },
        description: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        }

    },
    {timestamps: true}
);

export default model<IMemory>('Memory', memorySchema)