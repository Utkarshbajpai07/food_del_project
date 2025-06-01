import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://utkarshb928:kunal123@cluster0.1tllf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}