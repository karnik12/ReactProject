import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      
    
      
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.email || !formData.password) {
            alert("Please fill out both fields.");
            return;
          }
      
      
          fetch('http://localhost:8081/login',{
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
        <section className="section">
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    {/* <div className="login-brand">
                        <img src="http://puffintheme.com/craft/codiepie/dist/assets/img/CodiePie-fill.svg" alt="logo" width="100" className="shadow-light rounded-circle"/>
                    </div> */}
                    <div className="card card-primary">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="needs-validation" novalidate="">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                     id="email" 
                                     type="email" 
                                     className="form-control" 
                                     name="email" 
                                     tabindex="1" 
                                     required
                                    autoFocus
                                    onChange={handleChange}/>
                                    <div className="invalid-feedback">
                                        Please fill in your email
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="d-block">
                                        <label htmlFor="password" className="control-label">Password</label>
                                    </div>
                                    <input id="password" type="password" className="form-control" name="password" tabindex="2"  onChange={handleChange} required/>
                                    <div className="invalid-feedback">
                                        please fill in your password
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" tabindex="4">
                                    Login
                                    </button>
                                </div>
                            </form>
                           
                          
                        </div>
                    </div>
                    <div className="mt-5 text-muted text-center">
                        Don't have an account? <a href="/signup">Create One</a>
                    </div>
                    <div className="simple-footer">
                        Copyright &copy; CodiePie 2024
                    </div>
                </div>
            </div>
        </div>
    </section>
       
        </> )  
  
}

export default Login

