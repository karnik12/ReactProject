import React from 'react'
import { useEffect,useState } from 'react'
import './AdminMessages.css'
// import {  useNavigate } from 'react-router-dom';

const Messages = () => {
    // const navigate = useNavigate();
    const [data,setData]=useState([]);

    const token = localStorage.getItem('token');

    const fetchMessages =()=>{
              fetch("http://localhost:8081/admin/messages",{
                method:'GET',
                headers:{
                  'Authorization':`Bearer ${token}`
                },
              })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setData(data)
        })
        .catch(error => console.log(error));
    }
    useEffect(()=>{
       fetchMessages();
    },[]);


    const handleDelteMessage = async (id) => {
      await fetch(`http://localhost:8081/delete-message/${id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        // console.log(data)
        
        // console.log("hi")
        alert('Message Deleted Successfully')
        fetchMessages();
      })
      .catch(error => console.log(error))
    }

    

  return (
    <div>
        <table>
            <thead>
                <tr>
                   
                   
                   <th>Email</th>
                   <th>Messages</th>
                   <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.length && data.map((cur,id) =>(
                  <tr key={id}>
                    <td>{cur.email}</td>
                    <td>{cur.messages}</td>
                    
                    <td>
                    <button onClick={()=>handleDelteMessage(cur.id)}> DELETE</button>
                    </td>
                      
                     

                  </tr>
                ))}
            </tbody> 
         </table> 

      
    </div>
  )
}

export default Messages
