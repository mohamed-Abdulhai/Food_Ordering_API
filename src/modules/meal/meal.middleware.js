import { Meal } from "../../DB/models/meal.model.js"
import { AppError } from "../../utilities/AppError.js"


export const cheackExistingName = async(req,res,next) =>{
    const existName = await Meal.findOne({name:req.body.name})
    if(existName) {
        next(new AppError('The name is already exist',409))
    }
        next()
}