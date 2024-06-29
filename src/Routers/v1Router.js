import { Router } from "express";
import authRouter from './../modules/auth/auth.router.js'
import categoryRouter from './../modules/category/category.router.js'
import mealRouter from './../modules/meal/meal.router.js'
import userRouter from './../modules/user/user.router.js'

const router = Router()


router.use('/auth',authRouter)
router.use('/users',userRouter)
router.use('/categories',categoryRouter)
router.use('/meals',mealRouter)



export default router
