import Joi from "joi"

// Validation for User Registration
export const userValidationSchema = Joi.object({
   fullName: Joi.string().min(2).max(55).required(),
   email: Joi.string().email().lowercase().min(5).max(55).required(),
   password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).trim().required(),
})

// Validation for User Registration
   export const loginValidationSchema = Joi.object({
      email: Joi.string().email().lowercase().min(5).max(55).required(),
      password: Joi.string().trim().required(),
   })