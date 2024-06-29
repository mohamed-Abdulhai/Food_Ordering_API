import Joi from "joi";

export const signupValidationSchema = Joi.object({
    name:Joi.string().alphanum().min(5).max(32).required(),
    email:Joi.string().email().min(5).max(50).required(),
    phone:Joi.string().length(10).pattern(/^((050|051|052|055|056|054){1}([0-9]{7}))$/).required(),
    password:Joi.string().min(8).max(50).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'the password most be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character').required()
})
export const signinValidationSchema = Joi.object({
    email:Joi.string().email().min(5).max(50).required(),
    password:Joi.string().min(8).max(50).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'the password most be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character').required()
})
