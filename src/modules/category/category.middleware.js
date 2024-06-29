import { Category } from "../../DB/models/category.model.js"
import { AppError } from "../../utilities/AppError.js"


export const cheackExistingTitle = async(req,res,next) =>{
    const existTitle = await Category.findOne({title:req.body.title})
    if(existTitle) {
        next(new AppError('The title is already exist',409))
        return res.status(400).json({message:'The title is already exist'})
    }
        next()
}
