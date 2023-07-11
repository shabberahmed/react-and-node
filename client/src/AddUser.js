import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {
    const[data,setData]=useState({email:"",name:"",phone:"",batch:"",age:""})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
  const Api=async()=>{
    const res=await axios.post("localhost:9000/api/students",data)
  }
  let handleSubmit=()=>{
    Api()
  }
  return (
   <>
   <div>
   <form>
  <div className="mb-3">
   
    <input type="email" name='email' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <input type="text" name="name" onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <input type="tel" name='phone' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <input type="number" name='age' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <input type="text" name='batch' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
 </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
   </div>
   </>
  )
}

export default AddUser
