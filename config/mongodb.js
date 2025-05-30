import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/banquet`, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        });
    
        console.log("✅ Database Connected!");
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
    
};

export default connectDB;
