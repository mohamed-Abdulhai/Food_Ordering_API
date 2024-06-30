import { Meal } from "../../DB/models/meal.model.js";
import { catchError } from "../../errors/catchError.js";
import { AppError } from "../../utilities/AppError.js";
import cloudinary from '../../fileUpload/cloudinary.js';
import fs from 'fs';
import path from 'path';

const addMeal = catchError(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
    }

    const imagePath = path.join('uploads', req.file.filename);

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(imagePath, { folder: 'meals' });

    // Delete the temporary file after uploading to Cloudinary
    fs.unlinkSync(imagePath);

    const meal = await Meal.create({ ...req.body, image: result.secure_url });
    return res.status(201).json({ message: "Meal created successfully", meal });
});

const updateMeal = catchError(async (req, res, next) => {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
        return next(new AppError('Meal not found', 404));
    }

    if (req.file) {
        const imagePath = path.join('uploads', req.file.filename);
        
        // Upload the new image to Cloudinary
        const result = await cloudinary.uploader.upload(imagePath, { folder: 'meals' });

        // Delete the temporary file after uploading to Cloudinary
        fs.unlinkSync(imagePath);

        // Delete the old image from Cloudinary
        const oldImagePublicId = meal.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(oldImagePublicId);

        meal.image = result.secure_url;
    }

    meal.title = req.body.title || meal.title;
    meal.description = req.body.description || meal.description;
    await meal.save();

    return res.status(200).json({ message: 'Meal updated successfully', meal });
});

const deleteMeal = catchError(async (req, res, next) => {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    if (!meal) {
        return next(new AppError('Meal not found', 404));
    }

    // Delete the image from Cloudinary
    const imagePublicId = meal.image.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(imagePublicId);

    return res.status(200).json({ message: 'Meal deleted successfully' });
});

const getAllMeals = catchError(async (req, res) => {
    const meals = await Meal.find().populate('category', 'title');
    return res.status(200).json({ message: 'Success', meals });
});

const getMeal = catchError(async (req, res, next) => {
    const meal = await Meal.findById(req.params.id).populate('category', 'title');
    if (!meal) {
        return next(new AppError('Meal not found', 404));
    }
    return res.status(200).json({ message: 'Success', meal });
});

const deleteAllMeals = catchError(async (req, res) => {
    const meals = await Meal.find();
    
    for (let meal of meals) {
        const imagePublicId = meal.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(imagePublicId);
    }

    await Meal.deleteMany();
    return res.status(200).json({ message: "All meals deleted successfully" });
});

export {
    addMeal,
    updateMeal,
    deleteMeal,
    getAllMeals,
    getMeal,
    deleteAllMeals
};
