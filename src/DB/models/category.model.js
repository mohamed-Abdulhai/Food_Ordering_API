import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        minLength:[3,'the title must be 3 or more chracters'],
        maxLength:32,
        trim:true,
        required:[true,'the title is required'],
        unique:[true,'the title is most be unique']
    },
    slug:String,
},{timestamps:true})

export const Category = mongoose.model('category',schema) 