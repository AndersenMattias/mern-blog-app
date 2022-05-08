import mongoose from 'mongoose';
import 'dotenv/config'


export async function connect () : Promise<void> {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('DB is connected');
    } catch (e) {
        console.log(e);
    }
};

