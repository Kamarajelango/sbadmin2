import React from 'react'
import {Link} from 'react-router-dom'


function Sidebar() {
  return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{"width":"280px"}}>
    <a href="www.github.com" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      
      <img className='mx-1' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="" width="30" height="24"/>
      <span className="fs-4 text-light">Sidebar</span>
    </a>
    <hr className='text-white' />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">

        <Link to="/home"  className='text-decoration-none'><button href="www.github.com" className="nav-link " aria-current="page">
        <i className="fa-solid fa-house-chimney mx-1"></i>
          Home
          </button>
        </Link>
      </li>
      <li className="nav-item">

       <Link to="/create-student" className='text-decoration-none'> <button href="www.github.com" className="nav-link " aria-current="page">
        <i className="fa-solid fa-graduation-cap mx-1"></i>
          Create Student
        </button></Link>
      </li>
      <li className="nav-item">

       <Link to="/create-teacher" className='text-decoration-none'> <button  className="nav-link " aria-current="page">
        <i className="fa-solid fa-person-chalkboard mx-1"></i>
            Create Teacher
        </button></Link>
      </li>        
    </ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <hr/>
    <div className="dropdown">
      <a href="www.github.com" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="www.github.com">New project...</a></li>
        <li><a className="dropdown-item" href="www.github.com">Settings</a></li>
        <li><a className="dropdown-item" href="www.github.com">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="www.github.com">Sign out</a></li>
      </ul>
    </div>
  </div>
  </>
}

export default Sidebar