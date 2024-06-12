import Joi from "joi"
import { productCondition, productStatus } from "../utils/product.utils.js"

// Validation for User Registration
export const productValidationSchema = Joi.object({
   imageUrl: Joi.string().allow(null, ""),
   title: Joi.string().min(2).max(55).required(),
   price: Joi.number().min(0).required(),
   description: Joi.string().min(100).max(1000).required(),
   condition: Joi.valid(...productCondition).required(),
   status: Joi.valid(...productStatus).required(),
})