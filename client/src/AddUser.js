import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const nav=useNavigate()
    const[data,setData]=useState({email:"",name:"",phone:"",batch:"",age:""})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    
    }
   
  const Api=async()=>{
    await axios.post("http://localhost:9000/api/students",data)
  }
  useEffect(()=>{
    Api()
  },[])

  let handleSubmit=()=>{
  Api()
  nav('/')
  }
  return (
   <>
   <div>
    
   </div>
   <div className='d-block align-items-center container w-50'>
   <form>
  <div className="">
   
    <input type="email" name='email' placeholder='email' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <br/>
    <input type="text" name="name" placeholder='name' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <br/>

    <input type="tel" name='phone' placeholder='Phone' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <br/>

    <input type="number" name='age' placeholder='age' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
    <br/>

    <input type="text" name='batch'placeholder='batch' onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
 </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary m-3">Submit</button>
</form>
   </div>
   </>
  )
}
export default AddUser
