import express from "express";
import { login, logout, signup, getsignup } from "../controllers/authController.js";

const router = express.Router();

// console.log(signup());

router.post('/signup', signup);

router.get('/getsignup', getsignup);

router.post("/login", login);

router.post("/logout", logout);


export default router;
