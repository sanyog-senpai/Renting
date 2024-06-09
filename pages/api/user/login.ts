import dbConnect from '@/libs/mongodb';
import User from '@/models/user.model';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from "bcryptjs";

type ResponseData = {
   isLoggedIn: boolean;
   message: string;
   fullName?: string;
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   // Login User 
   if (req.method === 'POST') {
      try {
         const { email, password } = req.body;
         await dbConnect();
         const existingUser = await User.findOne({ email: email });

         if (!existingUser) {
            return res.status(400).json({
               isLoggedIn: false,
               message: 'User with this email does not exist'
            });
         }

         // Compare hashed password
         const passwordMatch = await bcrypt.compare(password, existingUser.password);
         if (!passwordMatch) {
            return res.status(400).json({
               isLoggedIn: false,
               message: 'Invalid Credentials'
            });
         }

         return res.setHeader('Set-Cookie', `email=${email}; Path=/; HttpOnly`).status(200).json({
            isLoggedIn: true,
            message: 'User login successful!',
            fullName: existingUser.fullName,
         });

      } catch (error) {
         return res.status(500).json({
            isLoggedIn: false,
            message: 'Internal server error'
         });
      }
   }

   // Sending allowed Header 
   else {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
   }
}
