import jwt from "jsonwebtoken"
import {User} from "../user/user.entity.js"

export const isRenter = async (req, res, next) => {
   // Step 1: only renter should post product
   const authorization = req?.headers?.authorization;
   const splittedArray = authorization?.split(" ")
   const token = splittedArray?.length === 2 && splittedArray[1]

   // token check
   if (!token) {
      return res.status(401).send({ message: "Unauthorized" })
   }

   try {
      // decrypt token and extract email
      // find email by user
      const userData = jwt.verify(token, process.env.JWT_SECRET_KEY)

      const user = await User.findOne({ email: userData.email })

      // if not user throw error
      if (!user) {
         return res.status(401).send({ message: "Unauthorized User" })
      }

      // User role must be seller 
      if (user.role !== "renter") {
         return res.status(401).send({ message: "You must be seller to create product" })
      }

      // add user to req
      req.loggedInUser = user;
      next();

   } catch (error) {
      // If any error while decription throw error
      return res.status(401).send({ message: "Unauthorized" })
   }
}

export const isAdmin= async (req, res, next) => {
   // Step 1: admin authorization
   const authorization = req?.headers?.authorization;
   const splittedArray = authorization?.split(" ")
   const token = splittedArray?.length === 2 && splittedArray[1]

   // token check
   if (!token) {
      return res.status(401).send({ message: "Unauthorized" })
   }

   try {
      // decrypt token and extract email
      // find email by user
      const userData = jwt.verify(token, process.env.JWT_SECRET_KEY)

      const user = await User.findOne({ email: userData.email })

      // if not user throw error
      if (!user) {
         return res.status(401).send({ message: "Unauthorized User" })
      }

      // User role must be seller 
      if (user.role !== "admin") {
         return res.status(401).send({ message: "You must be admin to operate this section" })
      }

      // add user to req
      req.loggedInUser = user;
      next();

   } catch (error) {
      // If any error while decription throw error
      return res.status(401).send({ message: "Unauthorized" })
   }
}