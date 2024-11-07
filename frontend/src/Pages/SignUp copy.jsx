import './Login.css'
import React from 'react'
import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);

    try {
        const response = await fetch('http://localhost:8081/register', {
            method: 'POST',
            body: data
        });

        const result = await response.json();

        if (response.ok) {
            console.log(result)
            alert('successfully registered');
        } else {
            console.error('Error:', result.error);
            alert('Registration failed');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        alert('An error occurred during registration');
    }
};
    

    
      return (
        <>
        <Navbar/>

        <div className="signup-container">
          <h2>SignUp </h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group' >
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}   placeholder='Enter your name'required />
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email'required />
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter strong password'required />
            </div>
            {/* <div className='form-group'>
                <label>Profession:</label>
                <input type="text" name="profession" value={formData.profession} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label>Experience:</label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label>Education:</label>
                <input type="text" name="education" value={formData.education} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label>Skills:</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label>Profile Image:</label>
                <input type="file" name="image" onChange={handleFileChange} required />
            </div> */}
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
        </form>
    
    
            
          
        </div>
        

        {/* <Contact/> */}
        <Footer/>
      
    </>
  )
}

export default SignUp;
