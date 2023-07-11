import mongoose from "mongoose";
async function connect(){
  await  mongoose.connect(process.env.URL)
    .then(()=>console.log("connected to mongoose "))
    .catch(()=>console.log("mongoose error "))
 } 
export default connect
