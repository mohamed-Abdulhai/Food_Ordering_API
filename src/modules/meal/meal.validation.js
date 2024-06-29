import Joi from "joi"

export const addMealValidationSchema = Joi.object({
    name:Joi.string().min(5).max(32).required(),
    description:Joi.string().min(10).max(1000).required(),
    price:Joi.number().min(1).required(),
    discountPrice:Joi.number(),
    category:Joi.string().hex().length(24).required(),
    image:Joi.string()

})

export const updateMealValidationSchema = Joi.object({
    name:Joi.string().min(5).max(32),
    description:Joi.string().min(10).max(1000),
    price:Joi.number().min(1),
    discountPrice:Joi.number(),
    category:Joi.string().hex().length(24),
    image:Joi.string()
})
