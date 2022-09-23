import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {link} from '../App'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

function EditTeacher() {
  
  let params=useParams()
 
  let navigate=useNavigate()
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState("")
  let [degree,setDegree]=useState("") 

  useEffect(()=>{
    getData()
  },[])
  let getData= async()=>{
    let res = await axios.get(`${link}/${params.id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setMobile(res.data.mobile)
    setDegree(res.data.degree)
  }

  async function handleSubmit(){
    let data={
      name,
      email,
      mobile,
      degree
    }
    let res =await axios.put(`${link}/${params.id}`,data)
    if(res.status === 200)
    navigate('/home')
  }

  return <>
    <div className='row container-fluid mt-4'>
      <div className='col'></div>
      <div className='col'>

        <Form >
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>{
              setName(e.target.value)
            }}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="number" value={mobile} placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Degree</Form.Label>
            <Form.Control type="text" value={degree} placeholder="Enter Degree" onChange={(e)=>setDegree(e.target.value)}/>
          </Form.Group>

          <Button variant="success" onClick={()=>handleSubmit()}>
            Submit
          </Button>
        </Form></div>
      <div className='col'></div></div>
  </>
}

export default EditTeacher