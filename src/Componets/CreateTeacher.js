import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {link} from '../App'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function CreateTeacher() {
  
  let navigate=useNavigate()

  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState(0)
  let [degree,setDegree]=useState("") 

  async function handleSubmit(){
    let data={
      name,
      email,
      mobile,
      degree
    }
    let res = await axios.post(`${link}`,data)

    if(res.data)
    navigate('/home')
  }

  return <>
    <div className='row container-fluid mt-4'>
      <div className='col'></div>
      <div className='col'>

        <Form >
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{
              setName(e.target.value)
            }}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="number" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Degree</Form.Label>
            <Form.Control type="text" placeholder="Enter Degree" onChange={(e)=>setDegree(e.target.value)}/>
          </Form.Group>

          <Button variant="success" onClick={()=>handleSubmit()}>
            Submit
          </Button>
        </Form></div>
      <div className='col'></div></div>
  </>
}

export default CreateTeacher
