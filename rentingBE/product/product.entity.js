import mongoose from "mongoose";
import { productStatus, productCondition } from "./../utils/product.utils.js"

const productSchema = new mongoose.Schema({
   imageUrl: {
      type: String,
      required: false,
   },
   title: {
      type: String,
      required: [true, 'Product title is required'],
      maxlength: [100, 'Product title must be less than 100 characters']
   },
   price: {
      type: Number,
      min: [0, 'Product price must be a positive number'],
      required: [true, 'Product price is required'],
   },
   description: {
      type: String,
      required: [true, 'Product description is required'],
      maxlength: [1000, 'Product description must be less than 1000 characters']
   },
   condition: {
      type: String,
      enum: productCondition,
      required: [true, 'Product condition is required'],
   },
   status: {
      type: String,
      default: 'rent',
      required: [true, 'Product status is required'],
      enum: productStatus,
   },
   approvedByAdmin: {
      type: Boolean,
      default: false
   },
},
   { timestamps: true },)

export const Product = mongoose.model("Product", productSchema)