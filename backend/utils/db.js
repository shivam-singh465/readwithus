
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if(!conn){
    console.log('MongoDB Connection Failed');
    }
    console.log(`MongoDB Connected: ${conn.connection.host}`);


}
export default connectDB;