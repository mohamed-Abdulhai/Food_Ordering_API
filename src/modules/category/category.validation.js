import Joi from "joi";

export const addCategoryValidationSchema = Joi.object({
    title:Joi.string().min(3).max(32).required().messages({
        'any.required':"id is required",
        'string.min':"the title to short",
        'string.max':"the title to long",
    }),
})

export const updateCategoryValidationSchema = Joi.object({
    title:Joi.string().min(3).max(32).required().messages({
        'any.required':"id is required",
        'string.min':"the title to short",
        'string.max':"the title to long",
    }),
    id:Joi.string().hex().length(24).required().messages({
        'any.required':"id is required",
        'string.length':"must be 24 char",
        'string.hex':"must be hexadismle"
    })
})