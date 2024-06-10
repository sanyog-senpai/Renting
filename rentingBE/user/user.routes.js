import express from "express";
import { LoginUser, RegisterUser } from "./user.service.js";

const router = express.Router();

// Register User
router.post("/user/register", RegisterUser)

// Login User
router.post("/user/login", LoginUser)

export default router