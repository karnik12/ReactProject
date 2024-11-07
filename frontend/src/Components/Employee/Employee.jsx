import React from 'react'
import { useState, useEffect } from 'react'
import './Employee.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'



const Employee = () => {
  const [users , setUsers]=useState([])
  const navigate = useNavigate();
  const fetchUser =()=>{
    fetch(`http://localhost:8081/users`,{
      method:'GET',
      
    })
.then(res => res.json())
.then(data => {
console.log(data)
setUsers(data)
})
.catch(error => console.log(error));
}

useEffect(()=>{
  fetchUser();
},[]);

const handle =(id)=>{
  navigate(`/Hero/${id}`)
}

  return (
    <>
    <Navbar/>
    <div className="landing-page">
      <h1>Welcome to Our Page!</h1>
      <p>Here's a list of our team members:</p>

      <table className="user-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Portfolio</th>
            
          </tr>
        </thead>
        <tbody>
          {users.length && users.map((user) => (
            <tr key={user.id}>
             
              <td><img src={user.image} alt={user.name} /></td>
               <td>{user.name}</td>
              <td>{user.profession}</td>
              <td><button onClick={()=>{handle(user.id)}}>visit </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
      
    </>
  )
}

export default Employee
