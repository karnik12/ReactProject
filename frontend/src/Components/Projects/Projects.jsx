import React from 'react'
import './Projects.css'
import arrow_icon from "../../Assets/arrow.png"
import project1 from '../../Assets/project-1.png'
import project2 from '../../Assets/project-2.png'
import project3 from '../../Assets/project-3.png'



const Projects = () => {

   const handleGithubPro1=()=>{
    window.location.href='https://github.com/karnik12/clothing-ecommerce'
   }
   const handleGithubPro2=()=>{
    window.location.href='https://github.com/karnik12/IT-Services-webapp'
   }
   const handleGithubPro3=()=>{
    window.location.href='https://github.com/karnik12/Weather-webApp'
   }
   const handleArrow =()=>{
    window.location.href='#contact'
   }

  return (
    <>
       <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubPro1}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubPro1}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubPro2}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubPro2}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubPro3}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubPro3}
              >
                Live Demo
              </button>
            </div>
          </div>
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

export default Projects
