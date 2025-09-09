import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';
import userRouter from "./routes/user_route.js"

const app=express();
const port=process.env.PORT || 5000;
app.use(express.json());
app.use("/",userRouter)

app.listen(port,()=>{
connectDB()
console.log(`Server is running at ${port}`);
})