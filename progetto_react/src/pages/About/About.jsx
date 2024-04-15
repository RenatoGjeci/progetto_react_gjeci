import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='aboutImage' style={{backgroundImage: "url(https://img.freepik.com/free-photo/luxury-wristwatch-with-accurate-minute-hand-detail-generated-by-ai_188544-27738.jpg)"}}> 
         <h1>About</h1>  
        </div>
        <div className='aboutText'>
          <h1>La nostra storia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. 
            Suspendisse in est ante in nibh mauris cursus mattis molestie. 
            Lectus sit amet est placerat. Semper eget duis at tellus. 
            </p>
            <h1>Il nostro obiettivo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. 
            Suspendisse in est ante in nibh mauris cursus mattis molestie. 
            Lectus sit amet est placerat. Semper eget duis at tellus. 
            </p>
            <h1>La nostra visione</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. 
            Suspendisse in est ante in nibh mauris cursus mattis molestie. 
            Lectus sit amet est placerat. Semper eget duis at tellus. 
            </p>
        </div>
    </div>
  )
}

export default About