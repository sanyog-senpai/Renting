import mongoose from "mongoose";

const databaseURI = process.env.DATABASE_URI

export const databaseConnect = async () => {
   try {
      await mongoose.connect(databaseURI);
      console.log("Database Connected Successfully");
   } catch (error) {
      console.log("Database Connection failed");
      console.log("Database Error", error.message);
   }
}