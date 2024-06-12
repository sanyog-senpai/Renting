import Joi from "joi"

// Validation for User Registration
export const userValidationSchema = Joi.object({
   fullName: Joi.string().min(2).max(100).required(),
   email: Joi.string().email().lowercase().min(5).max(55).trim().required().lowercase(),
   password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).trim().required(),
})

// Validation for User Registration
   export const loginValidationSchema = Joi.object({
      email: Joi.string().email().lowercase().min(5).max(55).trim().required("Email Address is required").lowercase(),
   password: Joi.string().trim().required(),
   })