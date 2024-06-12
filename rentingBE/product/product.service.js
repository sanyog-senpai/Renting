
import { productValidationSchema } from "./product.validation.js"
import { Product } from "./product.entity.js";

export const addProduct = async (req, res) => {
   // Step 2: product post
   const newProduct = req.body;
   // Validate new Product
   try {
      await productValidationSchema.validateAsync(newProduct)
   } catch (error) {
      return res.status(400).send({ message: error.message })
   }

   // Add Product
   await Product.create(newProduct);

   // Final Response
   return res.status(200).send({ message: "Product added successfully" })
}