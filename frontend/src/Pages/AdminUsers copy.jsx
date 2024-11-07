import React from 'react'
import { useEffect,useState } from 'react'
import './AdminUsers.css'
import { useNavigate } from 'react-router-dom'



const AdminUsers = () => {
    
    const [users , setUsers]=useState([])

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const fetchUser =()=>{
              fetch("http://localhost:8081/admin/users",{
                method:'GET',
                headers:{
                  'Authorization':`Bearer ${token}`
                },
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
   const handleDelteUser = async (id)=>{
       await fetch(`http://localhost:8081/delete-user/${id}`,{
        method:'DELETE',
       })
       .then(response => response.json())
       .then(data =>{
        alert(data.message);
        fetchUser();
        
       }).catch( error => console.log(error))
   }

 const handleEdit =(id)=>{
    navigate(`/admin/updateuser/${id}`)
 }
    

  return (
    
    <div className='mainContainer'>
      
        <table>
            <thead>
                <tr>
                   <th>Image</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Password</th>
                   <th>Experience</th>
                   <th>Department</th>
                   <th>Qualification</th>
                   <th>Skills</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length && users.map((cur,index) =>(
                  <tr key={index}>
                    <td><img src={cur.image}  /></td>
                    <td>{cur.name}</td>
                    <td>{cur.email}</td>
                    <td>{cur.password}</td>
                    <td>{cur.experience}</td>
                    <td>{cur.profession}</td>
                    <td>{cur.education}</td>
                    <td>{cur.skills}</td>
                    <td>
                       <tr>
                        <td><button onClick={()=>handleEdit(cur.id)}> EDIT</button></td>
                        <td><button onClick={()=>handleDelteUser(cur.id)}> DELETE</button></td>
                       </tr>
                    </td>
                      
                     

                  </tr>
                ))}
            </tbody> 
         </table> 

      
    </div>
  )
}

export default AdminUsers
