import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './SignUp.css'

const UpdateTable = () => {
  const {id}=useParams();
  // const[formData, setFormData] = useState({
  //   name:"",
  //   email:"",
  // });


  const[user , setUser]=useState({
      name:"",
      email:"",
    });



  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`http://localhost:8081/users/${id}`,{
        method:'GET',
        headers:{
          "Content-Type":"application/json"
        }
      });

      if (response.ok){
        const data = await response.json();
        console.log('fetch data',data);
        setUser(data);
      }else{
        console.log("failed to fetch user info")
      }

    } catch (error) {
      console.error(" error fetching selected user data")
    }
  }


  useEffect(() => {
    fetchUserInfo();
  }, []);

  console.log(user.image)

  const handleUpdate = (id) => {

    const Data = new FormData();
    Data.append('name', user.name);
    Data.append('email', user.email);
    Data.append('password', user.password);
    Data.append('department', user.profession);
    Data.append('experience', user.experience);
    Data.append('qualification', user.education);
    Data.append('skills', user.skills);
    Data.append('file', user.image);


    console.log(Data)``

    fetch(`http://localhost:8081/update-user/${id}`, {
      method: 'PUT',
      headers:{
        "Content-Type":"multipart/formdata"
      },
      body: Data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        
      })
      
      .catch((error) => {
        console.error('Error:', error);
      });

      setUser({
        name:"",
        email:"",
      })
  };
  const handleChange = (e) => {
    setUser((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='signup-container'>
      <form onSubmit={()=>handleUpdate(id)}>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name='name'
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            name='email'
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            name='department'
            type="text"
            placeholder="Enter your department"
            // value={user.department}
            onChange={handleChange} 
          />
        </div>


        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            name='qualification'
            type="text"
            placeholder="Enter your Qualification"
            // value={user.qualification}
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            name='experience'
            type="text"
            placeholder="Enter your experience"
            // value={user.experience}
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            className='skills'
            name='skills'
            type="text"
            placeholder="Enter your skills"
            // value={user.skills}
            onChange={handleChange} 
          />
          <input
            className='skills'
            name='skills'
            type="text"
            placeholder="Enter your skills"
            // value={user.skills}
            onChange={handleChange} 
          />
          <input
            className='skills'
            name='skills'
            type="text"
            placeholder="Enter your skills"
            // value={user.skills}
            onChange={handleChange} 
          />
        </div>


        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            name='image'
            type="file"
            placeholder="upload your photo"
            onChange={handleChange} 
          />
        </div>


      
    
      
      <button type='submit' className='submit-btn'>Update User</button>
      </form>
    </div>
    
  );
};

export default UpdateTable;
