import React from 'react'
import './Hero.css'
import profile_pic from '../../Assets/profile-pic.png'
import linkedin_icon from '../../Assets/linkedin.png'
import github_icon from "../../Assets/github.png"
import resume from '../../Assets/resume-example.pdf'
import experience_icon from "../../Assets/experience.png"
import education_icon from "../../Assets/education.png"
import arrow_icon from "../../Assets/arrow.png"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const Hero = () => {

  const {id}=useParams;

  const [users , setUsers]=useState([])


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
        setUsers(data);
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



  // ======================
  const handleCv=()=>{
    window.open(resume)
  }
  const handleContact=()=>{
    window.location.href="#contact"
  }
  const handleLinkedin =()=>{
    window.location.href='www.linkedin.com/in/karnik-sharma-223a971b9'
  }
  const handleGithub =()=>{
    window.location.href='https://github.com/karnik12'
  }
  // ========================

  const handleArrow=()=>{
    window.location.href="#experience"
  }

  return (
    <>
    
     <section id="profile">
      <div className="section__pic-container">
        <img src={users.image} alt=' profile pic' />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">{users.name}</h1>
        <p className="section__text__p2">{users.profession}</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={handleCv}
          >
            Download CV
          </button>
          <button
          className='btn btn-color-1'
          onClick={handleContact}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin_icon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={handleLinkedin}
          />
          <img
            src={github_icon}
            alt="My Github profile"
            className="icon"
            onClick={handleGithub}
          />
        </div>
      </div>
    </section> 


    


    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

        <div className="about-details-container">
          <div className="about-containers">
                 <div className="details-container">
                   <img
                     src={experience_icon}
                     alt="Experience icon"
                     className="icon"
                   />
                   <h3>Experience</h3>
                   <p>{users.experience}</p>
                 </div>
                 <div className="details-container">
                   <img
                     src={education_icon}
                     alt="Education icon"
                     className="icon"
                   />
                   <h3>Education</h3>
                   <p>{users.education}</p>
                 </div>
          </div>
             {/* <div className="text-container">
               <p>
                 I am a passionate and dedicated MERN stack developer with a strong foundation in creating dynamic, user-focused web applications. Proficient in MongoDB, Express.js, React, and Node.js, I specialize in building full-stack applications that are scalable, maintainable, and optimized for performance. With a focus on clean, modular code and a keen eye for detail, I enjoy solving complex problems and bringing creative ideas to life through technology.
   
                 I am continuously learning and staying up-to-date with the latest industry trends to deliver high-quality solutions. Whether it's developing RESTful APIs, managing databases, or crafting intuitive user interfaces, I thrive in fast-paced environments and am always excited to tackle new challenges.
               </p>
             </div> */}
        </div>
      
      <img
        src={arrow_icon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleArrow}
        
      />
    </section>
    </>
  )
}

export default Hero
