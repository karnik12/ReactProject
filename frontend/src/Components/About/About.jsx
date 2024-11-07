import React from 'react'
import experience_icon from "../../Assets/experience.png"
import education_icon from "../../Assets/education.png"
import arrow_icon from "../../Assets/arrow.png"
import './About.css'
const About = () => {
  const handleArrow=()=>{
    window.location.href="#experience"
  }
  return (
    <>
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
                   <p>15+ Minor Projects <br/>
                     2 Major Projects of  <br />Frontend and Backend</p>
                 </div>
                 <div className="details-container">
                   <img
                     src={education_icon}
                     alt="Education icon"
                     className="icon"
                   />
                   <h3>Education</h3>
                   <p>B.Sc. in Physics, Maths & Electronics</p>
                 </div>
          </div>
             <div className="text-container">
               <p>
                 I am a passionate and dedicated MERN stack developer with a strong foundation in creating dynamic, user-focused web applications. Proficient in MongoDB, Express.js, React, and Node.js, I specialize in building full-stack applications that are scalable, maintainable, and optimized for performance. With a focus on clean, modular code and a keen eye for detail, I enjoy solving complex problems and bringing creative ideas to life through technology.
   
                 I am continuously learning and staying up-to-date with the latest industry trends to deliver high-quality solutions. Whether it's developing RESTful APIs, managing databases, or crafting intuitive user interfaces, I thrive in fast-paced environments and am always excited to tackle new challenges.
               </p>
             </div>
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

export default About
