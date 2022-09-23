import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {url} from '../App'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function CreateStudent() {
  
  let navigate=useNavigate()
  let [rollno,setRollno]=useState(0)
  let [name,setName]=useState("")
  let[std,setStd]=useState(0)
  let [mark,setMark]=useState(0)

  

  let handleSubmit= async()=>{
    let data={
      rollno,
      name,
      std,
      mark
    }
    let res=await axios.post(`${url}`,data)
    
   if(res.status===201)
    navigate('/home')
  }

  return <>
    <div className='row container-fluid mt-4 '>
      <div className='col'></div>
      <div className='col'>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="text" placeholder="Enter Roll No" onChange={(e)=>{
          setRollno(e.target.value)
        }}/>
       </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Standard</Form.Label>
        <Form.Control type="text" placeholder="Enter Standard" onChange={(e)=>setStd(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mark</Form.Label>
        <Form.Control type="number" placeholder="Enter Mark" onChange={(e)=>setMark(e.target.value)}/>
      </Form.Group>
     
      <Button variant="success" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
      <div className='col'></div>
      </div>
    
  </>
}

export default CreateStudent