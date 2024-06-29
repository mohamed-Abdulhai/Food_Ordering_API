import { Router } from "express";
import { addMeal,deleteAllMeals,deleteMeal,getAllMeals,getMeal,updateMeal } from "./meal.controller.js";
import {objectIdSchema, } from './../../middlewares/globale.middleware.js'
import { cheackExistingName } from "./meal.middleware.js";
import { auth, isAdmin } from "../auth/auth.middleware.js";
import { validate } from "../../validation/validation.js";
import { addMealValidationSchema, updateMealValidationSchema } from "./meal.validation.js";

const router = Router()

router.route('/').get(getAllMeals)
.post(auth,isAdmin,validate(addMealValidationSchema),cheackExistingName,addMeal)
.delete(auth,isAdmin,deleteAllMeals)
router.route('/:id')
.put(auth,isAdmin,validate(objectIdSchema),validate(updateMealValidationSchema),updateMeal)
.get(validate(objectIdSchema),getMeal)
.delete(auth,isAdmin,validate(objectIdSchema),deleteMeal)








export default router