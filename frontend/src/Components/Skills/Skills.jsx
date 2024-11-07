import React from 'react'
import './Skills.css'
import arrow_icon from "../../Assets/arrow.png"
import checkmark_icon from "../../Assets/checkmark.png"

const Skills = () => {
  const handleArrow =()=>{
    window.location.href='#projects'
   }
  return (
    <>
    
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark_icon}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git & Github</h3>
                  <p>Intermediate</p>
                </div>
              </article>
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

export default Skills
