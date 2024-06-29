import { User } from "../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from "../../DB/emails/sendEmail.js"
import { catchError } from "../../errors/catchError.js"
import { AppError } from "../../utilities/AppError.js"

const signup =catchError(async(req,res,next)=>{
    const user = await User.insertMany(req.body)
    if(user) {
        sendEmail(req.body.email)
        res.status(201).json({message:'user created successfully',user})
        
}
})
const signin =catchError( async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email})
    const token = jwt.sign({userID:user.id,role:user.role},process.env.SECRET_KEY)
    if(user && bcrypt.compareSync(req.body.password,user.password) && user.emailVer === true) return res.status(200).json({message:"user signin successfully",token})
        if(!user.emailVer){ 
            next(new AppError('plasse confirm your email',403))
        }
    next(new AppError('incorrect email or password',401))
})

const forgetPassword =catchError(async(req,res,next) =>{

})

const verify = catchError(async (req, res,next) => {
    const { token } = req.params; 
      const decoded = jwt.verify(token, process.env.SECRET_KEY); 
      if (decoded) {
        await User.findOneAndUpdate(
          { email: decoded.email },
          { emailVer: true }
        );
        return res.status(200).json({ message: "success" });
      }
    
  })
export{
    signup,
    signin,
    forgetPassword,
    verify
}