import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {url} from '../App'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

function EditStudent() {
  
  let navigate=useNavigate()
  let params=useParams();

  let [rollno,setRollno]=useState(0)
  let [name,setName]=useState("")
  let[std,setStd]=useState("")
  let [mark,setMark]=useState(0)

  useEffect(()=>{
    getData()
  },[])

  let getData = async() =>{
    let res= await axios.get(`${url}/${params.id}`)
    setRollno(res.data.rollno)
    setName(res.data.name)
    setStd(res.data.std)
    setMark(res.data.mark)
  }

  let handleSubmit= async()=>{
    let data={
      rollno,
      name,
      std,
      mark
    }
    await axios.put(`${url}/${params.id}`,data)
    // let student=[...context.data]
    // student.splice(params.id,1,data)
    // context.setData(student)
    navigate('/home')
  }

  return <>
      <div className='row container-fluid mt-4'>
      <div className='col'></div>
      <div className='col'>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="text" value={rollno} placeholder="Enter Roll No" onChange={(e)=>{
          setRollno(e.target.value)
        }}/>
       </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Standard</Form.Label>
        <Form.Control type="text" value={std} placeholder="Enter Standard" onChange={(e)=>setStd(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mark</Form.Label>
        <Form.Control type="number" value={mark} placeholder="Enter Mark" onChange={(e)=>setMark(e.target.value)}/>
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

export default EditStudent