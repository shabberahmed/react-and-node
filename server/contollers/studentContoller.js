
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


export const postStudent = async (req, res) => {
    const { name, email, age, phone, batch } = req.body;
    let existingStudentData;
    try {
      existingStudentData = await studentModel.findOne({ email });
    } catch (err) {
      console.log(err);
    }
  
    if (existingStudentData) {
      res.json({
        message: "Data already exists",
      });
      return; // Return after sending the response
    }
  
    const newStudent = new studentModel({
      name: name,
      age: age,
      email: email,
      phone: phone,
      batch: batch,
    });
  
    try {
      await newStudent.save(); 
      res.send("Data saved successfully")
    } catch (err) {
      console.log(err);
      res.json({ message: err });
    }
  };
  
// ----delete contoller
export const deleteStudent=async(req,res)=>{
    const id=req.params.id
    console.log(id)
    try{
      await studentModel.findByIdAndDelete(id)
       res.send("deleted succesfully")
    }
    catch(err){
        res.send("id not found")
        console.log(err,"id not found")
    }
}

// .....edit contoller
export const editId=async(req,res)=>{
    const id=req.params.id

    try{
     const data= await studentModel.findById(id)
     console.log(data)
     res.json({
        message:data
     })
    }
    catch{
        console.log("id not found")
    }
}
export const editStudent = async (req,res) => {
    const id =req.params.id
    // console.log(id)
    try {
      await studentModel.findByIdAndUpdate(id, req.body);
      
      res.send("element updated");
    } catch (err) {
      res.send("some error");
    }
  };
  
  