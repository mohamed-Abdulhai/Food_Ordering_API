import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[5,'the username must be 5 or more chracters'],
        maxLingth:[32,'the username must be 32 or less'],
        required:[true,'name is required'],
        trim:true
    },
    email:{
        type:String,
        minLength:[5,'the username must be 8 or more chracters'],
        maxLingth:[50,'the username must be 50 or less'],
        required:[true,'email is required'],
        unique:[true,'the email is most be unique'],
        lowercase:true,
        trim:true
    },
    phone:{
        type:String,
        unique:[true,'the phone is most be unique'],
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    emailVer:{
        type:Boolean,
        default:false
    },
    age:Number,
    adress:Array,
    gendar:{
        type:String,
        enum:['male','female'],
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    isBlocked:{
        type:Boolean,
        default:false
    },

},{timestamps:true}
)
export const User = mongoose.model('user',schema)