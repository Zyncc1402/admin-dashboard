import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://Chandan:Chandan1402@cluster0.gmwqwi1.mongodb.net/dashboard?retryWrites=true&w=majority"
        );
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
        throw new Error("Failed to connect to DB")
    }
}