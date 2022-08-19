import mongoose from "mongoose";

const connectDB = async (DATABASE_URL)=>{
  try {
    const DB_OPTIONS ={
      dbName: "resume_builder"
      
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log("connected successfully...")
  } catch (error) {
    console.log(error)
  }
}

export default connectDB

// pass- resume_builder123!@#