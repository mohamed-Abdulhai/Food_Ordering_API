import mongoose from "mongoose"


export const dbConecct = () =>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('Database is connected successfully');
    }).catch((error) =>{
        console.log('faild to connect to database: =>',error);
    })
    
}