import mongoose from "mongoose";

// Connect to MongoDB Atlas
const MONGO_URI = "mongodb+srv://joellkebret05:dv94gHEcYFNAR@huntertavern-signup.llsi2.mongodb.net/?retryWrites=true&w=majority&appName=huntertavern-signup";

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("✅ MongoDB connected successfully");
})
.catch((error) => {
  console.error("❌ MongoDB connection failed:", error.message);
});

// Define Schema for user login
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },  
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
});

// Create a model (collection) in the database
const collection = mongoose.model("accounts", newSchema);

export default collection;