import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
// import Contact from '../Components/Contact/Contact'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      // const[token, setToken]=useState(null)
    
      const [errorMessage, setErrorMessage] = useState("");
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.email || !formData.password) {
          setErrorMessage("Please fill out both fields.");
          return;
        }
    
    
        console.log("Login data:", formData);
        setErrorMessage("");

        fetch('http://localhost:8081/auth/login',{
          method:'POST',
          headers:{
            'Content-Type':"application/json",
          },
          body:JSON.stringify(formData),
        })
        .then((res)=>res.json())
        .then((data)=>{
             console.log("data" ,data);
             if(data.success){
             alert("login successful!")

            //  setToken(data.token);
             localStorage.setItem('token',data.token);
             console.log('token',data.token)
             navigate('/admin')
             }else{
                  alert("Invalid credentials")
             }
        })  
        .catch((error)=>{
          alert('data not fetch from backend ')
        })
      };
    
      return (
        <>
        <Navbar/>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
    
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
    
            {errorMessage && <p className="error-message">{errorMessage}</p>}
    
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </div>
        <Footer/>
        </> )  
  
}

export default Login

