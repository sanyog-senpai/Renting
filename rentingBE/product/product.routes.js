import express from 'express';
import { isRenter } from "../auth/auth.middleware.js";
import { addProduct } from "./product.service.js";

const router = express.Router();

router.post("/product/create", isRenter, addProduct)

export default router