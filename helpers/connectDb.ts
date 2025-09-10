import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
    if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGODB_ATLAS_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);
        console.log("Connected to MongoDB Atlas!");
        
    }
};

export default connectDb;
