import { Router } from "express";
import { signin, signup,forgetPassword, verify } from "./auth.controller.js";
import { cheackExistingEmail, cheackExistingPhone, hashPassword } from "./auth.middleware.js";
import { validate } from "../../validation/validation.js";
import { signinValidationSchema, signupValidationSchema } from "./auth.validation.js";


const router = Router()

router.post('/signup',validate(signupValidationSchema),cheackExistingPhone,cheackExistingEmail,hashPassword,signup)
router.post('/signin',validate(signinValidationSchema),signin)
router.post('/forget-password',forgetPassword)
router.get('/verify/:token', verify);



export default router