import { AppError } from "../utilities/AppError.js";



export const validate = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate({...req.body,...req.params}, { abortEarly: false });
      if (error) {
        const { details } = error;
        const messages = details.map(i => i.message);
       next(new AppError(messages,403))
      }
      next();
    };
  };