import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>A university is a vibrant hub of learning, research, and personal growth, offering students opportunities to explore diverse fields of study and prepare for their future careers. It fosters a community of scholars, educators, and students who collaborate to solve real-world problems and push the boundaries of knowledge. Beyond academics, universities provide an environment for personal development through extracurricular activities, cultural events, and social interactions, shaping well-rounded individuals.</p>
        <p>Grading criteria provide a clear framework for evaluating students' performance, ensuring consistency and fairness in assessment. It typically includes specific standards for aspects such as accuracy, completeness, creativity, and adherence to instructions, with each element weighted according to its importance. Effective grading criteria help students understand expectations, guide their efforts, and provide constructive feedback for improvement.</p>

      </div>
    </div>
  )
}

export default About
