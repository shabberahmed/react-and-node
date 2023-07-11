import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    phone:Number,
    batch:String
})

export const studentModel=mongoose.model("FSD",studentSchema)