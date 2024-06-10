import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { User } from "./user.entity.js"
import { loginValidationSchema, userValidationSchema } from "./user.validation.js";

export const RegisterUser = async (req, res) => {
   let newUser = req.body;

   // Validate data
   try {
      await userValidationSchema.validateAsync(newUser)
   } catch (error) {
      return res.status(400).send({ message: error.message })
   }

   // Check if user with same email exists
   const user = await User.findOne({ email: newUser.email })

   // if user exists, throw error
   if (user) {
      return res.status(409).send({ message: "Email address already in use !" })
   }

   // password => hash usign bcrypt
   const hashedPassword = await bcrypt.hash(newUser.password, 5)

   // Replace password with hashedPassword 
   newUser.password = hashedPassword

   // Create user with hashedPassword
   await User.create(newUser);

   // Send Final Response
   return res.status(200).send({ message: "User Registered Successfully" })
}

export const LoginUser = async (req, res) => {
   let loginCredentials = req.body;

   // Validate data
   try {
      await loginValidationSchema.validateAsync(loginCredentials)
   } catch (error) {
      return res.status(500).send({ message: error.message })
   }

   // find user with email
   const user = await User.findOne({ email: loginCredentials.email })

   // if not user, throw error
   if (!user) {
      return res.status(200).send({ message: "Invalid Credentials" })
   }

   // compare password with hashed password
   const passwordMatch = await bcrypt.compare(loginCredentials.password, user.password)

   // password validation
   if (!passwordMatch) {
      return res.status(200).send({ message: "Invalid Credentials" })
   }

   // Access token via JWT
   const jwtSecretKey = process.env.JWT_SECRET_KEY;
   const accessToken = jwt.sign({email: user.email}, jwtSecretKey, {
      expiresIn: "1d"
   })
   console.log(accessToken)

   // removing password to send in response
   user.password = undefined;

   // Send Final Response
   return res.status(404).send({ user, accessToken })
}