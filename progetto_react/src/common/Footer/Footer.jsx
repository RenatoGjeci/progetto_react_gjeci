import React from 'react'
import "./Footer.css"
import logo1 from '../../logo-instagram.svg'
import logo2 from '../../logo-twitter.svg'
import logo3 from '../../logo-linkedin.svg'
import logo4 from '../../logo-facebook.svg'

const Footer = () => {
  return (
    <footer id="footer">
        <div>
          <ul className='icon_social'>
            <li>
              <a href="/"><img src = {logo1} alt= "logo" className = "logo_social"/></a>
            </li>
            <li>
              <a href="/"><img src = {logo2} alt= "logo" className = "logo_social"/></a>
            </li>
            <li>
              <a href="/"><img src = {logo3} alt= "logo" className = "logo_social"/></a>
            </li>
            <li>
              <a href="/"><img src = {logo4} alt= "logo" className = "logo_social"/></a>
            </li>
          </ul>
        </div>
        <p>&copy; 2024 horologium.com</p>
    </footer>
  )
}

export default Footer