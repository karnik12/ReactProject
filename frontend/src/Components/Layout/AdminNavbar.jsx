import React from 'react'
import './AdminNavbar.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout =()=>{
       localStorage.removeItem("token")
       navigate('/') 
       return;

  }
  return (
    <>
       <div className='navbar'>
        <h2 className='nav-logo'>Admin Pannel</h2>
        <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
    </>
  )
}

export default Navbar
