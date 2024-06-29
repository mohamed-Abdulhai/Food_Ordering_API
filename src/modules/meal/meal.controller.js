import { catchError } from "../../errors/catchError.js"
import { Meal } from "../../DB/models/meal.model.js"
import { AppError } from "../../utilities/AppError.js"

const addMeal = catchError(async(req,res) =>{
    const meal = await Meal.insertMany(req.body)
    return res.status(201).json({message:"meal created successfully",meal})
})

const updateMeal =catchError(async(req,res,next) =>{
    const meal = await Meal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!meal) {
        next(new AppError('meal not found',404))
    }meal
    return res.status(200).json({message:'meal deleted successfully',meal})
})

const deleteMeal = catchError(async(req,res,next) =>{
    const meal = await Meal.findByIdAndDelete(req.params.id,req.body)
    if(!meal){
        
         next(new AppError('The title is already exist',409))
        }
        return res.status(200).json({message:'meal deleted successfully',meal})
})

const getAllMeals = catchError(async(req,res) =>{
    const meals = await Meal.find().populate('category',"title")
    return res.status(200).json({message:'success',meals})
}
)
const getMeal = catchError(async(req,res) =>{
    const meal = await Meal.findById(req.params.id).populate('category','title')
    if(!meal){
        next(new AppError('The title is already exist',409))
       }
        return res.status(200).json({message:'success',meal})
})

const deleteAllMeals = catchError(async(req,res) =>{
    const meals = await Meal.deleteMany()
    return res.status(200).json({message:"meal deleted successfully",meals})
}
)
export {
    addMeal,updateMeal,deleteMeal,getAllMeals,getMeal,deleteAllMeals
}