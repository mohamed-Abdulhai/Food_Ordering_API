import { User } from "../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppError } from "../../utilities/AppError.js"
export const cheackExistingEmail = async(req,res,next) =>{
    const existEmail = await User.findOne({email:req.body.email})
    if(existEmail){
        
        next(new AppError('The user is already exist',409))
    }
        next()
}

export const hashPassword = (req,res,next) =>{
    const salt = Number(process.env.SALT)
    const hashedPassword = bcrypt.hashSync(req.body.password,salt)

    req.body.password = hashedPassword
    next()
}
export const cheackExistingPhone = async(req,res,next) =>{
    const existphone = await User.findOne({phone:req.body.phone})
    if(existphone) {
        
        next(new AppError('The phone is already exist',409))
    }
        next()
}

export const auth = async(req,res,next) =>{
    const token = jwt.verify(req.headers.token,process.env.SECRET_KEY,(error,decoded) =>{
        if(error) {
            next(new AppError('You are not authorized.',401))
        }
        if(decoded){
            req.token = decoded
            next()
        }
    })
}

export const isAdmin = async (req, res, next) => {
    if (req.token && req.token.role === 'admin') {
        next();
    } else {
        next(new AppError('You are not authorized.',401))
    }
};
export const isHeUser = async (req,res,next) =>{
    if(req.token&&req.token.userID === req.params.id || req.token.role === 'admin'){
        next()
    } else {
        next(new AppError('You are not authorized.',401))
    }

}