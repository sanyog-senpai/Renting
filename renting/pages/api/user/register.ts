import dbConnect from '@/libs/mongodb';
import User from '@/models/user.model';
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs";

type ResponseData = {
   message: string
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   // Register New User 
   if (req.method === 'POST') {
      try {
         const { fullName, email, password } = req.body;

         // Connect Database
         await dbConnect();

         // Check if user with email exists
         const existingUser = await User.findOne({ email: email }).select('_id');
         if (existingUser) {
            return res.status(409).json({ message: 'Email address already in use.' });
         }

         // Hashing Password 
         const hashedPassword = await bcrypt.hash(password, 6)

         // Create new user
         const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
         });

         await newUser.save();

         res.status(201).json({ message: 'User registered successfully!' });
      } catch (error) {
         console.log("Error Message: ", error)
      }

   }

   // Sending allowed Header 
   else {
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
   }
}