import { catchError } from "../../errors/catchError.js"
import { User } from "../../DB/models/user.model.js"

const updateUser = catchError(async(req,res,next) =>{

})

const deleteUser =catchError(async() =>{

})

const getUser = catchError(async(req,res) =>{
    const user = await User.findById(req.params.id)
    res.status(200).json({message:"success",user})
})

const getAllUsers = catchError(async(req,res)=>{
    const users = await User.find()
    res.status(200).json({message:"success",users})
})

const deleteAllUsers = catchError(async(req,res) =>{
    const users = await User.deleteMany()
    res.status(200).json({message:"success",users})
})

export{
    updateUser,deleteUser,getUser,getAllUsers,deleteAllUsers
}