import cors from 'cors'
import morgan from 'morgan'
import { dbConecct } from "./DB/dbConfig.js"
import v1Router from './Routers/v1Router.js'
export const bootstrap = (app) =>{
    dbConecct()
    app.use(morgan('dev'))
    app.use(cors())
    app.use('/api/v1',v1Router)
}