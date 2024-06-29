import { catchError } from "../../errors/catchError.js"
import { Category } from "../../DB/models/category.model.js"
import { AppError } from "../../utilities/AppError.js"
import slugify from "slugify"

const addCategory = catchError(async(req,res) =>{
    const {title} = req.body
    const slug = slugify(title)
    const category = await Category.insertMany({title,slug})
    return res.status(201).json({message:'category created successfully',category})
})

const updateCategory = catchError(async(req,res,next) =>{
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
    );
    if (!category) {
        next(new AppError('Category not found',404))
    }
        return res.status(200).json({ message: 'Category updated successfully', category });
    
    
})

const deleteCategory = catchError(async(req,res) =>{
    const category = await Category.findByIdAndDelete(req.params.id)
    if (!category) {
        next(new AppError('Category not found',404))
    }
    return res.status(200).json({message:'category deleted successfully',category})
})

const getAllCategories = catchError(async(req,res) =>{
    const categories = await Category.find()
    return res.status(200).json({message:'success',categories})
})

const getCategory = catchError(async(req,res,next) =>{
    const category = await Category.findById(req.params.id)
    if (!category) {
        next(new AppError('Category not found',404))
    }
    return res.status(200).json({message:'success',category})
})

const deleteAllCategories = catchError(async(req,res) =>{
    const categories = await Category.deleteMany()
    // if (!categories) return res.status(404).json({ message: "Category not found" });
    return res.status(200).json({message:'categories deleted successfully',categories})
})

export {
    addCategory,updateCategory,deleteCategory,getAllCategories,getCategory,deleteAllCategories
}