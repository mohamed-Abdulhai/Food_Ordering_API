import Joi from "joi";

export const addCategoryValidationSchema = Joi.object({
    title:Joi.string().min(3).max(32).required()
})

export const updateCategoryValidationSchema = Joi.object({
    title:Joi.string().min(3).max(32)
})