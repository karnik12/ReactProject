import React from 'react'
import { useEffect,useState } from 'react'
import './AdminUsers.css'
import { useNavigate } from 'react-router-dom'
// import Sidebar from '../Components/Layout/Sidebar'





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
    <>
    <div class="main-wrapper main-wrapper-1">
    
    {/* <Sidebar/> */}
   
    <div className="main-content">
    <section className="section">
        <div className="section-header">
            <h1>DataTables</h1>
            {/* <div className="section-header-breadcrumb">
                <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div className="breadcrumb-item"><a href="#">Modules</a></div>
                <div className="breadcrumb-item">DataTables</div>
            </div> */}
        </div>

        <div className="section-body">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h4>Basic DataTables</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped v_center" id="table-1">
                                    <thead>
                                        <tr>
                                        <th className="text-center">
                                            #
                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Image</th>
                                        <th>Department</th>
                                        <th>Qualification</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length && users.map((cur,index)=>(
                                        <tr key={index}>
                                        <td>
                                            {index +1}
                                        </td>
                                        <td>{cur.firstname} { cur.lastname}</td>
                                        <td className="align-middle">
                                          {cur.email}
                                        </td>
                                        <td>
                                            <img  src={cur.image} className="rounded-circle" width="35" data-toggle="tooltip" />
                                        </td>
                                        <td>{cur.department}</td>
                                        <td>{cur.qualification}</td>
                                        <td>
                                        <tr>
                                       
                                          <td><button class="btn btn-secondary" onClick={()=>handleEdit(cur.id)}> EDIT</button></td>
                                          <td><button  class="btn btn-secondary" onClick={()=>handleDelteUser(cur.id)}> DELETE</button></td>
                                        </tr>
                                        </td>
                                        </tr> 
                                        ))}

                                
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</div>

</div>
</>  )
}

export default AdminUsers
