
import { studentModel } from "../models/studentModel.js"
// ...get students 
export const getStudents=async(req,res)=>{
    let  studentData;
    try{
      studentData= await studentModel.find({})
   
     
    }
    catch(err){
        console.log("students not found",err)
    }
    if(!studentData){
        res.send("no data")
    }
    res.json({
        message:studentData
    })
}

// -----psot students
export const postStudent=async(req,res)=>{
    const{name,email,age,phone,batch}=req.body
    let existingStudentData;
    try{
        existingStudentData=await studentModel.findOne({email})
    }
    catch(err){
        console.log(err)
    }
    if(existingStudentData){
        res.json({
            message:"data already exist"
        })
    }
    const newStudent=new studentModel({
        name:name,
        age:age,
        email:email,
        phone:phone,
        batch:batch
    })
    try{
        newStudent.save()
       
    }
    catch(err){
        res.json({message:err})

    }
    res.send("data sent")
}
 


