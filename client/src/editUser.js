import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditUser = () => {

const {id}=useParams()

    const[data,setData]=useState({email:"",name:"",phone:"",batch:"",age:""})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const nav=useNavigate()
    const Api=async()=>{
        const response=await axios.get(`http://localhost:9000/api/students/${id}`)
        console.log(response.data.message)
        try{
            const x=response.data.message
        setData(x)
        }
        catch{
            alert("err")
        }
    }
    const Apiput=async()=>{
        await axios.put(`http://localhost:9000/api/students/${id}`,data)
    }

 
    useEffect(()=>{
        Api()
    },[])
    useEffect(()=>{
        Apiput()
    },[])
    const handleSubmit=async()=>{
    Apiput()
   nav("/")
    }
  
      return (
       <>
       <div className='d-block align-items-center container w-50'>
       <form onSubmit={handleSubmit}>
      <div className="mb-3">
       
        <input type="email" name='email' placeholder='email' value={data.email} onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
        <br/>
        <input type="text" name="name" placeholder='name' value={data.name} onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
        <br/>
    
        <input type="tel" name='phone' placeholder='Phone' value={data.phone} onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
        <br/>
    
        <input type="number" name='age' placeholder='age' value={data.age} onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
        <br/>
    
        <input type="text" name='batch'placeholder='batch' value={data.batch} onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
     </div>
      <button type="submit"  className="btn btn-primary">Submit</button>
    </form>
       </div>
       </>
      )
      
}
export default EditUser