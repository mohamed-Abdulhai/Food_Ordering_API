import { Router } from "express";
import { addCategory, deleteAllCategories, deleteCategory, getAllCategories, getCategory, updateCategory } from "./category.controller.js";
import {  cheackExistingTitle} from "./category.middleware.js";
import { auth, isAdmin } from "../auth/auth.middleware.js";
import { validate } from "../../validation/validation.js";
import { addCategoryValidationSchema, updateCategoryValidationSchema } from "./category.validation.js";
import { objectIdSchema } from "../../middlewares/globale.middleware.js";

const router = Router()

router.route('/')
.post(validate(addCategoryValidationSchema),auth,isAdmin,cheackExistingTitle,addCategory)
.get(getAllCategories)
.delete(auth,isAdmin,deleteAllCategories)
router.route('/:id')
.put(validate(objectIdSchema),validate(updateCategoryValidationSchema),auth,isAdmin,updateCategory)
.get(validate(objectIdSchema),getCategory)
.delete(auth,isAdmin,validate(objectIdSchema),deleteCategory)








export default router