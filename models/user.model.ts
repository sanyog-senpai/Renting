import { timeStamp } from "console"
import mongoose, { Schema, Document, models, model } from "mongoose";

interface IUser extends Document {
   fullName: string;
   email: string;
   password: string;
}

const userSchema = new Schema<IUser>({
   fullName: {
      type: String,
      requred: true
   },
   email: {
      type: String,
      requred: true
   },
   password: {
      type: String,
      requred: true
   },
},
{ timestamps: true })


const User  = models.User || mongoose.model("User", userSchema)

export default User;