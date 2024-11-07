import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name:"",
    email: "",
    password: "",
    confirm_password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data",formData)
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password || !formData.confirm_password){
      alert("Fill the data properly")
    }else{
      if(formData.password==formData.confirm_password){

        // const data = new FormData();
        // data.append("first_name", formData.first_name);
        // data.append("last_name", formData.last_name);
        // data.append("email", formData.email);
        // data.append("password", formData.password);
    
        try {
          const response = await fetch("http://localhost:8081/register", {
            method: "POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
    
          });
    
          const result = await response.json();
    
          if (response.ok) {
            alert("successfully registered");
            setFormData({
              first_name:"",
              last_name:"",
              email:"",
              password:"",
              confirm_password:"",
            });
          } else {
            console.error("Error:", result.error);
            alert("Registration failed");
          }
        } catch (error) {
          console.error("Error registering user:", error);
          alert("An error occurred during registration");
        }
      }else{
        alert('confirm password doesnot match to password')
      }
      };
    }


  return (
    <>
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              {/* <div className="login-brand">
                        <img src="http://puffintheme.com/craft/codiepie/dist/assets/img/CodiePie-fill.svg" alt="logo" width="100" className="shadow-light rounded-circle"/>
                    </div> */}
              <div className="card card-primary">
                <div className="card-header">
                  <h4>Register</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="first_name">First Name</label>
                        <input
                          id="first_name"
                          type="text"
                          className="form-control"
                          name="first_name"
                          autoFocus
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          id="last_name"
                          type="text"
                          className="form-control"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="password" className="d-block">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control pwstrength"
                          data-indicator="pwindicator"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="password2" className="d-block">
                          Password Confirmation
                        </label>
                        <input
                          id="password2"
                          type="password"
                          className="form-control"
                          name="confirm_password"
                          value={formData.confirm_password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Register
                      </button>
                    </div>
                    <div className="form-group" style={{ textAlign: "center" }}>
                      <a href="/login">Click here to login</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="simple-footer">
                Copyright &copy; CodiePie 2020
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
