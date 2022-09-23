import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {url,link} from './App'
import {useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'

function Home() {
//  let context=useContext(CreateElament)

let navigate=useNavigate();
let [data,setData]=useState([])
let [give,setGive]=useState([])


useEffect(()=>{
  getData()
},[])

let getData = async()=>{
  let res= await axios.get(`${url}`)
  setData(res.data)
}

 async function handleDelete(i){
      await axios.delete(`${url}/${i}`)
      getData()
        
  }

  useEffect(()=>{
    giveData()
  },[])
  let giveData = async ()=>{
    let res=await axios.get(`${link}`)
    setGive(res.data)
  }

let handledelete = async(i)=>{
    await axios.delete(`${link}/${i}`)
    giveData()
} 

  return <>
    <div className='container  bg-warning '>
         <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="https://react-bootstrap.netlify.app/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Student Details
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Roll No</th>
          <th>Name</th>
          <th>Standard</th>
          <th>Mark</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {
        data.map((e)=>{
          return <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.rollno}</td>
            <td>{e.name}</td>
            <td>{e.std}</td>
            <td>{e.mark}</td>
           <td><Button variant='primary' onClick={()=>navigate(`/edit-student/${e.id}`)}>Edit</Button>
            &nbsp; &nbsp;
            <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button></td>
          </tr>
          
        })
        
      }
      </tbody>
    </Table>
    </div>
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="https://react-bootstrap.netlify.app/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Teacher Details
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Degree</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {
        give.map((e,i)=>{
          return <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.degree}</td>
           <td> <Button variant='primary' onClick={()=>navigate(`/edit-teacher/${e.id}`)}>Edit</Button>
            &nbsp; &nbsp;
            <Button variant='danger' onClick={()=>handledelete(e.id)}>Delete</Button></td>
          </tr>
          
        })
        
      }
      </tbody>
    </Table>
    </div>
    </div>
    </>
  
}

export default Home