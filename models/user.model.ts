import mongoose, { Schema, Document, models, model } from "mongoose";

interface IUser extends Document {
   fullName: string;
   email: string;
   password: string;
   role: string;
}

const userSchema = new Schema<IUser>(
   {
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
         required: [true, 'Email is required'],
         match: [
            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            'Please fill a valid email address'
         ]
      },
      password: {
         type: String,
         required: [true, 'Password is required'],
         minlength: [8, 'Password must be at least 8 characters long']
      },
      role: {
         type: String,
         enum: ['renter', 'admin'],
         default: 'renter'
      }
   },
   { timestamps: true }
);

const User = models.User || model<IUser>("User", userSchema);

export default User;
