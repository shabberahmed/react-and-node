import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Data = () => {
    const[data,setData]=useState([])
    const nav=useNavigate()
    const Api=async()=>{
        const response=await axios.get("http://localhost:9000/api/students")
        console.log(response.data.message)
        try{
            const x=response.data.message
        setData(x)
        }
        catch{
            alert("err")
        }
    }
    const deleteApi=async(id)=>{
        const response=await axios.delete(`http://localhost:9000/api/students/${id}`)
        Api()
    }
//   const editApi=async(id)=>{
//         const res=await axios.get(`http://localhost:9000/api/students/${id}`)
//         const data=res.data
//         try{
             
//             nav("/edit",data)
//         }
//         catch{
//         }
//     }
    useEffect(()=>{
        Api()
    },[])
  return (
   <>
    <div>
        <button className='btn btn-success' onClick={()=>nav("/")}>home</button>
        <table className='table table-primary'>
            <thead>
            <tr>
                <th>name</th> <th>email</th> <th>age</th><th>phone</th><th>batch</th><th className='text-center'>actions</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((val)=>{
                    return(
                        <>
                        <tr>
                            <td>{val.name}</td><td>{val.email}</td><td>{val.age}</td><td>{val.phone}</td><td>{val.batch}</td><td>
                                
                                <button className='btn btn-danger' onClick={()=>deleteApi(val._id)} >delete</button>
                                <button className='btn btn-warning ms-2' ><Link style={{textDecoration:"none"}} className='text-light' to={`/edit/${val._id}`}>edit</Link></button>
                                </td>
                        </tr>
                        </>
                    )
                })
            }
            </tbody>
        </table>
    </div>
   </>
  )
}

export default Data
