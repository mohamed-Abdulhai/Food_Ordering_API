process.on('uncaughtException',(err)=>{
    console.log('Error:',err);
})
import express from 'express'
import dotenv from 'dotenv'
import {bootstrap} from './src/bootstrap.js'
import { AppError } from './src/utilities/AppError.js'
import { globaleError } from './src/errors/globaleError.middleware.js'
dotenv.config()
const port = process.env.PORT 
const app = express()
app.use(express.json())
bootstrap(app)


app.use('*',(req,res,next)=>{
    next(new AppError(`Not Found this end point ${req.originalUrl}`,404))
})
app.use(globaleError)
process.on('unhandledRejection',(err)=>{
    console.log('Error:',err);
})
app.listen(port, () =>  console.log(`server is runing on http://localhost:${port} `))