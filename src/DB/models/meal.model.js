import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[5,'the name must be 5 or more chracters'],
        maxLingth:[32,'the name must be 32 or less'],
        unique:[true,'the name is most be unique'],
        required:[true,'name is required'],
        trim:true
    },
    description:{
        type:String,
        minLength:[10,'the description must be 10 or more chracters'],
        maxLingth:[1000,'the description must be 1000 or less'],
        required:[true,'description is required'],
        trim:true
    },
    price:{
        type:Number,
        min:1,
        required:[true,'price is required'],
    },
    discountPrice:{
        type:Number,
        min:1,
    },
    status:{
        type:String,
        enum:['available','unavailable'],
        default:'available'
    },
    image:String,
    category:{
        type:String,
        ref:'category',
        required:[true,'category is required'],
    },
})

export const Meal = mongoose.model('meal',schema)