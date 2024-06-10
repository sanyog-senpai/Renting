import mongoose from "mongoose";

// Validate before sending data to Database
const userSchema = new mongoose.Schema({
   fullName: {
      type: String,
      maxlength: [100, 'Full name must be less than 100 characters'],
      minlength: [2, 'Full name must be more than 2 characters'],
      required: [true, 'Full name is required']
   },
   email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 55,
   },
   password: {
      type: String,
      minlength: [8, 'Password must be at least 8 characters long'],
      required: [true, "Password is a required field"],
   },
   role: {
      type: String,
      enum: ['renter', 'admin'],
      default: 'renter'
   }
},
   // Adds Created date
   { timestamps: true }
);

// Create Table
export const User = mongoose.model("User", userSchema);