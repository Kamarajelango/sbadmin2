import './App.css';
import CreateStudent from './Componets/CreateStudent';
import CreateTeacher from './Componets/CreateTeacher';
import Sidebar from './Componets/Sidebar'
import Home from './Home';
import  React,{useState} from "react";
import { BrowserRouter , Route, Routes,Navigate} from "react-router-dom";
import EditStudent from './Componets/EditStudent';
import EditTeacher from './Componets/EditTeacher';
export const url='https://62d26820afb0b03fc5a5f15e.mockapi.io/students'
export const link='https://62d26820afb0b03fc5a5f15e.mockapi.io/teacher'


export const CreateElament=React.createContext();
function App() {
  let [data,setData]=useState([    
    {
      rollno:"101",
      name:"Arun",
      std:"10",
      mark:"400"
    },
    {
      rollno:"102",
      name:"Bala",
      std:"10",
      mark:"470"
    },
    {
      rollno:"103",
      name:"Chandru",
      std:"10",
      mark:"380"
    }
  
  ])
let [teach,setTeach]=useState([
  {
    name:"Karthick",
    email:"karthick@gmail.com",
    mobile:"9876543210",
    degree:"M.sc,."
  },
  {
    name:"Thiru",
    email:"Thiru@gmail.com",
    mobile:"9876543210",
    degree:"M.sc,."
  }
])

  return <>
 <div className='main-wrap'>
  <BrowserRouter>
  <Sidebar/> 
  <CreateElament.Provider value={{data,setData,teach,setTeach}}>   
    <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='create-student' element={<CreateStudent />}/>
          <Route path='create-teacher' element={<CreateTeacher />}/>
          <Route path='*' element={<Navigate to='/home'/>}/>
          <Route path='edit-student/:id' element={<EditStudent/>}/>
          <Route path='edit-teacher/:id' element={<EditTeacher/>}/>
      </Routes>
      </CreateElament.Provider>
  </BrowserRouter>
   
  </div>
  </>
}

export default App;



