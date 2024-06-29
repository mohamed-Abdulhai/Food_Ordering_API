export const globaleError = (err,req,res,next)=>{
    if(process.env.MODE == 'dev'){
        return res.status(err.statusCode||500).json({error:err.message,stack:err.stack}) 
    }
    return res.status(err.statusCode||500).json({error:err.message})
}