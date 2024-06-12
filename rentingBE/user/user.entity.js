import mongoose from "mongoose";

// Validate before sending data to Database
const userSchema = new mongoose.Schema({
   fullName: {
      type: String,
      maxlength: [100, 'Name too long, use nickname'],
      minlength: [2, 'Full name must be more than 2 characters'],
      required: [true, 'Full Name is required']
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
      match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/],
      minlength: [8, 'Password must be at least 8 characters long'],
      required: [true, "Password is a required field"],
      trim: true,
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