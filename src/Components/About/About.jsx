import React from 'react'
import './About.css'
import theme_pattern from '../../public/theme_pattern.svg'

import name from '../../public/name.jpg'
const About = () => {
return (
  <div className="about" id='about'>
    <div className="about-title">
      <h1>About me</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
      <div className="about-left">
        <img src={name} alt="" className='name'/>
      </div>

      <div className="about-right">
        <div className="about-para">
          <p>I love designing websites and applicaaions</p>
          <p>My passsion is to become the best fullstack developer ever</p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>Next JS</p>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
      </div>
    </div>
    <div className="about-achievements">
      <div className="about-achievement">
        <h1>10+</h1>
        <p>Years of Experince</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>90+</h1>
        <p>Projects Completed</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>15+</h1>
        <p>Happy Clients</p>
      </div>
    </div>
  </div>
);
}

export default About